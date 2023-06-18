import Image from 'next/image'
import Link from 'next/link'
import { motion as m, AnimatePresence } from 'framer-motion'
import mobileImg from '../../public/mobile.png'

export default function LandingHeader() {
  const cardVariants = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }

  return (
    <div className='relative bg-white '>
      <div className='mx-auto flex flex-row lg:px-8'>
        <AnimatePresence>
          <m.div
            initial='hidden'
            animate='visible'
            viewport={{ once: true, amount: 0.8 }}
            className='px-6 sm:pb-32 lg:px-0  flex flex-col items-center gap-4 '>
            <m.div variants={cardVariants}>
              <div className='flex flex-col justify-center mx-auto max-w-2xl lg:mx-0'>
                <div className='hidden sm:mt-32 md:mt-0 sm:flex '>
                  <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                    Announcing our next round of funding.{' '}
                    <Link
                      href='#'
                      className='whitespace-nowrap font-semibold text-blue-600'>
                      <span className='absolute inset-0' aria-hidden='true' />
                      Read more <span aria-hidden='true'>&rarr;</span>
                    </Link>
                  </div>
                </div>
                <h1 className='mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl'>
                  Empower Your Real Estate Journey
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  No more navigating through complex research. With First
                  Property, everything you need is just a few clicks away. Our
                  platform revolutionizes the way you access and handle vital
                  information, making your decision-making process quicker and
                  more informed. Step into the future of property development -
                  Join First Property today!
                </p>
                <div className='mt-10 flex items-center gap-x-6'>
                  <Link
                    href='/pricing'
                    className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                    Get started
                  </Link>
                  <Link
                    href='/pricing'
                    className='text-sm font-semibold leading-6 text-gray-900'>
                    Learn more <span aria-hidden='true'>→</span>
                  </Link>
                </div>
              </div>
            </m.div>
            <div className='relative mt-12 md:mt-24 mb-24 md:mb-0'>
              <Image
                className=' w-full rounded-lg  bg-gray-50 lg:h-full'
                src={mobileImg}
                alt='landing'
                height={1000}
                width={1000}
                priority
              />
            </div>
          </m.div>{' '}
        </AnimatePresence>
      </div>
    </div>
  )
}
