import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import Stats from '@/features/dashboards/home/stats'
import CurrentPlanningDevelopmentsList from '@/features/dashboards/currentPlanningDevelopmentsList'
import DashboardLayout from '@/components/layouts/dashboardLayout'
import { Button, Carousel } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'

import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'
import Router from 'next/router'
import {
  navDashboardsItems,
  navHousingElementsItems,
} from '@/components/navbar/navigationLinksData'
import Link from 'next/link'
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
  Squares2X2Icon,
} from '@heroicons/react/20/solid'
import { IoMdPaper, IoMdPeople } from 'react-icons/io'
import {
  ArrowRightAltOutlined,
  BarChart,
  LineAxisOutlined,
  StarOutline,
} from '@mui/icons-material'
import { HiOutlineClock, HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { VscGraphLine } from 'react-icons/vsc'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import PersonalSettingsProfile from '@/features/auth/personalSettingsProfile'

export default function PersonalSettingsPage() {
  const session = useSession()
  const supabase = useSupabaseClient()
  const user = useUser()
  const [first_name, setFirstName] = useState(null)
  const [last_name, setLastName] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  async function logout() {
    const { error } = await supabase.auth.signOut()
    if (error) console.log('Error logging out:', error.message)
  }

  // check if user is logged in
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!session) {
        Router.push('/login')
      }
    }, 100)
    return () => clearTimeout(timeout)
  }, [session])

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

  const articlesContent = [
    {
      images: 'fasdfasdfa',
    },
  ]

  return (
    <>
      <Head>
        <title>RI Dashboard - Personal Settings</title>
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
                  <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-white md:px-6 pb-4'>
                    <div className='flex grow flex-col gap-y-5 overflow-y-auto overflow-x-hidden  border-r border-gray-200 bg-gray-100 pb-4'>
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
                        <ul
                          role='list'
                          className='flex flex-1 flex-col gap-y-7'>
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
                                      <item.icon
                                        aria-hidden='true'
                                        className='w-6 h-6'
                                      />
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
                        </ul>
                      </nav>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex grow flex-col gap-y-5 overflow-y-auto overflow-x-hidden  border-r border-gray-200 bg-gray-100 pb-4'>
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
                                : 'text-gray-400 group-hover:text-blue-600 ',
                              'h-6 w-6 shrink-0 '
                            )}
                            aria-hidden='true'
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className='lg:pl-64'>
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

            <div className='w-full  flex flex-1 gap-x-4 self-stretch lg:gap-x-6 md:z-30 '>
              <div className='w-full flex justify-end items-center gap-x-4 lg:gap-x-6'>
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
                      ))}
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
          <main className='py-4 bg-gray-50 px-2 md:px-8 '>
            <PersonalSettingsProfile />
          </main>
        </div>
      </div>
    </>
  )
}

const dashboardText = [
  {
    id: 1,
    title: 'Customize Your Experience',
    description: 'Personal Settings',
    icon: IoMdPeople,
    style: 'text-blue-600 bg-blue-200',
  },
  {
    id: 2,
    title: 'Latest Land Use Trends',
    description: 'Personal Settings',
    icon: VscGraphLine,
    style: 'text-green-600 bg-green-200',
  },
  {
    id: 3,
    title: 'Recent Project Updates',
    description: 'Personal Settings',
    icon: HiOutlineClock,
    style: 'text-red-600 bg-red-200',
  },
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
      active: true,
    },
    {
      id: 11,
      name: 'Global Settings',
      href: '/dashboard',
      icon: Cog6ToothIcon,
      active: false,
    },
  ],
}

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Dashboards', href: '#', icon: UsersIcon, current: false },
  { name: 'Housing Element', href: '#', icon: HomeModernIcon, current: false },
  { name: 'The RI Blog', href: '/blog', icon: IoMdPaper, current: false },
  //   { name: 'Settings', href: '#', icon: IoMdSettings, current: false },
  //   { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  //   { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '/dashboard/personal-settings' },
]

const discover = [
  {
    id: 0,
    title: 'Latest Blog Posts',
    categories: ['New', 'Read'],
    categoryColors: ['bg-orange-500', 'bg-blue-400'],
    icon: 'icon',
  },
  {
    id: 0,
    title: 'Events & Webinars',
    categories: ['Upcoming'],
    categoryColors: ['bg-yellow-500'],
    icon: 'icon',
  },
  {
    id: 0,
    title: 'RI Case Studies',
    categories: ['Read', 'Upcoming'],
    categoryColors: ['bg-blue-500', 'bg-yellow-500'],
    icon: 'icon',
  },
  {
    id: 0,
    title: 'FAQs',
    categories: ['Read'],
    categoryColors: ['bg-blue-500'],
    icon: 'icon',
  },
]

// Define the page layout
PersonalSettingsPage.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      <>{page}</>
    </DashboardLayout>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
