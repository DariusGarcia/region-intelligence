import Head from 'next/head'
import Link from 'next/link'
import { createClient } from 'next-sanity'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'

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

// custom styling for Portable Text heading and list elements
const portableTextComponents = {
  list: {
    bullet: ({ children }) => (
      <ul className='list-disc my-3 ml-8 md:ml-12 leading-loose'>{children}</ul>
    ),
    number: ({ children }) => (
      <ol className='my-3 ml-8 md:ml-12 leading-loose list-decimal'>
        {children}
      </ol>
    ),
  },
  block: {
    normal: ({ children }) => <p className='leading-loose mt-2'>{children}</p>,
    h1: ({ children }) => (
      <h1 className='text-5xl leading-relaxed'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-4xl leading-relaxed mt-3'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-3xl leading-relaxed mt-3'>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-2xl leading-relaxed mt-3'>{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className='text-xl leading-relaxed mt-3'>{children}</h5>
    ),
    quote: ({ children }) => (
      <quote className='leading-loose'>{children}</quote>
    ),
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
          className='my-12 border-2 w-full'
          src={urlFor(value).width(900).height(700).fit('max').auto('format')}
        />
      )
    },
  },
}

export default function BlogPost({ post }) {
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
          content='No more navigating through complex research. With Region Intelligence,
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
              className='font-bold border-b-4 border-gray-200 text-2xl md:text-3xl mb-8 hover:text-blue-700 hover:border-blue-700'>
              RI Blog
            </Link>

            <header className='mb-8'>
              {/* Blog title */}
              <h1 className='mt-8 text-3xl md:text-5xl font-bold'>{title}</h1>
              {categories && (
                <ul className='mt-4 flex flex-row flex-wrap items-center justify-start gap-2'>
                  {categories.map((category) => (
                    <li
                      className='p-2 w-max text-xs bg-blue-600 text-white rounded-full font-semibold'
                      key={category}>
                      {category}
                    </li>
                  ))}
                </ul>
              )}
              {/* Main image */}
              <div className='flex justify-center items-center'>
                <img
                  src={urlFor(mainImage)
                    .width(1200)
                    .height(800)
                    .fit('max')
                    .auto('format')}
                  alt={title}
                  className='my-8 rounded-md shadow-md'
                />
              </div>
              {/* Author */}
              <span className='font-bold text-2xl mb-4'>{name}</span>
              {/* Published at */}
              <p className='italic text-gray-600'>
                {new Date(publishedAt).toDateString()}
              </p>
            </header>
            <div className='font-Lato'>
              {/* Blog body */}
              <PortableText value={body} components={portableTextComponents} />
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
