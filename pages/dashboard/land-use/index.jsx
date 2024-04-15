import { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { DownOutlined } from '@ant-design/icons'
import { Button, Dropdown, Space } from 'antd'
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { BarChart, StarOutline } from '@mui/icons-material'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'
import Router from 'next/router'
import {
  navDashboardsItems,
  navHousingElementsItems,
} from '../../../components/navbar/navigationLinksData'
import {
  Bars3Icon,
  BellIcon,
  LightBulbIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  HomeModernIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import TotalPopulationBarChart from './totalPopulationBarChart'

export default function DashboardLandUse() {
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

  async function logout() {
    const { error } = await supabase.auth.signOut()
    if (error) console.log('Error logging out:', error.message)
  }

  return (
    <>
      <Head>
        <title>RI Dashboard - Land Use</title>
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
            className='relative z-50 lg:hidden'
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
                  <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4'>
                    <div className='flex h-16 shrink-0 items-center'>
                      <p>Region Intelligence</p>
                    </div>
                    <nav className='flex flex-1 flex-col'>
                      <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                        <li>
                          <ul role='list' className='-mx-2 space-y-1'>
                            <li key={'home'}>
                              <a
                                href={'/dashboard'}
                                className={
                                  'cursor-pointer transition ease-out hover:text-blue-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
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
                                  className='bg-gray-50 text-blue-600 cursor-pointer transition ease-out hover:text-blue-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'>
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
                                  className=' text-gray-700 cursor-pointer transition ease-out hover:text-blue-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'>
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
                          </ul>
                        </li>
                        <li>
                          {/* TEAMS SECTION NAV BAR MOBILE */}
                          {/* <div className='text-xs font-semibold leading-6 text-gray-400'>
                            Your teams
                          </div>
                          <ul role='list' className='-mx-2 mt-2 space-y-1'>
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? 'bg-gray-50 text-blue-600'
                                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}>
                                  <span
                                    className={classNames(
                                      team.current
                                        ? 'text-blue-600 border-blue-600'
                                        : 'text-gray-400 border-gray-200 group-hover:border-blue-600 group-hover:text-blue-600',
                                      'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                    )}>
                                    {team.initial}
                                  </span>
                                  <span className='truncate'>{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul> */}
                        </li>
                        <li className='mt-auto'>
                          <Link
                            href='#'
                            className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600'>
                            <Cog6ToothIcon
                              className='h-6 w-6 shrink-0 text-gray-400 group-hover:text-blue-600'
                              aria-hidden='true'
                            />
                            Settings
                          </Link>
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
          <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-gray-100 pb-4'>
            <Link
              href='/'
              className='flex h-16 shrink-0 items-center border-b w-full bg-white px-6'>
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
                          href={item.href}
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
                <div className='mt-8'>
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
                </div>
              </ul>
            </nav>
          </div>
        </div>

        <div className='lg:pl-72'>
          <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
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
                    <UserCircleIcon
                      className='h-10 w-10 text-gray-300'
                      aria-hidden='true'
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
                      ))}{' '}
                      <Menu.Item
                        key={'logout'}
                        className='w-max flex justify-center ml-3 mt-2'>
                        <Button
                          onClick={logout}
                          className='block px-3 py-1 text-sm leading-6 text-gray-900'>
                          Logout
                        </Button>
                      </Menu.Item>
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
            <div className='px-4 sm:px-6 lg:px-8'>
              <div className=''>
                <div className=' max-w-7xl'>
                  <div className='mx-auto max-w-2xl lg:max-w-none'>
                    <div className=''>
                      <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                        Land Use - Buena Park, CA
                      </h2>
                    </div>
                    {/* OVERVIEW STATS SECTION*/}
                    <section className='mt-8 p-4 bg-gray-800/5 rounded-2xl '>
                      <div className='flex flex-row justify-between '>
                        <p className='pl-4 font-bold'>Overview</p>
                        <div className='bg-white p-2 w-24 rounded-full font-semibold'>
                          Select Year
                        </div>
                      </div>

                      <dl className='mt-4 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4'>
                        {stats.map((stat) => (
                          <div key={stat.id} className='flex flex-col  p-8'>
                            <dt className='text-sm font-semibold leading-6 text-gray-600'>
                              {stat.name}
                            </dt>
                            <dd className='order-first text-3xl md:text-5xl font-semibold tracking-tight text-gray-900'>
                              {stat.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </section>
                    <section className='mt-8'>
                      <h2 className='font-bold text-3xl'>
                        Trends and Forecasts
                      </h2>
                      <article className='mt-6 bg-gray-100 rounded-2xl px-2 pb-4 md:p-4'>
                        <TotalPopulationBarChart />
                      </article>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

const userNavigation = [
  { name: 'Your profile', href: '/dashboard/personal-settings' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const stats = [
  { id: 1, name: 'Average Income', value: '65k' },
  { id: 2, name: 'Renter %', value: '22%' },
  { id: 3, name: 'Owner %', value: '78%' },
  { id: 4, name: 'High Education %', value: '22%' },
]

const navItems = {
  mainLinks: [
    { id: 1, name: 'Home', href: '/dashboard', icon: HomeIcon, active: false },
    {
      id: 2,
      name: 'Current Agendas',
      href: '/dashboard/current-agendas',
      icon: ListBulletIcon,
      active: false,
    },
    {
      id: 3,
      name: 'Land Use',
      href: '/dashboard/land-use',
      icon: BarChart,
      active: true,
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
