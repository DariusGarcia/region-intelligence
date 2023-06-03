import Image from 'next/image'
import Link from 'next/link'
import { motion as m, AnimatePresence } from 'framer-motion'

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
        bounce: 0.5,
        duration: 1,
      },
    },
  }

  return (
    <div className='relative bg-white max-w-7xl'>
      <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
        <AnimatePresence>
          <m.div
            initial='hidden'
            animate='visible'
            viewport={{ once: true, amount: 0.8 }}
            className='px-6  md:pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6'
          >
            <m.div variants={cardVariants}>
              <div className='mx-auto max-w-2xl lg:mx-0'>
                <div className='hidden sm:mt-32 sm:flex lg:mt-16'>
                  <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                    Announcing our next round of funding.{' '}
                    <Link
                      href='#'
                      className='whitespace-nowrap font-semibold text-blue-600'
                    >
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
                    className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                  >
                    Get started
                  </Link>
                  <Link
                    href='/pricing'
                    className='text-sm font-semibold leading-6 text-gray-900'
                  >
                    Learn more <span aria-hidden='true'>→</span>
                  </Link>
                </div>
              </div>
            </m.div>
            <div className='relative mt-12 md:mt-0 lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0'>
              <Image
                className='aspect-[3/2] w-full rounded-lg shadow-xl bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
                src='https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80'
                alt='landing'
                height={500}
                width={500}
                priority
              />
            </div>
          </m.div>{' '}
        </AnimatePresence>
      </div>
    </div>
  )
}
