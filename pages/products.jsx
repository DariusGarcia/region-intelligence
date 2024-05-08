import ProductFeatures from '@/components/productFeatures'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { createClient } from 'next-sanity'
import groq from 'groq'
import BlogSection from '@/features/blog/blog'
import CTA from '@/components/cta'
import DefaultLayout from '@/components/layouts/defaultLayout'
import {
  BuildingLibraryIcon,
  InboxIcon,
  Square3Stack3DIcon,
  TrashIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { FaCity } from 'react-icons/fa'
import { Square2StackIcon } from '@heroicons/react/20/solid'
import {
  AddBoxOutlined,
  GpsFixedOutlined,
  LocationCity,
  LocationCityOutlined,
  PriceChangeOutlined,
  ReduceCapacityRounded,
  SquareFootSharp,
} from '@mui/icons-material'

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
              <div className='flex flex-col gap-12 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left'>
                <h1>
                  <span className='block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl'>
                    <span className='block text-gray-900'>
                      Data Driven Insights
                    </span>
                    <span className='block'>Made Easy</span>
                  </span>
                </h1>
                <p className=' text-base text-black sm:text-xl lg:text-lg'>
                  <span className='text-orange-400 font-semibold italic'>
                    Simple, quick, insightful.
                  </span>{' '}
                  Transforming Southern California's urban challenges into
                  opportunities for smarter development
                </p>
                <div className='flex flex-row gap-8 lg:justify-start justify-center pb-24 md:md-0'>
                  <Link
                    href='/dashboard'
                    className='w-56 bg-black transition ease-out hover:bg-gray-500 p-2 rounded-md px-4 text-center  text-white font-semibold'>
                    Get Started
                  </Link>
                </div>
              </div>
              <div className='relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center'>
                <div className='flex flex-col'>
                  <div className='flex flex-row gap-6'>
                    <p className='w-24 text-center font-semibold bg-black text-white p-2 rounded-sm'>
                      Save
                    </p>
                    <p className='w-24 text-center font-semibold p-2 rounded-sm bg-blue-500 text-white'>
                      Export
                    </p>
                  </div>
                  <div className='flex flex-row justify-between text-2xl gap-4'>
                    <p className='font-semibold border-b border-black'>
                      Overview
                    </p>
                    <p className='font-semibold border-b border-gray-200 '>
                      Land Use
                    </p>
                    <p className='font-semibold border-b border-gray-200'>
                      Hazards
                    </p>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <div className='flex flex-col gap-12'>
                      <p className='p-2 text-white rounded-md text-center bg-red-400'>
                        Residential
                      </p>
                      <p className='p-2 text-white rounded-md text-center bg-neutral-800'>
                        Commercial
                      </p>
                      <p className='p-2 text-white rounded-md text-center bg-green-600'>
                        Agriculture
                      </p>
                    </div>
                    <div className='flex flex-col gap-12'>
                      <span className='h-2 w-56 rounded-lg bg-gray-200' />
                      <span className='h-2 w-56 rounded-lg bg-gray-200' />
                      <span className='h-2 w-56 rounded-lg bg-gray-200' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className='mt-24 mx-0'>
              <div className='py-24 sm:py-32'>
                <div className='mx-auto w-full max-w-7xl p-24 rounded-md bg-gray-100'>
                  <div className='mx-auto max-w-2xl lg:mx-0'></div>
                  <div className='mx-auto max-w-2xl lg:max-w-none'>
                    <dl className='w-full grid md:max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4'>
                      {features.map((feature) => (
                        <div
                          key={feature.name}
                          className='flex flex-col w-full'>
                          <dt className='text-lg font-semibold leading-7 text-gray-900'>
                            <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-200'>
                              <feature.icon
                                className='h-12 w-12 text-black'
                                aria-hidden='true'
                              />
                            </div>
                            {feature.name}
                          </dt>
                          <dd className='mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                            <p className='flex-auto w-full'>
                              {feature.description}
                            </p>
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
    icon: FaCity,
  },
  {
    name: 'Land Insights',
    description: 'Understand the area and hazards  around a specific location.',
    href: '#',
    icon: Square2StackIcon,
  },
  {
    name: 'Opportunities',
    description:
      'Identify development opportunities across Southern California. ',
    href: '#',
    icon: GpsFixedOutlined,
  },
  {
    name: 'Price Comparatives',
    description:
      'Leverage our proprietary machine learning models to identify potential sales prices of land. ',
    href: '#',
    icon: PriceChangeOutlined,
  },
]
