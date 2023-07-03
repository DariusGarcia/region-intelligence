import Head from 'next/head'
import Faq from '@/components/faq'
import LandingHeader from '@/components/header/landingHeader'
import Cta from '@/components/cta'
import React, { useRef } from 'react'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'
import DemoVideo from '@/components/demo/demo'

export default function LandingPage() {
  const targetRef = useRef(null)
  return (
    <>
      <Head>
        <title>First Property - Home</title>
        <meta
          name='description'
          content=' No more navigating through complex research. With First Property,
              everything you need is just a few clicks away. Our platform
              revolutionizes the way you access and handle vital information,
              making your decision-making process quicker and more informed.
              Step into the future of property development - Join First Property
              today!'
        />
      </Head>
      <div className='bg-white'>
        <main className='isolate'>
          {/* Hero section */}
          <div className='flex justify-center md:my-24'>
            <LandingHeader
              scrollToTarget={() =>
                targetRef.current.scrollIntoView({ behavior: 'smooth' })
              }
            />
          </div>

          {/* Feature section */}
          <div className='mx-auto  md:mt-32 p-4 py-8 px-6 sm:mt-56 lg:px-8 bg-gray-900'>
            <div className='mx-auto max-w-2xl lg:text-center' ref={targetRef}>
              <h2 className='text-base font-semibold leading-7 text-blue-600'>
                Gain insights quicker
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Everything you need to be up to date
              </p>
              <p className=' text-lg leading-8 text-white'>
                With our platform, tap into a wealth of city data and urban
                development insights. Get the edge in understanding the dynamics
                of city planning and land use. Utilize powerful analytics to
                guide your decision-making process, ensuring you're always a
                step ahead.
              </p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
              <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-16'>
                    <dt className='text-base font-semibold leading-7 text-white'>
                      <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600'>
                        <feature.icon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className='mt-2 text-base leading-7 text-gray-300'>
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Testimonial section */}
          <div className='md:mt-36 mt-24 justify-center'>
            <DemoVideo />
          </div>
          {/* Pricing section */}
          <div className='pt-12 md:py-24 sm:pt-48'>
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
              <div className='isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 gap-x-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
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
                          ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500'
                          : 'text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300',
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
      </div>
    </>
  )
}

const features = [
  {
    name: 'Urban Intelligence',
    description:
      "With our platform, tap into a wealth of city data and urban development insights. Get the edge in understanding the dynamics of city planning and land use. Utilize powerful analytics to guide your decision-making process, ensuring you're always a step ahead.",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Permit Mastery',
    description:
      'Our service takes the complexity out of permit navigation. Stay updated with real-time information on land development permits in Southern California. Make sense of current and upcoming developments with ease, enabling smoother project planning and execution.',
    icon: LockClosedIcon,
  },
  {
    name: 'Efficient Workflow',
    description:
      'Our platform streamlines the land development research process, eliminating the need for multiple databases and resources. With organized and easily navigable data at your disposal, you can focus on what truly matters - making informed and strategic decisions. ',
    icon: ArrowPathIcon,
  },
  {
    name: 'Coming Soon: Demographic Dashboard',
    description:
      "We're always working to make First Property your ultimate real estate resource. That's why we're excited to announce our upcoming feature: the Demographic Dashboard. This innovative tool will provide you with rich demographic data at your fingertips. Understand the population's age, income levels, household size, and much more in your targeted areas. Whether you're considering a new investment or advising a client, our Demographic Dashboard will provide key insights to make the most informed decisions. Stay tuned for the unveiling of this feature – a game-changer in tailoring your real estate strategies!",
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
  {
    name: 'Scale',
    id: 'tier-startup',
    href: 'https://buy.stripe.com/test_5kA4iG4RRahKbyUeUV',
    priceMonthly: '$10',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      'Access  to current developments',
      'Access to CEQA listings',
      'Advanced analytics',
      'CEQA topic modelings',
      'Insightful demographic data',
      'Local data extraction',
    ],
    mostPopular: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
