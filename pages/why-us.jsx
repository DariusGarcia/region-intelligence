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
      <div>
        <div className='relative isolate pb-24 overflow-hidden bg-gradient-to-b from-blue-100/20 pt-8 '>
          <div className='mx-auto max-w-5xl px-6 pt-6 sm:py-12 z-50 lg:px-8 flex md:flex-row flex-col justify-between'>
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
              <h3 className='font-bold text-lg'>First Mover Advantage</h3>
              <p className='w-96'>
                We leverage AI in our data process so you can get real-time
                insights on latest city development trends.{' '}
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <h3 className='font-bold text-lg'>First Mover Advantage</h3>
              <p className='w-96'>
                Our community of investors, developers, builders, and analysts
                value our data.{' '}
              </p>
            </div>
          </div>
        </div>
        {/* LEVERAGE AI section */}

        {/* MEASURE CHANGES section */}
        <section className='w-full flex justify-center pb-24 mt-24 pt-12 px-4 bg-gray-100'></section>
        {/* LIVE DATA SECTION */}
        <section className='w-full flex justify-center pb-24 pt-12 mt-24 px-4 bg-gray-100'></section>
        {/* PERFORM DUE DILIGENCE section */}
        <section className='w-full flex justify-center pb-24 mt-24 px-4 bg-gray-100 pt-12'></section>
        <CTA />
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
