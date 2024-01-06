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
      <div className='bg-gray-800 py-6 sm:py-12'>
        <div className='mx-auto max-w-7xl md:px-6'>
          <div className='mx-auto '>
            <Link
              href='/blog'
              className='text-lg font-bold tracking-tight text-white sm:text-xl hover:text-blue-700 border-b-4 border-gray-200 hover:border-blue-700'>
              From the RI Blog
            </Link>
            <p className='mt-2 text-3xl leading-8 text-gray-200'>
              The Latest From Our Blog
            </p>
            <div className=' mt-16 overflow-x-auto space-x-8 lg:mt-20 flex justify-between gap-8 '>
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
                        className='relative isolate flex flex-col gap-8 lg:flex-row rounded-xl bg-white p-4 w-96 '>
                        {/* <div className='relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-96 lg:shrink-0'>
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
                        </div> */}
                        <div>
                          <div className='flex items-center gap-x-4 text-xs'>
                            <time
                              dateTime={publishedAt}
                              className='text-gray-500 italic'>
                              {new Date(publishedAt).toDateString()}
                            </time>
                            {/* <div className='relative z-10 rounded-full px-3 py-1.5 font-medium text-black w-full'>
                              {categories.map((category) => (
                                <span
                                  className='p-2 w-max text-xs bg-blue-600 text-white rounded-full font-semibold'
                                  key={category}>
                                  
                                </span>
                              ))}
                            </div> */}
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
                                <div className='font-semibold text-gray-900'>
                                  <p>
                                    <span className='absolute inset-0' />
                                    Julian Sotelo
                                  </p>
                                  <p>Founder / CEO</p>
                                </div>
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
