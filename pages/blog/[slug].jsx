import Head from 'next/head'
import Link from 'next/link'
import { createClient } from 'next-sanity'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const client = createClient({
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
})

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  block: {
    normal: ({ children }) => <p className='leading-loose '>{children}</p>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading='lazy'
          className='my-12 border-2 '
          src={urlFor(value).width(900).height(700).fit('max').auto('format')}
        />
      )
    },
    // Define how to render lists (ul) and list items (li)
    bulletList: ({ children }) => <ul className=' list-disc'>{children}</ul>,

    listItem: ({ children }) => <li className='list-disc '>{children}</li>,
  },
}
function BlogPost({ post }) {
  if (!post) {
    return null // Add a check to handle cases where 'post' is undefined
  }

  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    body = [],
    mainImage,
    publishedAt,
  } = post
  return (
    <>
      <Head>
        <title>
          Region Intelligence - Blog | Our platform revolutionizes the way you
          access and handle vital information, making your decision-making
          process quicker and more informed. Step into the future of property
          development.
        </title>
        <meta
          name='description'
          content=' No more navigating through complex research. With Region Intelligence,
  everything you need is just a few clicks away. Our platform
  revolutionizes the way you access and handle vital information,
  making your decision-making process quicker and more informed.
  Step into the future of property development - Join Region Intelligence
  today!'
        />
      </Head>
      <div className='bg-white py-6 sm:py-12'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <article className='mx-auto max-w-2xl lg:max-w-4xl'>
            <Link
              href='/blog'
              className='font-bold underline text-2xl md:text-3xl mb-8 hover:text-blue-700'>
              RI Blog
            </Link>
            {categories && (
              <ul className='flex flex-row gap-2'>
                {categories.map((category) => (
                  <li
                    className='font-semibold w-max mt-8 text-xs mb-2 bg-blue-600 text-white p-2 rounded-full'
                    key={category}>
                    {category}
                  </li>
                ))}
              </ul>
            )}
            <header className='mb-8'>
              {/* Blog title */}
              <h1 className='text-3xl md:text-5xl font-bold'>{title}</h1>
              {/* Main image */}
              <img
                src={urlFor(mainImage)
                  .width(1200)
                  .height(800)
                  .fit('max')
                  .auto('format')}
                alt={title}
                className='my-12 rounded-md shadow-md'
              />{' '}
              {/* Author */}
              <div className='flex flex-row gap-4 items-center mb-2'>
                <Image
                  src='/about/julianPortrait.JPG'
                  height={50}
                  width={50}
                  className='rounded-full'
                />
                <span className='font-bold text-2xl mb-4'>{name}</span>
              </div>
              {/* Published at */}
              <p className='italic text-gray-600'>
                {new Date(publishedAt).toDateString()}
              </p>
            </header>
            <div>
              {/* Blog body */}
              <PortableText value={body} components={ptComponents} />
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  publishedAt,
  mainImage
}`

export async function getServerSidePaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getServerSideProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post,
    },
  }
}

export default BlogPost
