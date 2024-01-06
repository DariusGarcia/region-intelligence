import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CTA from '@/components/cta'

export default function whyUs() {
  return (
    <div>
      {' '}
      <div className='relative isolate border-b-2 pb-24 overflow-hidden bg-gradient-to-b from-blue-100/20 '>
        <div
          className='absolute inset-y-0 right-1/2 -z-10  -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:-mr-80 lg:-mr-96'
          aria-hidden='true'
        />

        <div className='mx-auto max-w-7xl px-6 pt-6 sm:py-12 z-50 lg:px-8 grid grid-cols-1 md:grid-cols-2'>
          <div className='md:mx-auto max-w-2xl lg:mx-0 z-50 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 xl:grid-cols-1 xl:grid-rows-4 xl:gap-x-8'>
            <h2 className='max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:col-span-2 xl:col-auto '>
              For Realtors
            </h2>

            <h2 className='max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:col-span-2 xl:col-auto '>
              For Developers
            </h2>

            <h2 className='max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:col-span-2 xl:col-auto '>
              For Brokers
            </h2>

            <h2 className='max-w-2xl text-4xl z-50 font-bold tracking-tight text-gray-900 sm:text-5xl lg:col-span-2 xl:col-auto h-max'>
              For You
            </h2>
            <div className='flex flex-row gap-8 z-50 items-center mt-6 md:mt-0'>
              <Link
                href='#'
                className='bg-blue-600 w-max rounded-md text-white p-2 z-50 transition ease-out hover:bg-blue-500'>
                What We Offer
              </Link>
              <Link
                href='/about'
                className='border-blue-600 w-max rounded-md border-2 hover:bg-blue-600 hover:text-white p-2 z-50 transition ease-out'>
                About Us
              </Link>
            </div>
          </div>
          <div className='w-full items-end'>
            <Image
              src='/about/aerialView.jpg'
              priority={true}
              width={900}
              height={1100}
              alt='aerial view of LA'
              className='aspect-[4/3] w-full max-w-lg my-8 md:my-0 rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none'
            />
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
      </div>
      {/* Data is the new oil section */}
      <div className=' md:pt-0 md:my-36 w-full flex justify-center items-center'>
        <div className='max-w-7xl border-b-2 md:pb-36 w-full flex items-center justify-center'>
          <h3 className='text-3xl md:text-5xl py-12 px-4 font-bold'>
            DATA IS THE NEW OIL.
          </h3>
        </div>
      </div>
      {/* LEVERAGE AI section */}
      <section className='w-full flex justify-center border-b-2 pb-24 px-4 mt-24'>
        <div className='max-w-7xl flex flex-col'>
          <h3 className='text-3xl md:text-5xl font-semibold mb-6'>
            LEVERAGE AI IN YOUR DECISION MAKING PROCESS
          </h3>
          <div className='flex flex-col gap-6 md:mt-12 md:grid md:grid-cols-3'>
            <section className='flex flex-col gap-4 col-span-1'>
              <p className='text-blue-600 font-semibold text-lg'>OVERVIEW</p>
              <p className='font-semibold text-lg'>
                LEVERAGE OUR PROPRIETARY MODELS TO GUIDE YOUR DUE DILIGENCE
                PROCESS.
              </p>
              <p className='font-semibold text-lg'>
                ACCESS A WEALTH OF INFORMATION AHEAD OF YOUR COMPETITORS
              </p>
              <p className='font-semibold text-md text-orange-500'>
                What is Machine Learning & Ai?
              </p>
            </section>
            <section className='col-span-2 w-full bg-gray-800 text-white p-6 rounded-md'>
              {' '}
              <div className='grid grid-cols-2 '>
                <div>
                  <p className='font-semibold'>RESOURCES TO LEARN MORE</p>
                  <div className='bg-white text-black p-2 rounded-lg mt-2'>
                    <p className='text-2xl'>
                      Bringing the Future of Tech to Your Organization
                    </p>
                  </div>
                </div>
                <div className='w-full justify-center items-center flex flex-col gap-4'>
                  <p className='font-semibold'>VIEW CASE STUDY</p>
                  <Link
                    href='/explore'
                    className=' p-2 rounded-full w-24 items-center flex justify-center bg-blue-600 hover:bg-blue-500 transition ease-out'>
                    Explore{' '}
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* MEASURE CHANGES section */}
      <section className='w-full flex justify-center border-b-2 pb-24 mt-24 px-4'>
        <div className='max-w-7xl flex flex-col'>
          <h3 className='text-3xl md:text-5xl font-semibold'>
            MEASURE CHANGES WITHIN MUNICIPALITIES
          </h3>
          <div className='flex flex-col gap-6 mt-12 md:grid md:grid-cols-3'>
            <section className='flex flex-col gap-4 md:col-span-1'>
              <p className='text-blue-600 font-semibold text-lg'>OVERVIEW</p>
              <p className='font-semibold text-lg'>
                STAY UP TO DATE ON WHAT'S NEW FOR EVERY CITY.
              </p>
              <p className='font-semibold text-lg'>
                RECEIVE LIVE UPDATES WHEN NEW REGULATIONS PASS THAT MEET YOUR
                INTEREST.
              </p>
              <p className='font-semibold text-md text-orange-500'>
                Tell us what you are interested in
              </p>
            </section>
            <section className='col-span-2 w-full bg-gray-800 text-white p-6 rounded-md'>
              {' '}
              <div className='grid grid-cols-2'>
                <div>
                  <p className='font-semibold'>RESOURCES TO LEARN MORE</p>
                  <div className='bg-white text-black p-2 rounded-lg mt-2'>
                    <p className='text-2xl'>
                      Explore the Difference Between Permitting
                    </p>
                  </div>
                </div>
                <div className='w-full justify-center items-center flex flex-col gap-4'>
                  <p className='font-semibold'>VIEW CASE STUDY</p>
                  <Link
                    href='/explore'
                    className=' p-2 rounded-full w-24 items-center flex justify-center bg-blue-600 hover:bg-blue-500 transition ease-out'>
                    Explore{' '}
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* LIVE DATA SECTION */}
      <section className='w-full flex justify-center border-b-2 pb-24 mt-24 px-4'>
        <div className='max-w-7xl flex flex-col'>
          <h3 className='text-3xl md:text-5xl font-semibold'>
            LIVE DATA EVERY DAY
          </h3>
          <div className='flex flex-col gap-6 mt-12 md:grid md:grid-cols-3'>
            <section className='flex flex-col gap-4 md:col-span-1'>
              <p className='text-blue-600 font-semibold text-lg'>OVERVIEW</p>
              <p className='font-semibold text-lg uppercase'>
                Navigate the southern california zoning ever changing landscape.
              </p>
              <p className='font-semibold text-lg uppercase'>
                find specific zoning regulations & hazards across southern
                california
              </p>
              <p className='font-semibold text-md text-orange-500'>
                What is CEQA and its impact?
              </p>
            </section>
            <section className='col-span-2 w-full bg-gray-800 text-white p-6 rounded-md'>
              {' '}
              <div className='grid grid-cols-2'>
                <div>
                  <p className='font-semibold'>RESOURCES TO LEARN MORE</p>
                  <div className='bg-white text-black p-2 rounded-lg mt-2'>
                    <p className='text-2xl'>Live CEQA Analysis and Updates</p>
                  </div>
                </div>
                <div className='w-full justify-center items-center flex flex-col gap-4'>
                  <p className='font-semibold'>VIEW CASE STUDY</p>
                  <Link
                    href='/explore'
                    className=' p-2 rounded-full w-24 items-center flex justify-center bg-blue-600 hover:bg-blue-500 transition ease-out'>
                    Explore{' '}
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* PERFORM DUE DILIGENCE section */}
      <section className='w-full flex justify-center border-b-2 pb-24 mt-24 px-4'>
        <div className='max-w-7xl flex flex-col'>
          <h3 className='text-3xl md:text-5xl font-semibold uppercase'>
            perform due diligence on zoning hazards & more
          </h3>
          <div className='flex flex-col gap-6 mt-12 md:grid md:grid-cols-3'>
            <section className='flex flex-col gap-4 md:col-span-1'>
              <p className='text-blue-600 font-semibold text-lg'>OVERVIEW</p>
              <p className='font-semibold text-lg uppercase'>
                We know time is money.
              </p>
              <p className='font-semibold text-lg uppercase'>
                Find the latest zoning, hazards, and land-use analysis
                pertaining to each parcel in southern california.
              </p>
              <p className='font-semibold text-md text-orange-500'>
                What is CEQA and its impact?
              </p>
            </section>
            <section className='col-span-2 w-full bg-gray-800 text-white p-6 rounded-md'>
              {' '}
              <div className='grid grid-cols-2'>
                <div>
                  <p className='font-semibold'>RESOURCES TO LEARN MORE</p>
                  <div className='bg-white text-black p-2 rounded-lg mt-2'>
                    <p className='text-2xl'>
                      Blazing Fast Stakeholder Research
                    </p>
                  </div>
                </div>
                <div className='w-full justify-center items-center flex flex-col gap-4'>
                  <p className='font-semibold'>VIEW CASE STUDY</p>
                  <Link
                    href='/explore'
                    className=' p-2 rounded-full w-24 items-center flex justify-center bg-blue-600 hover:bg-blue-500 transition ease-out'>
                    Explore{' '}
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  )
}
