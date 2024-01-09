import React from 'react'
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

export default function BlogShowCaseContainer({ posts }) {
  return (
    <>
      <div className='py-6 sm:py-12 px-4'>
        <div className='mx-auto max-w-7xl md:px-6'>
          <div className='mx-auto '>
            <Link
              href='/blog'
              className='text-lg font-bold tracking-tight text-orange-600 sm:text-xl hover:text-orange-700  '>
              RI Blog
            </Link>
            <div className='flex flex-col gap-8 md:gap-0 md:flex-row justify-between'>
              {' '}
              <p className='mt-2 text-3xl md:text-5xl leading-8 font-bold'>
                The Latest From Our Blog
              </p>
              <Link
                href='/blog'
                className='bg-blue-600 hover:bg-blue-500 transition ease-out p-2 px-4 w-max rounded-md flex text-white font-semibold items-center'>
                The RI Blog <span aria-hidden='true'>→</span>
              </Link>
            </div>
            <div className='mt-16 overflow-x-auto space-x-4 sm:space-x-8 lg:mt-20 flex flex-nowrap  justify-start gap-4 lg:gap-8'>
              {posts?.length > 0 &&
                posts.map(
                  ({
                    _id,
                    title = '',
                    slug = '',
                    publishedAt = '',
                    mainImage,
                    categories = '',
                  }) =>
                    slug && (
                      <article
                        key={_id}
                        className='relative isolate flex flex-col overflow-x-auto gap-8 lg:flex-row text-white rounded-xl bg-gray-900 p-4 md:w-96 lg:w-1/2 min-w-[250px] max-w-full'>
                        <div>
                          <div className='flex items-center gap-x-4 text-xs'></div>
                          <div className='group relative max-w-xl md:h-16'>
                            <h3 className='mt-3 text-xl font-semibold leading-6  group-hover:text-blue-700 group-hover:underline group-hover:transition group-hover:ease-out'>
                              <Link
                                href={`/blog/${encodeURIComponent(
                                  slug.current
                                )}`}>
                                <span className='absolute inset-0' />
                                {title}
                              </Link>
                            </h3>
                          </div>
                          <div className='mt-6 flex items-end justify-end md:h-max border-t border-gray-900/5 pt-6'>
                            <div className='relative gap-x-4'>
                              <p className='text-gray-300'>
                                Posted:{' '}
                                <time
                                  dateTime={publishedAt}
                                  className='text-gray-300 italic'>
                                  {new Date(publishedAt).toDateString()}
                                </time>
                              </p>
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
