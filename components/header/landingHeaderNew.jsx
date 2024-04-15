import { ArrowUpIcon, HomeIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'
import { FaDollarSign } from 'react-icons/fa'

export default function landingHeaderNew() {
  return (
    <div className='my-12 lg:my-24 flex flex-col items-center  px-2 lg:px-0'>
      <AnimatePresence>
        {' '}
        <div>
          <h1 className='font-bold text-3xl text-center md:text-5xl flex w-full'>
            Bringing Innovation to Urban Landscapes
          </h1>
        </div>
        <section className='max-w-7xl mt-24 '>
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
