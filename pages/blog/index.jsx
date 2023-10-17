import Link from 'next/link'
import { createClient } from 'next-sanity'
import groq from 'groq'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const client = createClient({
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
})

const Index = ({ posts }) => {
  return (
    <div className='mt-12 w-full flex flex-col justify-center items-center'>
      <main className='max-w-6xl w-full justify-center'>
        <h1 className='text-4xl font-bold'>Welcome to the RI Blog!</h1>
        <section>
          {posts.length > 0 &&
            posts.map(
              ({ _id, title = '', slug = '', publishedAt = '', name = '' }) =>
                slug && (
                  <article
                    key={_id}
                    className='my-8 w-max min-w-[56rem] bg-gray-100 p-4 rounded-md'>
                    <Link
                      href={`/blog/${encodeURIComponent(slug.current)}`}
                      className='underline font-semibold text-lg hover:text-blue-600'>
                      {title}
                    </Link>{' '}
                    <p className='italic'>
                      {' '}
                      {new Date(publishedAt).toDateString()}
                    </p>
                  </article>
                )
            )}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
  return {
    props: {
      posts,
    },
  }
}

export default Index
