import React, { useRef } from 'react'
import Head from 'next/head'
import { motion as m, AnimatePresence, useAnimation } from 'framer-motion'
import Faq from '@/components/faq'
import LandingHeader from '@/components/header/landingHeader'
import Cta from '@/components/cta'
import DemoVideo from '@/components/demo/demo'
import FeatureSection from '@/components/featureSection'
import { CheckIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

export default function LandingPage() {
  const targetRef = useRef(null)
  const secondaryFeaturesControls = useAnimation()

  return (
    <>
      <Head>
        <title>Region Intelligence - Home</title>
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
      <div className='bg-white w-full'>
        <AnimatePresence>
          <main className='isolate w-full'>
            {/* Hero section */}
            <div className='flex justify-center md:my-12 w-full'>
              <LandingHeader
                scrollToTarget={() =>
                  targetRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              />
            </div>

            {/* Feature section */}
            <div className='relative mx-auto sm:mt-12 p-4 py-8 px-6 lg:px-8 bg-gray-900'>
              {/*
               * TODO:
               *   - diagonal line
               *
               */}

              {/* <div className='z-5 absolute top-0 left-0 w-full h-full bg-gray-900 transform -skew-y-12'></div> */}
              <div
                className='z-50 mx-auto max-w-2xl lg:text-center'
                ref={targetRef}>
                <h2 className='text-xl font-semibold leading-7 text-blue-600'>
                  Gain insights quicker
                </h2>
                <p className='z-50 my-2 text-2xl font-bold tracking-tight text-white sm:text-4xl'>
                  Power Your Due Diligence
                </p>
                <p className=' text-lg leading-8 text-white'>
                  With our platform, tap into a wealth of city data and urban
                  development insights. Get the edge in understanding the
                  dynamics of city planning and land use. Utilize powerful
                  analytics to guide your decision-making process, ensuring
                  you're always a step ahead.
                </p>
              </div>
              <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl pb-2'>
                <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
                  {features.map((feature, index) => (
                    <m.div
                      key={feature.name}
                      className='relative pl-16 hover:bg-[#e1dfdb] hover:bg-opacity-20 transition ease-out p-2 rounded-md h-min delay-20'
                      initial={{ opacity: 0 }}
                      animate={secondaryFeaturesControls}
                      onViewportEnter={() => {
                        secondaryFeaturesControls.start({ opacity: 1 })
                      }}
                      transition={{
                        duration: 1,
                        delay: index * 0.2,
                      }}>
                      <dt className='text-base font-semibold leading-7 text-white'>
                        <div className='absolute left-2 top-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600'>
                          <feature.icon
                            className='h-6 w-6 text-white'
                            aria-hidden='true'
                          />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className='mt-2 text-base leading-7 text-gray-300 hover:text-white'>
                        {feature.description}
                      </dd>
                    </m.div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Testimonial section */}
            <div className='md:my-36 my-24 justify-center'>
              <DemoVideo />
            </div>
            {/* Feature sections */}
            <FeatureSection />
            {/* Pricing section */}
            <div className='py-12 bg-stone-50'>
              <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-4xl text-center'>
                  <h2 className='text-base font-semibold leading-7 text-blue-600'>
                    Pricing
                  </h2>
                  <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                    Affordable pricing plans for&nbsp;all&nbsp;
                  </p>
                </div>
                {/* <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600'>
                The essentials to provide your best work for clients.
              </p> */}
                <div className='isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 gap-x-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-1'>
                  {tiers.map((tier, tierIdx) => (
                    <div
                      key={tier.id}
                      className={classNames(
                        tier.mostPopular ? 'lg:z-10 ' : 'lg:mt-0',
                        tierIdx === 0 ? '' : '',
                        tierIdx === tiers.length - 1 ? '' : '',
                        'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
                      )}>
                      <div>
                        <div className='flex items-center justify-between gap-x-4'>
                          <h3
                            id={tier.id}
                            className={classNames(
                              tier.mostPopular
                                ? 'text-blue-600'
                                : 'text-gray-900',
                              'text-lg font-semibold leading-8'
                            )}>
                            {tier.name}
                          </h3>
                          {tier.mostPopular ? (
                            <p className='rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600'>
                              Most popular
                            </p>
                          ) : null}
                        </div>
                        <p className='mt-4 text-sm leading-6 text-gray-600'>
                          {tier.description}
                        </p>
                        <p className='mt-6 flex items-baseline gap-x-1'>
                          <span className='text-4xl font-bold tracking-tight text-gray-900'>
                            {tier.priceMonthly}
                          </span>
                          <span className='text-sm font-semibold leading-6 text-gray-600'>
                            {tier.priceMonthly === 'Free' ? '' : '/month'}
                          </span>
                        </p>
                        <ul
                          role='list'
                          className='mt-8 space-y-3 text-sm leading-6 text-gray-600'>
                          {tier.features.map((feature) => (
                            <li key={feature} className='flex gap-x-3'>
                              <CheckIcon
                                className='h-6 w-5 flex-none text-blue-600'
                                aria-hidden='true'
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={tier.href}
                        aria-describedby={tier.id}
                        className={classNames(
                          tier.mostPopular
                            ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500 transition ease-out'
                            : 'bg-blue-600 text-white ring-1 hover:bg-blue-500 transition ease-out ring-inset ring-blue-200 hover:ring-blue-300',
                          'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                        )}>
                        {tier.priceMonthly === 'Free'
                          ? 'Get Started'
                          : 'Buy Plan'}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQs */}
            <Faq />

            {/* CTA section */}
            <Cta />
          </main>
        </AnimatePresence>
      </div>
    </>
  )
}

const features = [
  {
    name: 'Zoning',
    description:
      "Stay informed about the specific land-use regulations and restrictions in Southern California. Whether it's residential, commercial, or industrial zones, our platform provides up-to-date details to ensure compliance with local zoning ordinances.",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Current Planning Developments',
    description:
      'Keep a finger on the pulse of the latest development projects taking shape in the region. Our comprehensive updates on planning endeavors can be a crucial asset for investors, homeowners, and developers alike.',
    icon: LockClosedIcon,
  },
  {
    name: 'Parcel Information',
    description:
      "Access detailed data on individual land parcels, from ownership to size dimensions. Whether you're looking to purchase or simply research, our platform offers an exhaustive database to cater to all your parcel-specific inquiries.",
    icon: ArrowPathIcon,
  },
  {
    name: 'Landmarks',
    description:
      "Explore key points of interest throughout Southern California. Whether you're searching for nearby grocery stores, bars, gyms, or other amenities, our platform guides you to essential locations to enhance the due diligence process.",
    icon: FingerPrintIcon,
  },
]

const tiers = [
  {
    name: 'Starter',
    id: 'tier-freelancer',
    href: '/current-planning-developments/map-view',
    priceMonthly: 'Free',
    description: 'The essentials to provide your best work for clients.',
    features: [
      'Access  to current developments',
      'Access to CEQA listings',
      'Basic analytics',
    ],
    mostPopular: false,
  },
  // {
  //   name: 'Scale',
  //   id: 'tier-startup',
  //   href: 'https://buy.stripe.com/test_5kA4iG4RRahKbyUeUV',
  //   priceMonthly: '$10',
  //   description: 'A plan that scales with your rapidly growing business.',
  //   features: [
  //     'Access  to current developments',
  //     'Access to CEQA listings',
  //     'Advanced analytics',
  //     'CEQA topic modelings',
  //     'Insightful demographic data',
  //     'Local data extraction',
  //   ],
  //   mostPopular: true,
  // },
]

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
      duration: 1,
    },
  },
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
