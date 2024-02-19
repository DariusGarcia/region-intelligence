import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  MapIcon,
  ListBulletIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid'
import Avatar from './avatar'
import { Button } from 'antd'

export default function Navbar() {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [username, setUsername] = useState([])

  const avatarName =
    user?.user_metadata?.first_name?.slice(0, 1) +
    user?.user_metadata?.last_name?.slice(0, 1)

  useEffect(() => {
    async function loadData() {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('username')
          .eq('id', user.id)
          .single()

        if (error) console.warn(error)
        else if (data) {
          setUsername(data.username)
        }
      } catch (error) {
        console.log(error)
      }
    }
    // Only run query once user is logged in.
    if (user) loadData()
  }, [user])

  async function logout() {
    const { error } = await supabase.auth.signOut()
    if (error) console.log('Error logging out:', error.message)
  }

  return (
    <header className='bg-blue-600 z-50'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 md:pl-8 '
        aria-label='Global'>
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Region Intelligence</span>
            <p className='text-lg font-semibold leading-6 text-white hover:text-gray-300 transition ease-out'>
              Region Intelligence
              <span className='inline-flex ml-2 items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700'>
                Beta
              </span>
            </p>
          </Link>
        </div>
        {/**
         *
         *
         *  Desktop nav bar
         *
         * */}
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
            onClick={() => setMobileMenuOpen(true)}>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 hover:text-gray-300 text-white transition ease-out'>
              Products
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-white'
                aria-hidden='true'
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'>
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg'>
                <div className='p-4'>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 z-50'>
                      <div className='mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-blue-600'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <Link
                          href={item.href}
                          className='block font-semibold text-gray-900'>
                          {item.name}
                          <span className='absolute inset-0' />
                        </Link>
                        <p className='mt-1 text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'>
                      <item.icon
                        className='h-5 w-5 flex-none text-gray-400'
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {/* <Link
            href='/pricing'
            className='text-sm font-semibold leading-6 text-white hover:text-gray-300 transition ease-out'>
            Pricing
          </Link> */}
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-gray-300 transition ease-out'>
              Company
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-white'
                aria-hidden='true'
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'>
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5'>
                {company.map((item) => (
                  <div
                    key={item.name}
                    className='relative rounded-lg p-4 hover:bg-gray-50'>
                    <Link
                      href={item.href}
                      className='block text-sm font-semibold leading-6 text-gray-900'>
                      {item.name}
                      <span className='absolute inset-0' />
                    </Link>
                    <p className='mt-1 text-sm leading-6 text-gray-600'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>{' '}
          <Link
            href='/why-us'
            className='text-sm font-semibold leading-6 text-white hover:text-gray-300 transition ease-out'>
            Why RI
          </Link>
          <Link
            href='/blog'
            className='text-sm font-semibold leading-6 text-white hover:text-gray-300 transition ease-out'>
            RI Blog
          </Link>
          <Link
            href='/resources'
            className='text-sm font-semibold leading-6 text-white hover:text-gray-300 transition ease-out'>
            Resources
          </Link>
        </Popover.Group>

        {/*
         * USER AVATAR
         *
         */}
        {/*
         *
         * Change back to justify-center instead of justify-end when adding the avatar back instead of the logout button
         *
         */}
        <div className='hidden lg:flex lg:flex-1 lg:justify-end '>
          {user ? (
            // <Avatar name={avatarName} />
            <Button
              className='text-black bg-white rounded-sm border font-semibold border-white p-1 px-4 shadow-xl hover:shadow-none transition ease-out'
              onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button className='text-sm font-semibold leading-6 flex items-center justify-center text-black transition ease-out bg-white p-2 hover:shadow-none rounded-sm px-6'>
              <a href='/login'>
                Log in <span aria-hidden='true'>&rarr;</span>
              </a>
            </Button>
          )}
        </div>
      </nav>
      {/**
       *
       *
       *   Mobile navbar
       *
       *
       *  */}
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='p-6'>
            <div className='flex items-center justify-between'>
              <Link href='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Region Intelligence</span>
                <p
                  className='font-bold leading-6 text-blue-600 text-xl hover:text-blue-500 hover:underline transition ease-out'
                  onClick={() => setMobileMenuOpen(false)}>
                  Region Intelligence{' '}
                  <span className='inline-flex ml-2 items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700'>
                    Beta
                  </span>
                </p>
              </Link>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}>
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='py-4' onClick={() => setMobileMenuOpen(false)}>
                {user ? (
                  <button
                    className='text-base font-semibold leading-6 text-gray-900 hover:text-blue-600'
                    onClick={logout}>
                    Logout <span aria-hidden='true'>&rarr;</span>
                  </button>
                ) : (
                  <Link
                    href='/login'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 bg-white'>
                    Log in <span aria-hidden='true'>&rarr;</span>
                  </Link>
                )}
              </div>
              <p className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900'>
                Products
              </p>

              <div className='-my-6 divide-y divide-gray-500/10'>
                <div
                  className='space-y-2 py-6'
                  onClick={() => setMobileMenuOpen(false)}>
                  {products.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className='group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-blue-600'
                          aria-hidden='true'
                        />
                      </div>
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className='space-y-2 py-6'>
                  {/* <Link
                    href='/pricing'
                    onClick={() => setMobileMenuOpen(false)}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                    Pricing
                  </Link> */}
                  {/* <Link
                    href='/ceqa'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                    Ceqa
                  </Link> */}
                  <Link
                    href='/profile'
                    onClick={() => setMobileMenuOpen(false)}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                    My Profile
                  </Link>

                  {company.map((item) => (
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center'>
            {callsToAction.map((item) => (
              <a
                key={item.name}
                onClick={() => setMobileMenuOpen(false)}
                href={item.href}
                className='p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100'>
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

const products = [
  {
    name: 'Product Overview',
    description: 'Explore our products.',
    href: '/products',
    icon: HomeIcon,
  },
  {
    name: 'Dashboard',
    description:
      'Explore a comprehensive overview of pending city permits with key insights.',
    href: '/dashboard',
    icon: HomeIcon,
  },
  {
    name: 'Map View',
    description: 'View the locations of pending city permits',
    href: '/current-planning-developments/map-view',
    icon: MapIcon,
  },
  {
    name: 'List View',
    description: 'View the locations of pending city permits',
    href: '/current-planning-developments',
    icon: ListBulletIcon,
  },
]
const projects = [
  {
    name: 'Map View',
    description: 'View the locations of pending city permits',
    href: '/current-planning-developments/maps',
    icon: ChartPieIcon,
  },
  // {
  //   name: 'Engagement',
  //   description: 'Speak directly to your customers',
  //   href: '#',
  //   icon: CursorArrowRaysIcon,
  // },
  // {
  //   name: 'Security',
  //   description: 'Your customers’ data will be safe and secure',
  //   href: '#',
  //   icon: FingerPrintIcon,
  // },
  // {
  //   name: 'Integrations',
  //   description: 'Connect with third-party tools',
  //   href: '#',
  //   icon: SquaresPlusIcon,
  // },
  // {
  //   name: 'Automations',
  //   description: 'Build strategic funnels that will convert',
  //   href: '#',
  //   icon: ArrowPathIcon,
  // },
]
const callsToAction = [
  { name: 'Watch demo', href: '/demo', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '/contact', icon: PhoneIcon },
]
const company = [
  {
    name: 'About Us',
    href: '/about',
    description:
      'Learn more about our company values and mission to empower others',
  },
  {
    name: 'Why Us',
    href: '/why-us',
    description:
      'Learn more about our company values and mission to empower others',
  },
  {
    name: 'Contact',
    href: '/contact',
    description:
      'Get in touch with our dedicated support team for any questions or inquiries',
  },
  // {
  //   name: 'Careers',
  //   href: '#',
  //   description:
  //     'Looking for you next career opportunity? See all of our open positions',
  // },
  {
    name: 'RI Blog',
    href: '/blog',
    description:
      'Read our latest announcements and get perspectives from our team',
  },
]
