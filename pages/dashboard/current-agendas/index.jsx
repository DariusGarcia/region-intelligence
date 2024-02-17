import { Fragment, useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'
import CurrentPlanningDevelopmentsList from '../../../features/dashboards/currentPlanningDevelopmentsList'
import DashboardLayout from '@/components/layouts/dashboardLayout'
import {
  navDashboardsItems,
  navHousingElementsItems,
} from '../../../components/navbar/navigationLinksData'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { DownOutlined } from '@ant-design/icons'
import { Button, Dropdown, Space } from 'antd'
import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  LightBulbIcon,
  UserIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  HomeModernIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid'
import { IoMdPaper } from 'react-icons/io'
import { BarChart, StarOutline } from '@mui/icons-material'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'

export default function DashboardHousingCurrentPlanningDevelopmentsPage() {
  const session = useSession()
  const supabase = useSupabaseClient()
  const user = useUser()
  const [first_name, setFirstName] = useState(null)
  const [last_name, setLastName] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // check if user is logged in
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (!session) {
  //       Router.push('/login')
  //     }
  //   }, 100)
  //   return () => clearTimeout(timeout)
  // }, [session])

  // fetch user info
  useEffect(() => {
    async function loadData() {
      setLoading(true)
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()

        if (error) {
          setError(error.message)
          console.warn(error)
        } else if (data) {
          setFirstName(data.first_name)
          setLastName(data.last_name)
        }

        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    // Only run query once user is logged in.
    if (user) loadData()
  }, [user])

  return (
    <>
      <Head>
        <title>RI Dashboard - Current Planning Developments</title>
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
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-50 lg:hidden '
            onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <div className='fixed inset-0 bg-gray-900/80' />
            </Transition.Child>

            <div className='fixed inset-0 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'>
                <Dialog.Panel className='relative mr-16 flex w-full max-w-xs flex-1'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
                      <button
                        type='button'
                        className='-m-2.5 p-2.5'
                        onClick={() => setSidebarOpen(false)}>
                        <span className='sr-only'>Close sidebar</span>
                        <XMarkIcon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className='flex grow flex-col gap-y-5n bg-white px-6 pb-4'>
                    <div className='flex h-16 shrink-0 items-center'>
                      <p>Region Intelligence</p>
                    </div>
                    <nav className='flex flex-1 flex-col'>
                      <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                        <li>
                          <ul role='list' className='-mx-2 space-y-1'>
                            <>
                              <li key={'home'}>
                                <a
                                  href={'/dashboard'}
                                  className={
                                    'text-gray-700 cursor-pointer hover:text-blue-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  }>
                                  <HomeIcon
                                    aria-hidden='true'
                                    className='w-6 h-6'
                                  />
                                  Home
                                </a>
                              </li>
                              <li>
                                <Dropdown
                                  menu={{
                                    items: navDashboardsItems,
                                    style: { textAlign: 'center' },
                                  }}
                                  trigger={['click']}>
                                  <a
                                    onClick={(e) => e.preventDefault()}
                                    className='text-gray-700 cursor-pointer hover:text-blue-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'>
                                    <Space>
                                      <span>
                                        <UsersIcon className='w-6' />
                                      </span>{' '}
                                      Dashboards
                                      <DownOutlined />
                                    </Space>
                                  </a>
                                </Dropdown>
                              </li>
                              <li>
                                <Dropdown
                                  menu={{
                                    items: navHousingElementsItems,
                                    style: { textAlign: 'center' },
                                  }}
                                  trigger={['click']}>
                                  <a
                                    onClick={(e) => e.preventDefault()}
                                    className='bg-gray-50 text-blue-600 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer '>
                                    <Space>
                                      <span>
                                        <HomeModernIcon className='w-6' />
                                      </span>{' '}
                                      Housing Element
                                      <DownOutlined />
                                    </Space>
                                  </a>
                                </Dropdown>
                              </li>
                            </>
                          </ul>
                        </li>
                        <li></li>
                        <li className='mt-auto'>
                          <a
                            href='#'
                            className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600'>
                            <Cog6ToothIcon
                              className='h-6 w-6 shrink-0 text-gray-400 group-hover:text-blue-600'
                              aria-hidden='true'
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex grow flex-col gap-y-5 overflow-y-auto overflow-x-hidden border-r border-gray-200 bg-gray-100 pb-4'>
            <Link
              href='/'
              className='flex h-16 shrink-0 items-center border-b w-full bg-white px-2 '>
              <div className='w-8 mr-2'>
                <Image src='/logo.png' width={50} height={50} />
              </div>
              <p className='hover:underline font-semibold'>
                Region Intelligence
              </p>
            </Link>
            <nav className='flex flex-1 flex-col pl-6'>
              <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                <li>
                  <ul role='list' className='-mx-2 space-y-1'>
                    {navItems.mainLinks.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={'/dashboard'}
                          className={`text-gray-700 cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                            item.active
                              ? 'bg-blue-600 text-white '
                              : 'hover:text-blue-600 hover:bg-gray-50'
                          }`}>
                          {item.icon && (
                            <item.icon aria-hidden='true' className='w-6 h-6' />
                          )}
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <p className='text-gray-500 text-xs ml-2 pb-2 pt-12'>
                      Other Information
                    </p>
                    {navItems.subLinks1.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`text-gray-700 cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                            item.active
                              ? 'bg-blue-600 text-white '
                              : 'hover:text-blue-600 hover:bg-gray-50'
                          }`}>
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-blue-600'
                                : 'text-gray-400 group-hover:text-blue-600',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden='true'
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <p className='text-gray-500 text-xs ml-2 pb-2 pt-12'>
                      Settings
                    </p>
                    {navItems.subLinks2.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`text-gray-700 cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                            item.active
                              ? 'bg-blue-600 text-white '
                              : 'hover:text-blue-600 hover:bg-gray-50'
                          }`}>
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-blue-600'
                                : 'text-gray-400 group-hover:text-blue-600',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden='true'
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                {/* <div className='mt-8'>
                  <div className='relative '>
                    <div className='mx-auto max-w-md  sm:max-w-3xl lg:max-w-7xl '>
                      <div className='relative overflow-hidden rounded-2xl bg-blue-600 py-4 shadow-xl'>
                        <div
                          aria-hidden='true'
                          className='absolute inset-0 -mt-72 sm:-mt-32 md:mt-0'>
                          <svg
                            className='absolute inset-0 h-full w-full'
                            preserveAspectRatio='xMidYMid slice'
                            fill='none'
                            viewBox='0 0 1463 360'>
                            <path
                              className='text-blue-500 text-opacity-40'
                              fill='currentColor'
                              d='M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z'
                            />
                            <path
                              className='text-blue-700 text-opacity-40'
                              fill='currentColor'
                              d='M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z'
                            />
                          </svg>
                        </div>
                        <div className='relative'>
                          <div className='pl-4'>
                            <h2 className='text-sm font-bold tracking-tight text-white '>
                              Join Our Newsletter
                            </h2>
                            <p className='mt-2 max-w-2xl text-sm text-blue-200'>
                              Discover new developments
                            </p>
                          </div>
                          <form
                            action='#'
                            className='mt-6 sm:mx-auto sm:flex flex-col px-2 gap-4 sm:max-w-lg'>
                            <div className='min-w-0 flex-1'>
                              <label htmlFor='cta-email' className='sr-only'>
                                Email address
                              </label>
                              <input
                                id='cta-email'
                                type='email'
                                className='block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600'
                                placeholder='Enter your email'
                              />
                            </div>
                            <div className='mt-4 sm:mt-0'>
                              <button
                                type='submit'
                                className='block w-full rounded-md border border-transparent bg-blue-500 px-2 py-3 text-md font-medium text-white shadow hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 '>
                                Notify me
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </ul>
            </nav>
          </div>
        </div>

        <div className='lg:pl-64'>
          <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-6'>
            <button
              type='button'
              className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
              onClick={() => setSidebarOpen(true)}>
              <span className='sr-only'>Open sidebar</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>

            {/* Separator */}
            <div
              className='h-6 w-px bg-gray-200 lg:hidden'
              aria-hidden='true'
            />

            <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6 md:z-30 '>
              <form className='relative flex flex-1' action='#' method='GET'>
                <label htmlFor='search-field' className='sr-only'>
                  Search for Projects
                </label>
                <MagnifyingGlassIcon
                  className='pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400'
                  aria-hidden='true'
                />
                <input
                  id='search-field'
                  className='block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm'
                  placeholder='Search for projects...'
                  type='search'
                  name='search'
                />
              </form>
              <div className='flex items-center gap-x-4 lg:gap-x-6'>
                <button
                  type='button'
                  className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500'>
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Separator */}
                <div
                  className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200'
                  aria-hidden='true'
                />

                {/* Profile dropdown */}
                <Menu as='div' className='relative'>
                  <Menu.Button className='-m-1.5 flex items-center p-1.5'>
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full bg-gray-50'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                    <span className='hidden lg:flex lg:items-center'>
                      <span
                        className='ml-4 text-sm font-semibold leading-6 text-gray-900'
                        aria-hidden='true'>
                        {first_name} {last_name}
                      </span>
                      <ChevronDownIcon
                        className='ml-2 h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'>
                    <Menu.Items className='absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                              )}>
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          {/*
            *****************************
            *
            MAIN CONTENT
            *
            *****************************
           */}
          <main className='py-4'>
            <div className='px-4 sm:px-4 lg:px-2 '>
              <section className='md:ml-4 pb-2 flex flex-col md:flex-row justify-between'>
                <h1 className='text-xl md:text-2xl font-semibold'>
                  Current Planning Developments
                </h1>
                <div className='flex flex-row justify-between md:justify-normal gap-4 md:pr-2'>
                  <Button className='mt-4 text-blue-500 rounded-md'>
                    Export
                  </Button>
                  <Button
                    type='secondary'
                    className='mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md flex items-center'>
                    <PlusIcon className='w-8 text-white' /> Add Report
                  </Button>
                </div>
              </section>
              <section className='w-full mt-4 md:ml-4 pr-2 md:pr-6'>
                <CurrentPlanningDevelopmentsList />
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

const navItems = {
  mainLinks: [
    { id: 1, name: 'Home', href: '/dashboard', icon: HomeIcon, active: false },
    {
      id: 2,
      name: 'Current Agendas',
      href: '/dashboard/current-agendas',
      icon: ListBulletIcon,
      active: true,
    },
    {
      id: 3,
      name: 'Land Use',
      href: '/dashboard/land-use',
      icon: BarChart,
      active: false,
    },
    {
      id: 4,
      name: 'Demographics',
      href: '/dashboard/demographics',
      icon: UsersIcon,
      active: false,
    },
    {
      id: 5,
      name: 'My Reports',
      href: '/dashboard/reports',
      icon: FolderIcon,
      active: false,
    },
    {
      id: 6,
      name: 'Favorites',
      href: '/dashboard/favorites',
      icon: StarOutline,

      active: false,
    },
    {
      id: 7,
      name: 'RI Blog',
      href: '/blog',
      icon: Squares2X2Icon,
      active: false,
    },
  ],
  subLinks1: [
    {
      id: 8,
      name: 'Knowledge Base',
      href: '/dashboard/knowledge-base',
      icon: HiOutlineQuestionMarkCircle,
      active: false,
    },
    {
      id: 9,
      name: 'Product Updates',
      href: '/dashboard/product-updates',
      icon: LightBulbIcon,
      active: false,
    },
  ],
  subLinks2: [
    {
      id: 10,
      name: 'Personal Settings',
      href: '/dashboard/personal-settings',
      icon: UserIcon,
      active: false,
    },
    {
      id: 11,
      name: 'Global Settings',
      href: '/dashboard/global-settings',
      icon: Cog6ToothIcon,
      active: false,
    },
  ],
}

// Define the page layout
DashboardHousingCurrentPlanningDevelopmentsPage.getLayout = function getLayout(
  page
) {
  return (
    <DashboardLayout>
      <>{page}</>
    </DashboardLayout>
  )
}

const userNavigation = [
  { name: 'Your profile', href: '/profile' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
