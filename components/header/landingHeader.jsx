import { motion as m, AnimatePresence } from 'framer-motion'

export default function LandingHeaderNew() {
  return (
    <div className='relative bg-white w-full'>
      <AnimatePresence>
        {/* First Section */}
        <m.div
          initial='hidden'
          animate='visible'
          viewport={{ once: true, amount: 0.8 }}
          className='mx-auto my-2 md:my-0 md:mb-12 max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 overflow-hidden'>
          <m.div
            variants={cardVariants}
            className='px-6 pb-12 pt-6 md:pt-10 sm:pb-32 lg:col-span-7 md:px-0 xl:col-span-6'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <div className='hidden sm:flex'></div>
              <h1 className=' text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl'>
                Bringing Innovation to Urban Landscapes
              </h1>
              <p className='mt-8 md:mt-16 text-lg leading-8 text-gray-600'>
                <span className='italic text-blue-600'>
                  Simple, quick, insightful.
                </span>{' '}
                Region Intelligence is where innovative data solutions meet
                Southern California’s urban challenges, enabling smarter growth
                and community synergy.
              </p>
              <div className='mt-10 flex items-center gap-x-6'>
                <a
                  href='/login'
                  className='rounded-md w-48 text-center bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                  Get started
                </a>
                <a
                  href='/about'
                  className='text-sm font-semibold leading-6 text-gray-900 hover:opacity-70 transition ease-out hover:underline'>
                  Learn more <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
          </m.div>
          <m.div
            initial='hidden'
            animate='visible'
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariantsHorizontalFromLeft}
            className='flex justify-center items-center relative lg:col-span-4 lg:-mr-8  xl:inset-0 xl:left-1/2 xl:mr-0'>
            <img
              className='w-96 lg:absolute rounded-md bg-gray-50'
              src='/landingHeader/landingHeader.png'
              alt='first section'
            />{' '}
          </m.div>
        </m.div>
        {/* Second section */}
        <div className='bg-gray-100 w-full my-8 md:my-12'>
          <div className='w-full bg-gray-100 max-w-none'>
            <div className='mx-auto max-w-7xl lg:flex lg:flex-row lg:justify-between lg:px-8 '>
              <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariantsHorizontalFromRight}
                className='flex items-center relative md:mt-12 lg:col-span-4 lg:-mr-8 xl:mr-0 place-content-center '>
                <img
                  className='rounded-md w-full max-w-96 md:w-full hidden bg-gray-100 lg:block'
                  src='/landingHeader/fosteringInnovation.png'
                  alt='2nd section'
                />
              </m.div>
              <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                className='px-6 pb-12 pt-10 lg:col-span-8 md:px-0 xl:col-span-6 lg:flex justify-end w-full items-end  lg:flex-col'>
                <m.div
                  variants={cardVariants}
                  className='mx-auto max-w-2xl lg:mx-0'>
                  <div className='hidden sm:flex'></div>
                  <ul>
                    <li className='list-disc ml-4 mb-4 text-orange-600 font-bold'>
                      For Municipalities
                    </li>
                  </ul>
                  <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl'>
                    Fostering Innovation with Municipal Partnerships
                  </h1>
                  <p className='mt-8 md:mt-16 text-lg leading-8 text-gray-600'>
                    Region Intelligence is at the forefront of uniting
                    municipalities through cutting-edge technology. We
                    collaborate with cities across Southern California to bring
                    advanced data tools that enhance urban planning, promote
                    sustainable growth, and enable smart city initiatives.
                  </p>
                  <div className='mt-10 flex items-center gap-x-6'>
                    <a
                      href='/why-us'
                      className='rounded-md w-full md:w-48 text-center bg-white border border-black text-black px-3.5 py-2.5 text-sm font-semibold shadow-sm transition ease-out hover:text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                      Learn More <span aria-hidden='true'>→</span>
                    </a>
                  </div>
                </m.div>
              </m.div>
              <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariantsHorizontalFromRight}
                className='flex justify-center items-center relative md:mt-12 lg:col-span-4 lg:-mr-8 xl:mr-0 place-content-center '>
                <img
                  className='rounded-md w-96 max-w-96 block lg:hidden'
                  src='/landingHeader/fosteringInnovation.png'
                  alt='2nd section'
                />
              </m.div>
            </div>
          </div>
        </div>
        {/* Third section */}
        <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 my-8 md:my-12'>
          <m.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            className='px-6 pb-12 pt-10 lg:col-span-7 md:px-0 xl:col-span-6'>
            <m.div
              variants={cardVariants}
              className='mx-auto max-w-2xl lg:mx-0'>
              <div className='hidden  sm:flex'></div>
              <ul>
                <li className='list-disc ml-4 mb-4 text-orange-600 font-bold'>
                  For Municipalities
                </li>
              </ul>
              <h1 className=' text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl'>
                Amplify Your Research
              </h1>
              <p className='mt-8 md:mt-16 text-lg leading-8 text-gray-600'>
                Region Intelligence equips real estate professionals with
                dynamic tools for comprehensive market analysis. Dive into
                detailed demographics, land-use trends, and essential data
                points through our intuitive dashboards, designed for informed,
                strategic decision-making.
              </p>
              <div className='mt-10 flex items-center gap-x-6'>
                <a
                  href='/why-us'
                  className='rounded-md w-full md:w-48 text-center bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                  Why RI <span aria-hidden='true'>→</span>
                </a>
              </div>
            </m.div>
          </m.div>
          <m.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariantsHorizontalFromLeft}
            className='flex justify-center items-center relative md:mt-12 lg:col-span-4 lg:-mr-8 xl:inset-0 xl:left-1/2 xl:mr-0'>
            <img
              className='bg-gray-50 w-96 max-w-96 lg:absolute rounded-md'
              src='/landingHeader/landingHeader3.png'
              alt=''
            />
          </m.div>
        </div>
        {/* Fourth section */}
        <div className='bg-gray-100 w-full my-8 md:my-12'>
          <div className='mx-auto max-w-7xl lg:flex lg:flex-row lg:justify-between'>
            <m.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariantsHorizontalFromRight}
              className='flex items-center relative md:mt-12 lg:col-span-4 lg:-mr-8  xl:mr-0 place-content-center '>
              <img
                className='bg-gray-100 rounded-md w-96 max-w-96 md:w-full hidden lg:block'
                src='/landingHeader/landingHeader4.png'
                alt=''
              />
            </m.div>
            <m.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              className='px-6 pb-12 pt-10 lg:col-span-8 md:px-0 xl:col-span-6 lg:flex justify-end w-full items-end lg:flex-col'>
              <m.div
                variants={cardVariants}
                className='mx-auto max-w-2xl lg:mx-0'>
                <div className='hidden sm:flex'>
                  {/* Add any additional content you want to display on larger screens */}
                </div>
                <ul>
                  <li className='list-disc ml-4 mb-4 text-orange-600 font-bold'>
                    Why us?
                  </li>
                </ul>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl'>
                  See How Our Data Can Help You
                </h1>
                <p className='mt-8 md:mt-16 text-lg leading-8 text-gray-600'>
                  Region Intelligence equips real estate experts with
                  personalized data points designed to meet their unique
                  requirements. This service augments their analytical skills,
                  allowing for a more comprehensive grasp of the property
                  development environment.
                </p>
                <div className='mt-10 flex items-center gap-x-6'>
                  <a
                    href='/why-us'
                    className='rounded-md w-full md:w-48 text-center bg-white border border-black text-black px-3.5 py-2.5 text-sm font-semibold shadow-sm transition ease-out hover:text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                    Explore <span aria-hidden='true'>→</span>
                  </a>
                </div>
              </m.div>
            </m.div>
            <m.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariantsHorizontalFromRight}
              className='flex justify-center items-center relative md:mt-12 lg:col-span-4 lg:-mr-8  xl:mr-0 place-content-center '>
              <img
                className='rounded-md w-96 max-w-96 lg:hidden block'
                src='/landingHeader/landingHeader4.png'
                alt='2nd section'
              />
            </m.div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  )
}

const cardVariants = {
  hidden: {
    y: 150,
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

const cardVariantsHorizontalFromLeft = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
      delay: 0.2,
    },
  },
}

const cardVariantsHorizontalFromRight = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
      delay: 0.2,
    },
  },
}
