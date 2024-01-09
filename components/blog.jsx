import Link from 'next/link'
import { createClient } from 'next-sanity'
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

export default function BlogSection({ posts }) {
  return (
    <>
      <div className='bg-white py-6 sm:py-12'>
        <div className='mx-auto max-w-7xl'>
          <div className='mx-auto '>
            <p className='text-orange-600 font-semibold'>More Resources</p>
            <Link
              href='/blog'
              className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl hover:text-blue-700 border-b-4 border-gray-200 hover:border-blue-700'>
              Uncharted Territory
            </Link>
            <p className='mt-2 text-lg leading-8 text-gray-600'>
              Learn about how our solutions can help solve your business
              problems.
            </p>
            <div className='mt-16 space-y-8 lg:mt-20 lg:space-y-20'>
              {posts?.length > 0 &&
                posts.map(
                  ({
                    _id,
                    title = '',
                    category = '',
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
                              className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-red-500 hover:bg-gray-100'>
                              {category.map(cat=>cat.title)}
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
                                {/* <div className='font-semibold text-gray-900'>
                                  <p>
                                    <span className='absolute inset-0' />
                                    Julian Sotelo
                                  </p>
                                  <p>Founder / CEO</p>
                                </div> */}
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
