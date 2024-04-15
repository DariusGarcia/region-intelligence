import ProductFeatures from '@/components/productFeatures'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { createClient } from 'next-sanity'
import groq from 'groq'
import BlogSection from '@/features/blog/blog'
import CTA from '@/components/cta'
import DefaultLayout from '@/components/layouts/defaultLayout'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const client = createClient({
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
})

export default function ProductsPage({ posts }) {
  return (
    <>
      {' '}
      <Head>
        <title>Region Intelligence - Products</title>
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
      <div className='relative overflow-hidden bg-white'>
        <div
          className='hidden lg:absolute lg:inset-0 lg:block'
          aria-hidden='true'>
          <svg
            className='absolute left-1/2 top-0 -translate-y-8 translate-x-64 transform'
            width={640}
            height={784}
            fill='none'
            viewBox='0 0 640 784'>
            <defs>
              <pattern
                id='9ebea6f4-a1f5-4d96-8c4e-4c2abf658047'
                x={118}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'>
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              y={72}
              width={640}
              height={640}
              className='text-gray-50'
              fill='currentColor'
            />
            <rect
              x={118}
              width={404}
              height={784}
              fill='url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)'
            />
          </svg>
        </div>

        <div className='relative pb-16 pt-6 sm:pb-24 lg:pb-32'>
          <main className='sm:mt-16'>
            <div className='lg:grid lg:grid-cols-12 lg:gap-8 mx-auto mt-6 max-w-7xl px-4 md:px-6 '>
              <div className='sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left'>
                <h1>
                  <span className='block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg'>
                    Coming soon
                  </span>
                  <span className='mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl'>
                    <span className='block text-gray-900'>
                      Data Driven Insights
                    </span>
                    <span className='block text-blue-600'>Made Easy</span>
                  </span>
                </h1>
                <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                  A unique experience tailored to fit your needs.
                </p>
                <div className='flex flex-row gap-8 mt-6'>
                  <Link
                    href='/dashboard'
                    className='bg-blue-600 transition ease-out hover:bg-blue-500 p-2 rounded-md px-4 w-max text-white font-semibold'>
                    Explore Product
                  </Link>
                  <Link
                    href='/why-us'
                    className='bg-white text-black underline transition ease-out p-2 rounded-md px-4 w-max hover:opacity-70  font-semibold'>
                    Why RI <span aria-hidden='true'>→</span>
                  </Link>
                </div>
                <div className='mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left'>
                  <p className='text-base font-medium text-gray-900'>
                    Sign up to get notified when it’s ready.
                  </p>
                  <form action='#' method='POST' className='mt-3 sm:flex'>
                    <label htmlFor='email' className='sr-only'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:flex-1'
                      placeholder='Enter your email'
                    />
                    <button
                      type='submit'
                      className='mt-3 w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center'>
                      Notify me
                    </button>
                  </form>
                  <p className='mt-3 text-sm text-gray-500'>
                    We care about the protection of your data. Read our{' '}
                    <a
                      href='/company/privacy'
                      className='font-medium text-gray-900 underline'>
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className='relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center'>
                <svg
                  className='absolute left-1/2 top-0 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden'
                  width={640}
                  height={784}
                  fill='none'
                  viewBox='0 0 640 784'
                  aria-hidden='true'>
                  <defs>
                    <pattern
                      id='4f4f415c-a0e9-44c2-9601-6ded5a34a13e'
                      x={118}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'>
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-gray-200'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    y={72}
                    width={640}
                    height={640}
                    className='text-gray-50'
                    fill='currentColor'
                  />
                  <rect
                    x={118}
                    width={404}
                    height={784}
                    fill='url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)'
                  />
                </svg>
                <div className='relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md'>
                  <button
                    type='button'
                    className='relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                    <span className='sr-only'>
                      Watch our demo to learn more.
                    </span>
                    <Image
                      className='w-full'
                      width={900}
                      height={600}
                      priority
                      style={{ objectFit: 'contain' }}
                      src='/productsHeader.png'
                      alt='product header'
                    />
                  </button>
                </div>
              </div>
            </div>
            <section className='mt-12 mx-0'>
              <ProductFeatures />
            </section>
            <section>
              <section className=' my-12 h-full flex justify-center w-full px-4 md:px-0 '>
                <div className='max-w-7xl'>
                  <BlogSection posts={posts} />
                </div>
              </section>
              <CTA />
            </section>
          </main>
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

ProductsPage.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      <>{page}</>
    </DefaultLayout>
  )
}
