import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LandingDemo() {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <div className='w-full max-w-7xl justify-center flex items-center flex-col '>
        <div className='flex flex-col justify-center items-center gap-y-6'>
          <p className='text-lg font-semibold'>Why Us?</p>
          <h3 className='text-4xl font-semibold'>
            See How Our Data Can Help You
          </h3>
          <Link
            href='/demo'
            className='px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-full p-2 transition ease-out'>
            Explore Demo
          </Link>
          <section className='flex  md:flex-row w-full mt-12 max-w-2xl'>
            <Image src='/demoImage.png' width={300} height={300} />
            <div className='md:ml-8 md:pl-6 md:p-4 bg-gray-800 flex flex-col gap-6 text-white md:rounded-r-xl md:py-8'>
              <p className='w-max text-xs bg-gray-400 rounded-full p-2'>
                Case Study
              </p>
              <p className='max-w-md text-2xl'>
                How Real Estate Brokers are using data to find leads 23% faster
              </p>
              <Link
                href='#'
                className='w-max bg-blue-600 hover:bg-blue-500 rounded-full p-2 px-4 transition ease-out'>
                {' '}
                View Case Study
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
