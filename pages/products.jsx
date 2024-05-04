import ProductFeatures from '@/components/productFeatures'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { createClient } from 'next-sanity'
import groq from 'groq'
import BlogSection from '@/features/blog/blog'
import CTA from '@/components/cta'
import DefaultLayout from '@/components/layouts/defaultLayout'
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

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
        <div className='relative pb-16 pt-6 sm:pb-24 lg:pb-32'>
          <main className='sm:mt-16'>
            <div className='lg:grid lg:grid-cols-12 lg:gap-8 mx-auto mt-6 max-w-7xl px-4 md:px-6 '>
              <div className='sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left'>
                <h1>
                  <span className='mb-6 mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl'>
                    <span className='block text-gray-900'>
                      Data Driven Insights
                    </span>
                    <span className='block'>Made Easy</span>
                  </span>
                </h1>
                <p className='mt-3 text-base text-black sm:mt-5 sm:text-xl lg:text-lg'>
                  <span className='text-orange-400 font-semibold italic'>
                    Simple, quick, insightful.
                  </span>{' '}
                  Transforming Southern California's urban challenges into
                  opportunities for smarter development
                </p>
                <div className='flex flex-row gap-8 mt-6'>
                  <Link
                    href='/dashboard'
                    className='w-56 bg-black transition ease-out hover:bg-gray-500 p-2 rounded-md px-4 text-center text-white font-semibold'>
                    Get Started
                  </Link>
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
                <div className='relative mx-auto w-full rounded-lg  lg:max-w-md'>
                  <Image
                    className='w-full'
                    width={900}
                    height={600}
                    priority
                    style={{ objectFit: 'contain' }}
                    src='/landingHeader/landingHeader.png'
                    alt='product header'
                  />
                </div>
              </div>
            </div>
            <section className='mt-12 mx-0'>
              <div className='py-24 sm:py-32'>
                <div className='mx-auto max-w-7xl p-12 rounded-md bg-gray-200'>
                  <div className='mx-auto max-w-2xl lg:mx-0'></div>
                  <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
                    <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4'>
                      {features.map((feature) => (
                        <div key={feature.name} className='flex flex-col'>
                          <dt className='text-base font-semibold leading-7 text-gray-900'>
                            <div className='mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600'>
                              <feature.icon
                                className='h-6 w-6 text-white'
                                aria-hidden='true'
                              />
                            </div>
                            {feature.name}
                          </dt>
                          <dd className='mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                            <p className='flex-auto'>{feature.description}</p>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <section className=' my-12 h-full flex justify-center w-full px-4 md:px-0 '>
                <div className='max-w-7xl flex flex-col items-center gap-12'>
                  <h2 className='text-5xl font-bold'>Use Cases</h2>
                  <div className='w-full flex flex-col md:flex-row  justify-center gap-12 '>
                    {useCases.map((useCase) => (
                      <div
                        className='w-full text-white bg-neutral-800 rounded-md border-none'
                        key={useCase.id}>
                        <img
                          src={useCase.image}
                          alt=''
                          className='w-full object-cover rounded-t-md border-none'
                        />
                        <div className='p-6 flex flex-col gap-6'>
                          <h4 className='text-lg font-semibold'>
                            {useCase.title}
                          </h4>
                          <p>{useCase.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </section>
            <section className='mt-36'>
              <CTA />
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

const useCases = [
  {
    id: 1,
    image: '/cities.png',
    title: 'Cast A Wide Net',
    description:
      'Keep track of local commissions and new rezoning laws to find the latest happenings in a city near you.',
  },
  {
    id: 2,
    image: '/skyscraper.png',
    title: 'Reduce Time Becoming Compliant',
    description:
      'Identify the barriers of land development by looking at hazards and area potential. Giving you knowledge of development information. ',
  },
  {
    id: 3,
    image: '/desert.png',
    title: 'De-Risk your Investment',
    description:
      'Local price tracking keeps you ahead of your due diligence. If you are interested in a piece of land, identify price similarities and take advantage of the lead.',
  },
]
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

const features = [
  {
    name: 'City Developments',
    description: 'Keep track of local commissions and new rezoning laws. ',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Land Insights',
    description: 'Understand the area and hazards  around a specific location.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Opportunities',
    description:
      'Identify development opportunities across Southern California. ',
    href: '#',
    icon: TrashIcon,
  },
  {
    name: 'Price Comparatives',
    description:
      'Leverage our proprietary machine learning models to identify potential sales prices of land. ',
    href: '#',
    icon: TrashIcon,
  },
]
