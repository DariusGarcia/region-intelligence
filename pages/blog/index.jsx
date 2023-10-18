import { createClient } from 'next-sanity'
import groq from 'groq'
import BlogSection from '@/components/blog'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const client = createClient({
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
})

export default function BlogPage({ posts }) {
  return <BlogSection posts={posts} />
}

export async function getServerSideProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
      `)
  return {
    props: {
      posts,
    },
  }
}
