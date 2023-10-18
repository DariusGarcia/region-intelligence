import Link from 'next/link'
import { createClient } from 'next-sanity'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'

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

const Index = ({ posts }) => {
  return (
    <>
      {' '}
      <div className='bg-white py-6 sm:py-12'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:max-w-4xl'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              From the RI Blog
            </h2>
            <p className='mt-2 text-lg leading-8 text-gray-600'>
              Learn about our how solutions can help your business problems.
            </p>
            <div className='mt-16 space-y-20 lg:mt-20 lg:space-y-20'>
              {posts.length > 0 &&
                posts.map(
                  ({
                    _id,
                    title = '',
                    slug = '',
                    publishedAt = '',
                    mainImage,
                  }) =>
                    slug && (
                      <article
                        key={_id}
                        className='relative isolate flex flex-col gap-8 lg:flex-row'>
                        <div className='relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-96 lg:shrink-0'>
                          <img
                            src={urlFor(mainImage)
                              .width(600)
                              .height(400)
                              .fit('max')
                              .auto('format')}
                            alt={title}
                            className='absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover'
                          />
                          <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
                        </div>
                        <div>
                          <div className='flex items-center gap-x-4 text-xs'>
                            <time
                              dateTime={publishedAt}
                              className='text-gray-500 italic'>
                              {new Date(publishedAt).toDateString()}
                            </time>
                            {/* <a
                              href={category.href}
                              className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'>
                              {category.title}
                            </a> */}
                          </div>
                          <div className='group relative max-w-xl'>
                            <h3 className='mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-blue-700 group-hover:underline group-hover:transition group-hover:ease-out'>
                              <Link
                                href={`/blog/${encodeURIComponent(
                                  slug.current
                                )}`}>
                                <span className='absolute inset-0' />
                                {title}
                              </Link>
                            </h3>
                            {/* <p className='mt-5 text-sm leading-6 text-gray-600'>
                              {post.description}
                            </p> */}
                          </div>
                          <div className='mt-6 flex border-t border-gray-900/5 pt-6'>
                            <div className='relative flex items-center gap-x-4'>
                              {/* <img
                                src={post.author.imageUrl}
                                alt=''
                                className='h-10 w-10 rounded-full bg-gray-50'
                              /> */}
                              <div className='text-sm leading-6'>
                                <p className='font-semibold text-gray-900'>
                                  <p>
                                    <span className='absolute inset-0' />
                                    Julian Sotelo
                                  </p>
                                  <p>Founder / CEO</p>
                                </p>
                                {/* <p className='text-gray-600'>
                                  {post.author.role}
                                </p> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    )
                )}
            </div>
          </div>
        </div>
      </div>
    </>
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

export default Index

const posts2 = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]
