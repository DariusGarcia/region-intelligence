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
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    },
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
      <div className='w-full flex flex-col items-center mt-12'>
        <section className='flex flex-col justify-center items-start'>
          <h1>{title}</h1>
          <span>By {name}</span>
          {categories && (
            <ul>
              Posted in
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          )}

          <PortableText value={body} components={ptComponents} />
        </section>
      </div>
    </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
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
