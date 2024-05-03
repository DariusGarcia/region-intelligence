import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import CTA from '@/components/cta'
import DefaultLayout from '@/components/layouts/defaultLayout'
export default function WhyUsPage() {
  return (
    <>
      <Head>
        <title>Region Intelligence - Why Us</title>
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
      <div className=''>
        <div className='relative isolate pb-24 overflow-hidden bg-gradient-to-b from-blue-100/20 pt-8 '>
          <div className='mx-auto max-w-7xl px-6 pt-6 sm:py-12 z-50 lg:px-8 flex md:flex-row flex-col justify-between'>
            <div className='md:mx-auto w-full mt-6 lg:mx-0 z-50  lg:max-w-none flex flex-col justify-center gap-6'>
              <h2 className='max-w-2xl text-4xl font-bold tracking-tight text-neutral-500 sm:text-5xl lg:col-span-2 xl:col-auto '>
                Analysts
              </h2>

              <h2 className='max-w-2xl text-4xl font-bold tracking-tight text-neutral-500 sm:text-5xl lg:col-span-2 xl:col-auto '>
                Brokers
              </h2>

              <h2 className='max-w-2xl text-4xl font-bold tracking-tight text-neutral-500 sm:text-5xl lg:col-span-2 xl:col-auto '>
                Developers
              </h2>

              <h2 className='max-w-2xl text-4xl z-50 font-bold tracking-tight text-black sm:text-5xl lg:col-span-2 xl:col-auto h-max'>
                For Sellers
              </h2>
              <h2 className='max-w-2xl text-4xl z-50 font-bold tracking-tight text-neutral-500 sm:text-5xl lg:col-span-2 xl:col-auto h-max'>
                You
              </h2>
              <p className='italic text-2xl my-8'>
                A unique experience tailored to fit your needs.{' '}
              </p>
              <div className='flex flex-row gap-8 z-50 items-center mt-12 md:mt-0'>
                <Link
                  href='/products'
                  className='bg-black w-56 text-center rounded-md text-white p-2 z-50 transition ease-out hover:bg-gray-500'>
                  Get Started
                </Link>
              </div>
            </div>
            <div className='w-full flex justify-end'>
              <Image
                src='/whyUs.png'
                priority={true}
                width={800}
                height={1200}
                alt='aerial view of LA'
                className=' w-96 max-w-lg my-8 md:my-0 rounded-lg md:mt-0 '
              />
            </div>
          </div>
        </div>
        {/* Data is the new oil section */}
        <div className='w-full flex justify-center'>
          <div className='max-w-7xl md:pt-0 md:my-36 w-full grid grid-cols-1 md:grid-cols-3 items-start justify-center'>
            <div className='flex flex-col gap-6'>
              <h3 className='font-bold text-lg'>First Mover Advantage</h3>
              <p className='w-96'>
                Get the latest information on city planning to stay ahead of
                your competition. We provide all of the analysis at your
                fingertips so all you have to do is make the call.{' '}
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <h3 className='font-bold text-lg'>Data Driven Decision Making</h3>
              <p className='w-96'>
                We leverage AI in our data process so you can get real-time
                insights on latest city development trends.{' '}
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <h3 className='font-bold text-lg'>A Growing Community</h3>
              <p className='w-96'>
                Our community of investors, developers, builders, and analysts
                value our data.{' '}
              </p>
            </div>
          </div>
        </div>
        {/* LEVERAGE AI section */}
        <div className='flex flex-col w-full items-center justify-center mb-24'>
          <section className='mt-24 w-full flex flex-col items-center max-w-7xl '>
            <h3 className='text-5xl font-bold mb-12'>Features</h3>
            <div className='flex flex-row justify-between gap-12 mt-12 '>
              <div className='bg-gray-300 p-12 w-1/2'>
                <div className='flex flex-row gap-4'>
                  <div className='flex flex-col gap-6 bg-white p-4 rounded-md'>
                    <h4 className='text-xl font-semibold'>New Developments</h4>
                    <div className='grid grid-cols-4 gap-8 w-full p-1'>
                      <p className='font-semibold text-sm'>APN(s)</p>
                      <p className='font-semibold text-sm'>City</p>
                      <p className='font-semibold text-sm'>Recent Update</p>
                      <p className='font-semibold text-sm'>More</p>
                    </div>
                    <div className='grid grid-cols-4 gap-8 w-full items-center p-1'>
                      <span className='h-2 bg-gray-200 w-24 rounded-md  items-center'></span>
                      <p>Buena Park</p>
                      <p>02-24</p>
                      <p className='bg-neutral-400 p-2 text-xs text-center  text-black'>
                        View Details
                      </p>
                    </div>
                    <div className='grid grid-cols-4 gap-8 w-full bg-neutral-100 p-1 items-center'>
                      <span className='h-2 bg-gray-400 w-24 rounded-md'></span>
                      <p>Irvine</p>
                      <p>02-24</p>
                      <p className='bg-neutral-800 p-2 text-xs text-center  text-white'>
                        View Details
                      </p>
                    </div>
                    <div className='grid grid-cols-4 gap-8 w-full items-center p-1'>
                      <span className='h-2 bg-gray-200 w-24 rounded-md  items-center'></span>
                      <p>Los Angeles</p>
                      <p>02-24</p>
                      <p className='bg-neutral-400 p-2 text-xs text-center  text-black'>
                        View Details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-1/2'>
                <h5 className='text-3xl font-semibold'>
                  Aggregated Municipal Items
                </h5>
                <p className='text-lg text-stone-600 mt-8'>
                  Region Intelligence is at the forefront of uniting
                  municipalities through cutting edge technologies.
                </p>
                <ul className='list-disc flex flex-col gap-8 pl-6 mt-8'>
                  <li className='text-stone-600 text-lg'>
                    See Individual land requirements for your developments.
                  </li>
                  <li className='text-stone-600 text-lg'>
                    Identify hazards, dimensions, area analysis, and more for
                    each project.
                  </li>
                  <li className='text-stone-600 text-lg'>
                    Customize your experience in our fast-growing platform of
                    cities.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className='max-w-7xl flex flex-row justify-between gap-6 w-full mt-24'>
            <div className='w-1/2'>
              <h5 className='text-3xl font-semibold'>
                A Basis for Land Prices
              </h5>
              <p className='text-lg text-stone-600 mt-8'>
                Leverage our proprietary AI to identify accurate pricing for
                parcels of land across Southern California. This takes the guess
                work out of your negotiations so you don’t need to worry about a
                bad deal.
              </p>
            </div>
            <div className='w-1/2 bg-gray-300 flex flex-row justify-center gap-4 p-4'>
              <div className='w-full flex flex-col gap-2 bg-white p-4 h-full rounded-lg'>
                <h4 className='border-b-4 border-black font-semibold text-lg w-max'>
                  Overview
                </h4>
                <p>Project Location</p>
                <span className='h-2 bg-gray-300 w-24 rounded-md items-center'></span>
                <p>Description</p>
                <span className='h-2 bg-gray-300 w-24 rounded-md items-center'></span>
              </div>
              <div className='w-full bg-white p-4 h-full justify-end rounded-lg'>
                {' '}
                <div className='flex flex-col gap-2 bg-white p-4 h-full rounded-lg'>
                  <h4 className='border-b-4 border-black font-semibold text-lg w-max'>
                    Analysis
                  </h4>
                  <p>Square Feet</p>
                  <span className='h-2 bg-gray-300 w-24 rounded-md items-center'></span>
                  <p>Comparable</p>
                  <span className='h-2 bg-gray-300 w-24 rounded-md items-center'></span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className='w-full flex justify-center'>
          <div className='max-w-7xl w-full'>
            <CTA />
          </div>
        </section>
      </div>
    </>
  )
}

WhyUsPage.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      <>{page}</>
    </DefaultLayout>
  )
}
