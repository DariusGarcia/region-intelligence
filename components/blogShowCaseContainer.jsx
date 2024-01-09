import React from 'react'
import Link from 'next/link'
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { Carousel } from 'antd';

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
      <div className='flex justify-center w-full py-6 sm:py-12 px-4 '>
        <div className='mx-auto md:max-w-7xl w-full md:px-6'>
          <div className='mx-auto w-full md:px-4'>
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
            <div className='flex flex-col justify-center items-center'>
            <div className='mt-16 w-full max-w-7xl'>
              <Carousel autoplay>
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
                        <div>
                        <article
                          key={_id}
                          className='relative flex flex-col pt-6 items-center justify-center gap-8 lg:flex-row text-white rounded-xl bg-gray-900 p-4 w-full md:min-w-[250px] '>
                          <div>
                            <div className='flex items-center gap-x-4 text-xs'></div>
                            <div className='group relative md:h-56 flex flex-col items-center justify-center'>
                            <img
                              src={urlFor(mainImage)
                                .width(400)
                                .height(600)
                                .fit('max')
                                .auto('format')}
                              alt={title}
                              className='relative inset-0 aspect-[4/3] h-48 w-96 rounded-lg bg-gray-50 object-cover'
                            />
                              <h3 className='text-xl mt-6 font-semibold leading-6 group-hover:text-blue-700 group-hover:underline group-hover:transition group-hover:ease-out'>
                                <Link
                                  href={`/blog/${encodeURIComponent(
                                    slug.current
                                  )}`}>
                                  <span className='absolute inset-0' />
                                  {title}
                                </Link>
                              </h3>
                            </div>
                            <div className='mt-6 flex items-center place-content-center h-max justify-center md:h-max border-t border-gray-900/5 py-6'>
                              <div className='relative gap-x-4'>
                                <p className='text-gray-300 text-xs'>
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
                        </div>
                      )
                  )}
              </Carousel>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
