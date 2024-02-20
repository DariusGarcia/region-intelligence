import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import DefaultLayout from '@/components/layouts/defaultLayout'
import Link from 'next/link'
import { Button } from 'antd'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function WelcomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-gray-900'>
      <div className='relative isolate pt-6'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7fbfd8] to-[#115ce9] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='py-24 sm:py-12 lg:pb-40'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                Region Intelligence
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Where innovative data solutions meet Southern California’s urban
                challenges, enabling smarter growth and community synergy.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <Button className='rounded-sm flex w-36 h-12 justify-center items-center bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline border-none '>
                  <Link href='/signup'>Get started</Link>
                </Button>
                <Link
                  href='/products'
                  className='text-sm font-semibold leading-6 text-white'>
                  Learn more <span aria-hidden='true'>→</span>
                </Link>
              </div>
            </div>
            <img
              src='/dashboardDemo.png'
              alt='App screenshot'
              width={2432}
              height={1442}
              className='mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24'
            />
          </div>
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#7fbfd8] to-[#115ce9] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <div className='bg-white'>
        <div className='mx-auto max-w-7xl py-6 sm:px-6 sm:py-32 lg:px-8'>
          <div className='relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
            <svg
              viewBox='0 0 1024 1024'
              className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
              aria-hidden='true'>
              <circle
                cx={512}
                cy={512}
                r={512}
                fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
                fillOpacity='0.7'
              />
              <defs>
                <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                  <stop stopColor='#7fbfd8' />
                  <stop offset={1} stopColor='#115ce9' />
                </radialGradient>
              </defs>
            </svg>
            <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Get early access now
                <br />
                Start using our app today
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Create an account now and start taking advantage of our premium
                services.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
                <Link
                  href='/signup'
                  className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                  Create an account
                </Link>
                <Link
                  href='/about'
                  className='text-sm font-semibold leading-6 text-white'>
                  Learn more <span aria-hidden='true'>→</span>
                </Link>
              </div>
            </div>
            <div className='relative mt-16 h-80 lg:mt-8'>
              <img
                className='absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                src='/dashboardHomeDemo.png'
                alt='App screenshot'
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
