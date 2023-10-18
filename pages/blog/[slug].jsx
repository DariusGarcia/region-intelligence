import Head from 'next/head'

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

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading='lazy'
          className='my-12'
          src={urlFor(value).width(500).height(300).fit('max').auto('format')}
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
      <div className='w-full flex flex-col items-center justify-center mt-12'>
        <article className='w-full px-8 max-w-7xl flex flex-col justify-center items-start'>
          {categories && (
            <ul>
              {categories.map((category) => (
                <li
                  className='font-semibold text-xs mb-2 bg-gray-200 p-2 rounded-full'
                  key={category}>
                  {category}
                </li>
              ))}
            </ul>
          )}
          <header className='mb-12'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <span>By {name}</span>
          </header>
          {/* <span>{new Date(publishedAt).toDateString()}</span> */}
          <div>
            <PortableText value={body} components={ptComponents} />
          </div>
        </article>
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
  publishedAt
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
