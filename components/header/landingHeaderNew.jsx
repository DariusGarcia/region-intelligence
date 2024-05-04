import { ArrowUpIcon, HomeIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'
import { FaDollarSign } from 'react-icons/fa'
import Link from 'next/link'

export default function landingHeaderNew() {
  return (
    <div className='my-12 lg:my-24 flex flex-col items-center px-2 lg:px-0'>
      <AnimatePresence>
        {' '}
        <div className='p-4'>
          <h1 className='font-bold text-3xl text-center md:text-5xl flex w-full'>
            Bringing Innovation to Urban Landscapes
          </h1>
        </div>
        <section className='hidden lg:block max-w-7xl mt-24 '>
          <m.div className='grid grid-cols-5 bg-gray-50 rounded-lg'>
            <m.div
              key='card'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              className='col-span-1 p-4 flex flex-col justify-around gap-12'>
              <div className='w-8'>
                <Image src='/logo.png' width={50} height={50} alt='logo' />
              </div>
              <m.span
                custom={0}
                variants={cardVariantsFromLeft}
                className='h-3 w-56 bg-gray-300 rounded-full'
              />
              <m.span
                custom={1}
                variants={cardVariantsFromLeft}
                className='h-3 w-24 bg-blue-400 rounded-full'
              />
              <m.span
                custom={2}
                variants={cardVariantsFromLeft}
                className='h-3 w-36 bg-gray-300 rounded-full'
              />
              <m.span
                custom={3}
                variants={cardVariantsFromLeft}
                className='h-3 w-56 bg-blue-400 rounded-full'
              />
              <m.span
                custom={4}
                variants={cardVariantsFromLeft}
                className='h-3 w-48 bg-gray-300 rounded-full'
              />
              <m.span
                custom={5}
                variants={cardVariantsFromLeft}
                className='h-3 w-36 bg-gray-300 rounded-full'
              />
              <m.span
                custom={6}
                variants={cardVariantsFromLeft}
                className='h-3 w-36 bg-gray-300 rounded-full'
              />
            </m.div>
            <m.div
              key='card'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              className='pl-12 col-span-3 p-4 bg-white'>
              <m.div
                variants={cardVariants}
                className='pl-12 col-span-3 p-4 bg-white'>
                <p className='bg-gray-100 w-48 rounded-full p-2 font-semibold pl-4'>
                  Los Angeles
                </p>
                <section className='grid grid-cols-2 mt-12 gap-6'>
                  <article className='flex flex-row gap-12 items-center'>
                    <div>
                      <div className='flex flex-row gap-4 items-center'>
                        <p className='font-semibold text-2xl '>$180,000</p>
                        <span className='w-6 text-green-500'>
                          <ArrowUpIcon size={15} />
                        </span>
                      </div>
                      <p className=' '>Land Values</p>
                    </div>
                    <div className='w-12 flex items-center justify-center text-blue-500 bg-blue-200 p-4 rounded-full'>
                      <FaDollarSign size={15} />
                    </div>
                  </article>
                  <article className='flex flex-row gap-12 items-center'>
                    <div>
                      <div className='flex flex-row gap-4 items-center'>
                        <p className='font-semibold text-2xl '>1.056</p>
                        <span className='w-6 text-green-500'>
                          <ArrowUpIcon size={15} />
                        </span>
                      </div>
                      <p className=' '>Ratio</p>
                    </div>
                    <div className='w-12 text-green-500 bg-green-200 p-4 rounded-full'>
                      <HomeIcon size={15} />
                    </div>
                  </article>
                </section>
                <section className='grid grid-cols-2 mt-16 '>
                  <article className=''>
                    <h4 className='font-semibold'>Demographics</h4>
                  </article>
                  <article className=''>
                    <h4 className='font-semibold'>Trends</h4>
                  </article>
                </section>
              </m.div>
            </m.div>

            <m.div
              key='card'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              className='col-span-1 flex flex-col gap-12 bg-white'>
              <m.div
                variants={staggeredCardVariants}
                custom={0}
                className='flex flex-col gap-2'>
                <h3 className='text-xl font-semibold'>Latest Developments</h3>
                <span className='w-24 h-3 bg-blue-300 rounded-full' />
                <span className='w-16 h-3 bg-gray-300 rounded-full' />
              </m.div>
              <m.div
                variants={staggeredCardVariants}
                custom={1}
                className='flex flex-col gap-2'>
                <h3 className=' font-semibold'>Rainbow ADU</h3>
                <span className='w-48 h-3 bg-blue-300 rounded-full' />
                <span className='w-36 h-3 bg-gray-300 rounded-full' />
              </m.div>
              <m.div
                variants={staggeredCardVariants}
                custom={2}
                className='flex flex-col gap-2'>
                <h3 className=' font-semibold'>Major Hotel</h3>
                <span className='w-36 h-3 bg-blue-300 rounded-full' />
                <span className='w-40 h-3 bg-gray-300 rounded-full' />
              </m.div>
              <m.div
                variants={staggeredCardVariants}
                custom={3}
                className='flex flex-col gap-2'>
                <h3 className=' font-semibold'>Parcel Rezoning</h3>
                <span className='w-48 h-3 bg-blue-300 rounded-full' />
                <span className='w-40 h-3 bg-gray-300 rounded-full' />
              </m.div>
              <m.div
                variants={staggeredCardVariants}
                custom={4}
                className='flex flex-col gap-2'>
                <h3 className=' font-semibold'>Tentative Tract Map</h3>
                <span className='w-48 h-3 bg-blue-300 rounded-full' />
                <span className='w-48 h-3 bg-gray-300 rounded-full' />
              </m.div>
            </m.div>
          </m.div>
        </section>
        <section className='mt-24 mb-12 flex flex-col gap-24 md:gap-0 md:flex-row items-center justify-between w-full max-w-7xl p-4 xl:p-0'>
          <div className='md:w-1/2 w-full p-4'>
            <p className='mb-8 text-lg md:text-2xl '>
              Region Intelligence equips real estate professionals with dynamic
              tools for comprehensive market analysis. Track municipal changes,
              price trends, and new investment opportunities.
            </p>
            <Link
              className='text-blue-600 text-xl font-semibold underline '
              href='/waitlist'>
              Join Our Waitlist
            </Link>
          </div>
          <div>
            <img
              src='/about/sitePlan.jpg'
              alt=''
              className='w-full md:w-72 rounded-lg'
            />
          </div>
        </section>
        <section className='flex flex-col items-center justify-center w-full'>
          <div className='mt-24 w-full flex flex-col items-center max-w-7xl'>
            <h3 className='text-3xl font-bold mb-12'>What We Offer</h3>
            <div className='flex flex-col md:flex-row justify-between items-center gap-12 mt-12 w-full '>
              <div className='bg-gray-300 p-4 md:p-12 md:w-1/2 h-full '>
                <div className='flex flex-row gap-4 h-full pb-12'>
                  <div className='flex flex-col gap-6 bg-white p-4 rounded-md'>
                    <h4 className='text-xl font-semibold'>Cities</h4>
                    <div className='flex flex-row justify-between items-center gap-12'>
                      <p>Culver City</p>
                      <span className='h-2 bg-gray-200 w-24 rounded-md'></span>
                    </div>
                    <div className='flex flex-row justify-between items-center gap-12'>
                      <p>Buena Park</p>
                      <span className='h-2 bg-gray-200 w-24 rounded-md'></span>
                    </div>
                    <div className='flex flex-row justify-between items-center gap-12'>
                      <p>Azuza</p>
                      <span className='h-2 bg-gray-200 w-24 rounded-md'></span>
                    </div>
                    <div className='flex flex-row justify-between items-center gap-12'>
                      <p>Long Beach</p>
                      <span className='h-2 bg-gray-200 w-24 rounded-md'></span>
                    </div>
                    <div className='bg-gray-200 p-2 rounded-md flex flex-row justify-between items-center gap-12'>
                      <p>Anaheim</p>
                      <span className='bg-black text-white p-2 w-24 text-center rounded-md'>
                        TTM
                      </span>
                    </div>
                  </div>
                  <div className='h-full justify-end flex flex-col my-12  '>
                    <img
                      src='/building.png'
                      alt='image'
                      className='rounded-t-md w-56'
                    />
                    <div className='bg-white p-4 rounded-b-md flex flex-col items-center gap-6'>
                      <p>Tentative Tract Map</p>
                      <Link
                        href='#'
                        className='bg-neutral-300 p-2 rounded-md font-semibold w-full text-center'>
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-4 xl:p-0 md:w-1/2'>
                <h5 className='text-3xl font-semibold'>
                  Real-Time Data Driven Insights
                </h5>
                <p className='text-lg text-stone-600 mt-8'>
                  Leveraging artificial intelligence, we offer access to
                  instantaneous data on the ever-changing local market
                  landscape, transforming how decisions are made.
                </p>
                <ul className='list-disc flex flex-col gap-8 pl-6 mt-8'>
                  <li className='text-stone-600 text-lg'>
                    Discover the latest municipal developments in your area.
                  </li>
                  <li className='text-stone-600 text-lg'>
                    Understand upcoming rezoning changes and subdivisions in a
                    region.
                  </li>
                  <li className='text-stone-600 text-lg'>
                    Stay informed with daily updates on local market shifts.{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className='flex flex-col justify-center items-center gap-6 w-full mt-12 md:mt-24'>
          <div className='max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 w-full mt-24'>
            <div className='p-4 xl:p-0 md:w-1/2'>
              <h5 className='text-3xl font-semibold'>
                Land Leads and Comparables
              </h5>
              <p className='text-lg text-stone-600 mt-8'>
                Leveraging our comprehensive analysis, you gain a strategic
                advantage, by finding new land potential. Bringing you new land
                insights and development potential. You can just worry about
                closing the deal.{' '}
              </p>
              <ul className='list-disc flex flex-col gap-8 pl-6 mt-8'>
                <li className='text-stone-600 text-lg'>
                  Explore development trends within each city.
                </li>
                <li className='text-stone-600 text-lg'>
                  Find potential parcels that are prime for development.
                </li>
                <li className='text-stone-600 text-lg'>
                  Explore similar transaction costs of each parcel and find if
                  it makes sense to you.
                </li>
              </ul>
            </div>
            <div className='md:w-1/2 bg-gray-300 flex justify-center p-4 md:p-12 mt-12 md:mt-0'>
              <div className='flex flex-row gap-4 h-full pb-12 '>
                <div className='flex flex-col justify-between gap-6 bg-white p-4 rounded-md '>
                  <div className='flex flex-row justify-between'>
                    <span className='h-2 bg-gray-300 w-24 rounded-md' />
                    <span className='h-2 bg-gray-300 w-24 rounded-md' />
                  </div>
                  <div className='flex flex-row items-end gap-6'>
                    <span className='h-24 bg-red-400 opacity-70 w-2 rounded-md' />
                    <span className='h-20 bg-red-400 w-2 rounded-md' />
                    <span className='h-24 bg-red-400 opacity-70 w-2 rounded-md' />
                    <span className='h-16 bg-red-400 opacity-70 w-2 rounded-md' />
                    <span className='h-12 bg-red-400 opacity-70 w-2 rounded-md' />
                    <span className='h-20 bg-red-400 opacity-70 w-2 rounded-md' />
                    <span className='h-4 bg-red-400 opacity-70 w-2 rounded-md' />
                  </div>
                  <div className='flex flex-row justify-between'>
                    <div className='flex flex-col gap-4'>
                      <span className='h-2 bg-gray-300 w-16 rounded-md' />
                      <p className='font-bold text-lg'>1.8</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <span className='h-2 bg-gray-300 w-full rounded-md' />
                      <p className='font-bold text-lg'>Residential</p>
                    </div>
                  </div>
                </div>
                <div className='h-full justify-end flex flex-col my-12'>
                  <div className='bg-white p-4 rounded-b-md flex flex-col items-center gap-6 w-full'>
                    <p className='text-xl font-bold'>New Leads</p>
                    <div className='flex flex-row justify-between gap-6 w-full'>
                      <div className='flex flex-col gap-8 justify-between w-full'>
                        <span className='h-2 bg-gray-300 w-24 rounded-md' />
                        <span className='h-2 bg-gray-300 w-24 rounded-md' />
                        <span className='h-2 bg-gray-300 w-24 rounded-md' />
                        <span className='h-2 bg-gray-300 w-24 rounded-md' />
                      </div>
                      <div className='flex flex-col w-full h-full justify-between'>
                        <span className='h-2 bg-red-300 w-18 rounded-md' />
                        <span className='h-2 bg-green-300 w-18 rounded-md' />
                        <span className='h-2 bg-green-300 w-18 rounded-md' />
                        <span className='h-2 bg-green-300 w-18 rounded-md' />
                        <span className='h-2 bg-green-300 w-18 rounded-md' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full flex flex-col items-center justify-center'>
          <div className='mt-12 md:mt-24 w-full flex flex-col items-center max-w-7xl  '>
            <div className='flex flex-col md:flex-row justify-between gap-12 mt-12 '>
              <div className='bg-gray-300 p-4 md:p-12 md:w-1/2'>
                <div className='flex flex-col justify-center items-center md:flex-row gap-4 w-full'>
                  <div className='flex flex-col gap-6 bg-white p-4 rounded-md w-full'>
                    <div className='flex flex-row justify-between'>
                      <h4 className='text-xl font-semibold'>APN</h4>
                    </div>
                    <p className='font-bold text-lg h-max'>8675309</p>
                  </div>
                  <div className='flex flex-col gap-2 w-full'>
                    <div className='flex flex-col gap-6 bg-white p-4 rounded-md w-full'>
                      <div className='flex flex-row justify-between items-center gap-12 w-full h-full'>
                        <h5 className='font-semibold text-lg'>Hazard</h5>
                        <span className='h-2 bg-gray-400 w-16 rounded-md' />
                      </div>
                      <div className='flex flex-row '>
                        <span className='h-3 ml-2 bg-red-400 w-16 rounded-md' />
                        <span className='h-3 bg-red-400 opacity-30 w-24 rounded-md' />
                      </div>
                    </div>
                    <div className='flex flex-col gap-6 bg-white p-4 rounded-md'>
                      <div className='flex flex-row justify-between items-center gap-12 w-full h-full'>
                        <h5 className='font-semibold text-lg'>Area</h5>
                        <span className='h-2 bg-gray-400 w-16 rounded-md' />
                      </div>
                      <div className='flex flex-row'>
                        <span className='h-3 ml-2 bg-green-500 w-48 rounded-md' />
                        <span className='h-3 bg-green-400 opacity-30 w-16 rounded-md' />
                      </div>
                    </div>
                    <div className='flex flex-col gap-6 bg-white p-4 rounded-md'>
                      <div className='flex flex-row justify-between items-center gap-12 w-full h-full'>
                        <h5 className='font-semibold text-lg'>Zone</h5>
                        <span className='h-3 bg-yellow-400 w-16 rounded-md' />
                      </div>
                    </div>
                    <div className='flex flex-col gap-6 bg-white p-4 rounded-md'>
                      <div className='flex flex-row justify-between items-center gap-12 w-full h-full'>
                        <h5 className='font-semibold text-lg'>Land Use</h5>
                        <span className='h-3 bg-yellow-400 w-16 rounded-md' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-4 xl:p-0 md:w-1/2 mb-12'>
                <h5 className='text-3xl font-semibold'>
                  Risk Analysis and Zoning
                </h5>
                <p className='text-lg text-stone-600 mt-8'>
                  Navigate zoning laws and environmental risks with our detailed
                  risk assessments, ensuring your real estate decisions are
                  safeguarded and set for growth. Our tools provide clarity and
                  foresight in complex landscapes.
                </p>
                <ul className='list-disc flex flex-col gap-8 pl-6 mt-8'>
                  <li className='text-stone-600 text-lg'>
                    Get updated on potential obstacles that may effect land
                    development.
                  </li>
                  <li className='text-stone-600 text-lg'>
                    Employ our proprietary models that evaluate the efficacy of
                    land makeup and local regulations.
                  </li>
                  <li className='text-stone-600 text-lg'>
                    Real-time data to assess and strategize for project
                    resilience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatePresence>
    </div>
  )
}

const cardVariants = {
  hidden: {
    y: 350,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  },
}
const cardVariantsFromLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (index) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
      delay: index * 0.1, // Adjust the delay for staggered effect
    },
  }),
}

const staggeredCardVariants = {
  hidden: {
    y: 350,
    opacity: 0,
  },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
      delay: index * 0.1, // Adjust the delay for staggered effect
    },
  }),
}
