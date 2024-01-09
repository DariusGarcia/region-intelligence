import { createClient } from 'next-sanity'
import groq from 'groq'
import BlogSection from '@/components/blog'

// refactor this client to a separate component
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const client = createClient({
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
})

export default function BlogPage({ posts }) {
  return (
  <div className='px-4 md:px-0 flex justify-center'>
    <div className='max-w-7xl'>
        <BlogSection posts={posts} />
    </div>
  </div>
  )
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
