import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
import { Button } from 'antd'
import { Dashboard } from '@mui/icons-material'
import Avatar from './avatar'

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
    <header className='bg-white-300 z-50'>
      <nav
        className='mx-auto flex max-w-7xl w-full items-center justify-between p-6 md:pl-8 '
        aria-label='Global'>
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Region Intelligence</span>
            <div className='flex flex-row items-center gap-2'>
              <Image src='/logos/logo3.svg' width={30} height={20} />
              <p className='text-lg font-semibold leading-6 text-black hover:text-gray-600 hover:underline transition ease-out'>
                Region Intelligence
              </p>
            </div>
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
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black'
            onClick={() => setMobileMenuOpen(true)}>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex flex-col md:flex-row gap-16 justify-between'>
          <Link
            href='/dashboard'
            className='text-sm font-semibold leading-6 text-black hover:text-gray-600 hover:underline transition ease-out'>
            Dashboard
          </Link>
          <Link
            href='/products'
            className='text-sm font-semibold leading-6 text-black hover:text-gray-600 hover:underline transition ease-out'>
            Product
          </Link>
          {/* <Link
            href='/pricing'
            className='text-sm font-semibold leading-6 text-black hover:text-gray-600 hover:underline transition ease-out'>
            Pricing
          </Link> */}

          <Link
            href='/why-us'
            className='text-sm font-semibold leading-6 text-black hover:text-gray-600 hover:underline transition ease-out'>
            Why RI
          </Link>
          <Link
            href='/about'
            className='text-sm font-semibold leading-6 text-black hover:text-gray-600 hover:underline transition ease-out'>
            About Us
          </Link>
        </div>
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
              className='text-sm font-semibold leading-6 flex items-center justify-center text-black transition ease-out bg-white p-2 hover:shadow-none rounded-sm px-6'
              onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button className='text-sm font-semibold leading-6 flex items-center justify-center text-white transition ease-out bg-black p-2 py-4 text-center hover:shadow-none rounded-sm px-6'>
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
                <img src='/logos/logo3.svg' />
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
                    className='text-base font-semibold leading-6 text-gray-900 hover:text-gray-600'
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
                          className='h-6 w-6 text-gray-600 group-hover:text-gray-600'
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
          {/* <div className='sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center'>
            {callsToAction.map((item) => (
              <a
                key={item.name}
                onClick={() => setMobileMenuOpen(false)}
                href={item.href}
                className='p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100'>
                {item.name}
              </a>
            ))}
          </div> */}
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

const products = [
  {
    name: 'Dashboard',
    description:
      'Explore a comprehensive overview of pending city permits with key insights.',
    href: '/dashboard',
    icon: Dashboard,
  },
  {
    name: 'Product Overview',
    description: 'Explore our products.',
    href: '/products',
    icon: HomeIcon,
  },
  // {
  //   name: 'Map View',
  //   description: 'View the locations of pending city permits',
  //   href: '/current-planning-developments/map-view',
  //   icon: MapIcon,
  // },
  // {
  //   name: 'List View',
  //   description: 'View the locations of pending city permits',
  //   href: '/current-planning-developments',
  //   icon: ListBulletIcon,
  // },
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
  {
    name: 'RI Blog',
    href: '/blog',
    description:
      'Read our latest announcements and get perspectives from our team',
  },
]

const projects = [
  {
    name: 'Map View',
    description: 'View the locations of pending city permits',
    href: '/current-planning-developments/maps',
    icon: ChartPieIcon,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '/demo', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '/contact', icon: PhoneIcon },
]
