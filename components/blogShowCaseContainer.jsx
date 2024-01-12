import React from 'react'
import Link from 'next/link'
import { Carousel } from 'antd'
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const client = createClient({
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
})

export default function BlogShowCaseContainer({ posts }) {
  return (
    <>
      <div className='flex justify-center w-full py-6 sm:py-12 px-4'>
        <div className='mx-auto md:max-w-7xl w-full md:px-6'>
          <div className='mx-auto w-full md:px-4'>
            <Link
              href='/blog'
              className='text-lg font-bold tracking-tight text-orange-600 sm:text-xl hover:text-orange-700  '>
              RI Blog
            </Link>
            <div className='flex flex-col gap-8 md:gap-0 lg:flex-row justify-between'>
              {' '}
              <p className='mt-2 text-3xl md:text-5xl leading-8 font-bold'>
                The Latest From Our Blog
              </p>
              <Link
                href='/blog'
                className='bg-blue-600 hover:bg-blue-500 transition ease-out p-2 px-4 w-36 md:mt-4 lg:mt-0 text-center md:w-max rounded-md flex text-white font-semibold items-center'>
                The RI Blog <span aria-hidden='true'>→</span>
              </Link>
            </div>
            <div className='flex flex-col justify-center items-start'>
              <div className='mt-12 w-full max-w-7xl'>
                <Carousel autoplay>
                  {posts?.length > 0 &&
                    posts.map(
                      (post) =>
                        post.slug && (
                          <div key={post._id} className=''>
                            <article className='relative flex flex-col md:py-0 items-center h-full min-h-[500px] justify-center gap-8 lg:flex-row text-white rounded-xl bg-gray-900 p-4 w-full md:min-w-[250px] '>
                              <div className='h-full'>
                                <div className='flex items-start gap-x-4 text-xs'></div>
                                <div className='group relative min-h-[30rem] md:min-h-none flex flex-col items-center justify-center'>
                                  <ul className='flex flex-row flex-wrap justify-start w-full items-center gap-4 mb-4'>
                                    {post.categories.map((category) => (
                                      <li className='bg-blue-600 font-semibold p-2 rounded-full text-sm'>
                                        {category}
                                      </li>
                                    ))}
                                  </ul>
                                  <img
                                    src={urlFor(post.mainImage)
                                      .width(600)
                                      .height(800)
                                      .fit('max')
                                      .auto('format')}
                                    alt={post.title}
                                    className='relative inset-0 aspect-[6/5] h-54 md:h-64 w-96 lg:w-full max-w-[250px] lg:max-w-xl rounded-lg bg-gray-50 object-cover'
                                  />
                                  <h3 className='text-xl mt-6 h-min font-semibold leading-6 group-hover:text-blue-700 group-hover:underline group-hover:transition group-hover:ease-out'>
                                    <Link
                                      href={`/blog/${encodeURIComponent(
                                        post.slug.current
                                      )}`}>
                                      <span className='absolute inset-0' />
                                      {post.title}
                                    </Link>
                                  </h3>
                                  <p className='md:w-96 mt-2 text-gray-400'>
                                    {post.description || ''}
                                  </p>
                                </div>
                                <div className='relative gap-x-4 my-8 flex justify-center items-center'>
                                  <p className='text-gray-300 text-xs'>
                                    Posted:{' '}
                                    <time
                                      dateTime={post.publishedAt}
                                      className='text-gray-300 italic'>
                                      {new Date(
                                        post.publishedAt
                                      ).toDateString()}
                                    </time>
                                  </p>
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

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}
