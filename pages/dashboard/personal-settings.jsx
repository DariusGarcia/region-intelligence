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
                                  'bg-gray-50 text-blue-600 cursor-pointer transition ease-out hover:text-blue-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
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
                                  className='text-gray-700 cursor-pointer transition ease-out hover:text-blue-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'>
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
          <div className='flex grow flex-col gap-y-5 overflow-y-auto overflow-x-hidden  border-r border-gray-200 bg-gray-100 pb-4'>
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
            <form className='max-w-7xl'>
              <div className='space-y-12'>
                <div className='border-b border-gray-900/10 pb-12'>
                  <h2 className='text-base font-semibold leading-7 text-gray-900'>
                    Profile Details
                  </h2>
                  <p className='mt-1 text-sm leading-6 text-gray-600'>
                    Enter your profile information
                  </p>

                  <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                    <div className='sm:col-span-3'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium leading-6 text-gray-900'>
                        First name
                      </label>
                      <div className='mt-2'>
                        <input
                          type='text'
                          name='first-name'
                          id='first-name'
                          autoComplete='given-name'
                          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-3'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium leading-6 text-gray-900'>
                        Last name
                      </label>
                      <div className='mt-2'>
                        <input
                          type='text'
                          name='last-name'
                          id='last-name'
                          autoComplete='family-name'
                          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-3'>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium leading-6 text-gray-900'>
                        Email address
                      </label>
                      <div className='mt-2'>
                        <input
                          id='email'
                          name='email'
                          type='email'
                          autoComplete='email'
                          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>{' '}
                    <div className='sm:col-span-3'>
                      {' '}
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium leading-6 text-gray-900'>
                        Phone Number
                      </label>
                      <div className='mt-2'>
                        <input
                          id='phone'
                          name='phone'
                          type='phone'
                          autoComplete='phone'
                          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>
                    <div className='col-span-full'>
                      <label
                        htmlFor='photo'
                        className='block text-sm font-medium leading-6 text-gray-900'>
                        Profile Image
                      </label>
                      <div className='mt-2 flex items-center gap-x-3'>
                        <UserCircleIcon
                          className='h-12 w-12 text-gray-300'
                          aria-hidden='true'
                        />
                      </div>
                    </div>
                    <div className='col-span-full'>
                      <div className='flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                        <div className='text-center'>
                          <PhotoIcon
                            className='mx-auto h-12 w-12 text-gray-300'
                            aria-hidden='true'
                          />
                          <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                            <label
                              htmlFor='file-upload'
                              className='relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500'>
                              <span>Upload a file</span>
                              <input
                                id='file-upload'
                                name='file-upload'
                                type='file'
                                className='sr-only'
                              />
                            </label>
                            <p className='pl-1'>or drag and drop</p>
                          </div>
                          <p className='text-xs leading-5 text-gray-600'>
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col col-span-6 mb-12 border-t border-gray-900/10 pt-12'>
                      <h2 className='text-base font-semibold leading-7 text-gray-900'>
                        Regional Settings
                      </h2>
                      <p className='mt-1 text-sm leading-6 text-gray-600'>
                        Set your language and timezone
                      </p>
                      <div className='mt-6 flex flex-row justify-between'>
                        <div className='w-full'>
                          <label
                            htmlFor='country'
                            className='block text-sm font-medium leading-6 text-gray-900'>
                            Language
                          </label>
                          <div className='mt-2 w-full'>
                            <select
                              id='country'
                              name='country'
                              autoComplete='country-name'
                              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6'>
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>
                        </div>
                        <div className='w-full'>
                          <label
                            htmlFor='country'
                            className='block text-sm font-medium leading-6 text-gray-900'>
                            Timezone
                          </label>
                          <div className='mt-2 w-full'>
                            <select
                              id='country'
                              name='country'
                              autoComplete='country-name'
                              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6'>
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* username */}
                    {/* <div className='sm:col-span-4'>
                      <label
                        htmlFor='username'
                        className='block text-sm font-medium leading-6 text-gray-900'>
                        Username
                      </label>
                      <div className='mt-2'>
                        <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md'>
                          <input
                            type='text'
                            name='username'
                            id='username'
                            autoComplete='username'
                            className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                          />
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>

                <div className='border-b border-gray-900/10 pb-12'>
                  <h2 className='text-base font-semibold leading-7 text-gray-900'>
                    Notifications
                  </h2>
                  <p className='mt-1 text-sm leading-6 text-gray-600'>
                    We'll always let you know about important changes, but you
                    pick what else you want to hear about.
                  </p>

                  <div className='mt-10 space-y-10'>
                    <fieldset>
                      <legend className='text-sm font-semibold leading-6 text-gray-900'>
                        By Email
                      </legend>
                      <div className='mt-6 space-y-6'>
                        <div className='relative flex gap-x-3'>
                          <div className='flex h-6 items-center'>
                            <input
                              id='comments'
                              name='comments'
                              type='checkbox'
                              className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600'
                            />
                          </div>
                          <div className='text-sm leading-6'>
                            <label
                              htmlFor='comments'
                              className='font-medium text-gray-900'>
                              Comments
                            </label>
                            <p className='text-gray-500'>
                              Get notified when someones posts a comment on a
                              posting.
                            </p>
                          </div>
                        </div>
                        <div className='relative flex gap-x-3'>
                          <div className='flex h-6 items-center'>
                            <input
                              id='candidates'
                              name='candidates'
                              type='checkbox'
                              className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600'
                            />
                          </div>
                          <div className='text-sm leading-6'>
                            <label
                              htmlFor='candidates'
                              className='font-medium text-gray-900'>
                              Candidates
                            </label>
                            <p className='text-gray-500'>
                              Get notified when a candidate applies for a job.
                            </p>
                          </div>
                        </div>
                        <div className='relative flex gap-x-3'>
                          <div className='flex h-6 items-center'>
                            <input
                              id='offers'
                              name='offers'
                              type='checkbox'
                              className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600'
                            />
                          </div>
                          <div className='text-sm leading-6'>
                            <label
                              htmlFor='offers'
                              className='font-medium text-gray-900'>
                              Offers
                            </label>
                            <p className='text-gray-500'>
                              Get notified when a candidate accepts or rejects
                              an offer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className='text-sm font-semibold leading-6 text-gray-900'>
                        Push Notifications
                      </legend>
                      <p className='mt-1 text-sm leading-6 text-gray-600'>
                        These are delivered via SMS to your mobile phone.
                      </p>
                      <div className='mt-6 space-y-6'>
                        <div className='flex items-center gap-x-3'>
                          <input
                            id='push-everything'
                            name='push-notifications'
                            type='radio'
                            className='h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600'
                          />
                          <label
                            htmlFor='push-everything'
                            className='block text-sm font-medium leading-6 text-gray-900'>
                            Everything
                          </label>
                        </div>
                        <div className='flex items-center gap-x-3'>
                          <input
                            id='push-email'
                            name='push-notifications'
                            type='radio'
                            className='h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600'
                          />
                          <label
                            htmlFor='push-email'
                            className='block text-sm font-medium leading-6 text-gray-900'>
                            Same as email
                          </label>
                        </div>
                        <div className='flex items-center gap-x-3'>
                          <input
                            id='push-nothing'
                            name='push-notifications'
                            type='radio'
                            className='h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600'
                          />
                          <label
                            htmlFor='push-nothing'
                            className='block text-sm font-medium leading-6 text-gray-900'>
                            No push notifications
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>

              <div className='mt-6 flex items-center justify-end gap-x-6'>
                <button
                  type='button'
                  className='text-sm font-semibold leading-6 text-gray-900'>
                  Cancel
                </button>
                <button
                  type='submit'
                  className='rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                  Save
                </button>
              </div>
            </form>
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
const userNavigation = [{ name: 'Your profile', href: '/profile' }]

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
