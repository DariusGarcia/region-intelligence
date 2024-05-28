import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import Stats from '@/features/dashboards/home/stats';
import CurrentPlanningDevelopmentsList from '@/features/dashboards/currentPlanningDevelopmentsList';
import DashboardLayout from '@/components/layouts/dashboardLayout';
import { Button, Carousel, Spin } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import mockAPNData from '../../components/mockData.js';
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react';
import Router from 'next/router';
import {
  navDashboardsItems,
  navHousingElementsItems,
} from '@/components/navbar/navigationLinksData';
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
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  HomeModernIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid';
import { IoMdPaper, IoMdPeople } from 'react-icons/io';
import {
  ArrowRightAltOutlined,
  BarChart,
  LineAxisOutlined,
  StarOutline,
} from '@mui/icons-material';
import { HiOutlineClock, HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import { VscGraphLine } from 'react-icons/vsc';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import ImageCarousel from '@/components/imageCarousel';

export default function DashboardHomePage() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser();
  const [first_name, setFirstName] = useState(null);
  const [last_name, setLastName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) console.log('Error logging out:', error.message);
  }

  console.log(mockAPNData[0]);
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
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) {
          setError(error.message);
          console.warn(error);
        } else if (data) {
          setFirstName(data.first_name);
          setLastName(data.last_name);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    // Only run query once user is logged in.
    if (user) loadData();
  }, [user]);

  const articlesContent = [
    {
      images: 'fasdfasdfa',
    },
  ];

  const handleClick = (index) => {
    setLoading(index); // Set loading state to true when link is clicked
  };

  return (
    <>
      <Head>
        <title>RI Dashboard - Home</title>
        <meta
          name="description"
          content="No more navigating through complex research. With Region Intelligence,
    everything you need is just a few clicks away. Our platform
    revolutionizes the way you access and handle vital information,
    making your decision-making process quicker and more informed.
    Step into the future of property development - Join Region Intelligence
    today!"
        />
      </Head>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white md:px-6 pb-4">
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto overflow-x-hidden  border-r border-gray-200 bg-gray-100 pb-4">
                      <Link
                        href="/"
                        className="flex h-16 shrink-0 items-center justify-center border-b w-full bg-white px-6"
                      >
                        <div className="w-full flex justify-center">
                          <Image
                            src="/logos/logo3.svg"
                            width={50}
                            height={50}
                            className="w-8"
                          />
                        </div>
                        <p className="hover:underline font-semibold">
                          Region Intelligence
                        </p>
                      </Link>
                      <nav className="flex flex-1 flex-col pl-6">
                        <ul
                          role="list"
                          className="flex flex-1 flex-col gap-y-7"
                        >
                          <li>
                            <ul role="list" className="-mx-2 space-y-1">
                              {navItems.mainLinks.map((item) => (
                                <li key={item.id}>
                                  <Link
                                    href={item.href}
                                    className={`text-gray-700 cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                                      item.active
                                        ? 'bg-blue-600 text-white '
                                        : 'hover:text-blue-600 hover:bg-gray-50'
                                    }`}
                                  >
                                    {item.icon && (
                                      <item.icon
                                        aria-hidden="true"
                                        className="w-6 h-6"
                                      />
                                    )}
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                              {/* <p className="text-gray-500 text-xs ml-2 pb-2 pt-12">
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
                                    }`}
                                  >
                                    <item.icon
                                      className={classNames(
                                        item.current
                                          ? 'text-blue-600'
                                          : 'text-gray-400 group-hover:text-blue-600',
                                        'h-6 w-6 shrink-0'
                                      )}
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                              <p className="text-gray-500 text-xs ml-2 pb-2 pt-12">
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
                                    }`}
                                  >
                                    <item.icon
                                      className={classNames(
                                        item.current
                                          ? 'text-blue-600'
                                          : 'text-gray-400 group-hover:text-blue-600',
                                        'h-6 w-6 shrink-0'
                                      )}
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </Link>
                                </li>
                              ))} */}
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
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-48 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto overflow-x-hidden  border-r border-gray-200 bg-gray-100 pb-4">
            <Link
              href="/"
              className="flex h-16 shrink-0 items-center border-b w-full bg-white px-6"
            >
              <div className="w-8 mr-2">
                <Image src="/logos/logo3.svg" width={50} height={50} />
              </div>
            </Link>
            <nav className="flex flex-1 flex-col pl-6">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navItems.mainLinks.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          className={`text-gray-700 cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                            item.active
                              ? 'bg-black text-white '
                              : 'hover:text-blue-600 hover:bg-gray-50'
                          }`}
                        >
                          {item.icon && (
                            <item.icon aria-hidden="true" className="w-6 h-6" />
                          )}
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    {/* <p className="text-gray-500 text-xs ml-2 pb-2 pt-12">
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
                          }`}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-blue-600'
                                : 'text-gray-400 group-hover:text-blue-600',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <p className="text-gray-500 text-xs ml-2 pb-2 pt-12">
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
                          }`}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-blue-600'
                                : 'text-gray-400 group-hover:text-blue-600',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))} */}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-48">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-200 lg:hidden"
              aria-hidden="true"
            />
          </div>
          <main className="w-full flex flex-col justify-center items-center bg-neutral-100">
            <div className="w-full my-4 lg:my-12 flex flex-col items-center">
              <form action="submit" className="w-full max-w-2xl mb-6 p-4">
                <h2 className="font-semibold text-xl mb-4">
                  Enter an Address or Assessor Parcel Number (APN)
                </h2>
                <input
                  type="text"
                  placeholder="Ex: 11111 Western Ave, East California, 90000"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </form>
              {/* <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 lg:px-12">
                {dashboardCards.map((card) => (
                  <Link href={card.href} key={card.id}>
                    <article className="flex flex-row justify-center gap-8 items-center bg-white p-12 rounded-lg hover:bg-neutral-200 hover:shadow-lg transition ease-out">
                      <card.icon
                        size={70}
                        className={`text-2xl p-2 rounded-lg px-4 ${card.style}`}
                      />{' '}
                      <h3 className="font-semibold text-xl">{card.title}</h3>
                    </article>
                  </Link>
                ))}
              </section> */}
              <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-12">
                <article className="max-h-96 flex flex-col justify-center gap-8 items-center bg-white p-4 lg:p-6 rounded-lg hover:shadow-lg transition ease-out">
                  <div className="flex flex-row gap-12 items-center w-full justify-start">
                    <IoMdPeople
                      size={70}
                      className="bg-blue-100 text-blue-500 p-4 rounded-full"
                    />
                    <h3 className="font-semibold text-xl">Overview</h3>
                  </div>
                  <div className="flex flex-col w-full justify-bewteen gap-6 overflow-y-auto overflow-scroll overflow-x-hidden max-h-72 pr-4">
                    <div className="flex flex-row justify-between font-semibold items-center text-md w-full">
                      <p>Owner</p>
                      <p className="font-bold">
                        {mockAPNData && mockAPNData[0].firstOwnerName}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p>Current Zoning</p>
                      <p>{mockAPNData && mockAPNData[0].landUseClassName}</p>
                    </div>
                    <div
                      className="
                      flex
                      flex-row
                      justify-between
                      font-semibold
                      items-center"
                    >
                      <p>Land Use</p>
                      <p>Single Family</p>
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p>Lot Size</p>
                      <p>
                        {mockAPNData && mockAPNData[0].buildingSqft.toFixed(2)}{' '}
                        sqft
                      </p>
                    </div>
                    <div
                      className="
                      flex
                      flex-row
                      justify-between
                      font-semibold
                      items-center"
                    >
                      <p>Impairment</p>
                      <p>
                        {mockAPNData && mockAPNData[0].buildingSqft.toFixed(2)}{' '}
                        sqft
                      </p>
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p>Tax Status</p>
                      <p>
                        {mockAPNData && mockAPNData[0].buildingSqft.toFixed(2)}{' '}
                        sqft
                      </p>
                    </div>{' '}
                    <div
                      className="
                      flex
                      flex-row
                      justify-between
                      font-semibold
                      items-center"
                    >
                      <p>Tax Status</p>
                      <p>
                        {mockAPNData && mockAPNData[0].buildingSqft.toFixed(2)}{' '}
                        sqft
                      </p>
                    </div>
                  </div>
                </article>
                <article className="max-h-96 flex flex-col justify-center gap-8 items-center bg-white p-4 lg:p-6 rounded-lg hover:shadow-lg transition ease-out">
                  <div className="flex flex-row gap-12 items-center w-full justify-start">
                    <IoMdPeople
                      size={70}
                      className="bg-orange-100 text-orange-500 p-4 rounded-full"
                    />
                    <h3 className="font-semibold text-xl">Hazards</h3>
                  </div>
                  <div className="flex flex-col w-full justify-bewteen gap-6 overflow-y-auto overflow-scroll overflow-x-hidden max-h-72 pr-4">
                    <div className="flex flex-row justify-between font-semibold items-center text-md w-full">
                      <p className="w-full">Fire Hazard</p>
                      <span
                        className={`h-2 w-full rounded-full ${
                          mockAPNData[0].fireHazard
                            ? 'bg-green-300'
                            : 'bg-gray-300'
                        }`}
                      />
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Liquefaction</p>
                      <span
                        className={`h-2 w-full rounded-full ${
                          mockAPNData[0].liquafactionZone
                            ? 'bg-green-300'
                            : 'bg-gray-300'
                        }`}
                      />
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Sea Rise</p>
                      <span
                        className={`h-2 w-full rounded-full ${
                          mockAPNData[0].searise1Meter
                            ? 'bg-green-300'
                            : 'bg-gray-300'
                        }`}
                      />
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Earthquake Fault</p>
                      <span
                        className={`h-2 w-full rounded-full ${
                          mockAPNData[0].equakeZone
                            ? 'bg-green-300'
                            : 'bg-gray-300'
                        }`}
                      />
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Land Slide</p>
                      <span
                        className={`h-2 w-full rounded-full ${
                          mockAPNData[0].landslideZone
                            ? 'bg-green-300'
                            : 'bg-gray-300'
                        }`}
                      />
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Flooding</p>
                      <span
                        className={`h-2 w-full rounded-full ${
                          mockAPNData[0].floodPlainZone
                            ? 'bg-green-300'
                            : 'bg-gray-300'
                        }`}
                      />
                    </div>{' '}
                  </div>
                </article>
                <article className="max-h-96 flex flex-col justify-center gap-8 items-center bg-white p-4 lg:p-6 rounded-lg hover:shadow-lg transition ease-out">
                  <div className="flex flex-row gap-12 items-center w-full justify-start">
                    <IoMdPeople
                      size={70}
                      className="bg-orange-100 text-orange-500 p-4 rounded-full"
                    />
                    <h3 className="font-semibold text-xl">Structure Info</h3>
                  </div>
                  <div className="flex flex-col w-full justify-bewteen gap-6 overflow-y-auto overflow-scroll overflow-x-hidden max-h-72 pr-4">
                    <div className="flex flex-row justify-between font-semibold items-center text-md w-full">
                      <p className="w-full">Size</p>
                      <p className="w-full justify-end flex items-end">
                        {mockAPNData && mockAPNData[0].buildingSqft.toFixed(0)}{' '}
                        sqft
                      </p>
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Bath</p>
                      <p className="w-full justify-end flex items-end">
                        {mockAPNData && mockAPNData[0].landUseClassName}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Pool</p>
                      <p className="w-full justify-end flex items-end">
                        Single Family
                      </p>
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Lot Size</p>
                      <p className="w-full justify-end flex items-end">
                        {mockAPNData && mockAPNData[0].buildingSqft.toFixed(2)}{' '}
                        sqft
                      </p>
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Impairment</p>
                      <p className="w-full justify-end flex items-end">
                        {mockAPNData && mockAPNData[0].impairmentDescription}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Tax Status</p>
                      <p className="w-full justify-end flex items-end">
                        {mockAPNData && mockAPNData[0].buildingSqft.toFixed(2)}{' '}
                        sqft
                      </p>
                    </div>{' '}
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Year Built</p>
                      <p className="w-full justify-end flex items-end">
                        {mockAPNData && mockAPNData[0].yearBuilt}
                      </p>
                    </div>
                  </div>
                </article>
                <article className="max-h-96 flex flex-col justify-center gap-8 items-center bg-white p-4 lg:p-6 rounded-lg hover:shadow-lg transition ease-out">
                  <div className="flex flex-row gap-12 items-center w-full justify-start">
                    <IoMdPeople
                      size={70}
                      className="bg-blue-100 text-blue-500 p-4 rounded-full"
                    />
                    <h3 className="font-semibold text-xl">Zone Pricing</h3>
                  </div>
                  <div className="flex flex-col w-full justify-bewteen gap-6 overflow-y-auto overflow-scroll overflow-x-hidden max-h-72 pr-4">
                    <div className="flex flex-row justify-between font-semibold items-center text-md w-full">
                      <p className="w-full">Owner</p>
                      <p className="w-full justify-end flex items-end">
                        {mockAPNData && mockAPNData[0].firstOwnerName}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Current Zoning</p>
                      <p className="w-full justify-end flex items-end">
                        {mockAPNData && mockAPNData[0].landUseClassName}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Land Use</p>
                      <p className="w-full justify-end flex items-end">
                        Single Family
                      </p>
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Lot Size</p>
                      <p className="w-full justify-end flex items-end">
                        {mockAPNData && mockAPNData[0].buildingSqft.toFixed(2)}{' '}
                        sqft
                      </p>
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Impairment</p>
                      <p className="w-full justify-end flex items-end">
                        {mockAPNData && mockAPNData[0].buildingSqft.toFixed(2)}{' '}
                        sqft
                      </p>
                    </div>
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Tax Status</p>
                      <p className="w-full justify-end flex items-end">
                        {mockAPNData && mockAPNData[0].buildingSqft.toFixed(2)}{' '}
                        sqft
                      </p>
                    </div>{' '}
                    <div className="flex flex-row justify-between font-semibold items-center">
                      <p className="w-full">Tax Status</p>
                      <p className="w-full justify-end flex items-end">
                        {mockAPNData && mockAPNData[0].buildingSqft.toFixed(2)}{' '}
                        sqft
                      </p>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(
//     'http://region-intelligence-rest.us-east-2.elasticbeanstalk.com/v1/cities/'
//   );
//   const apnLandUse = await res.json();

//   return {
//     props: {
//       apnLandUse,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 1000 seconds
//     revalidate: 1000, // In seconds
//   };
// }

// // This function gets called at build time on server-side.
// // It may be called again, on a serverless function, if
// // the path has not been generated.
// export async function getStaticPaths() {
//   const res = await fetch(
//     'http://region-intelligence-rest.us-east-2.elasticbeanstalk.com/v1/cities'
//   );
//   const apnLandUse = await res.json();

//   // Get the paths we want to pre-render based on apnLandUse
//   const paths = apnLandUse.map((apnLandUse) => ({
//     params: { id: apnLandUse.id },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: 'blocking' } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: 'blocking' };
// }

const dashboardCards = [
  {
    id: 1,
    title: 'Overview',
    description: '',
    icon: IoMdPeople,
    style: 'text-blue-600 bg-blue-200',
    href: '/dashboard/',
  },
  {
    id: 2,
    title: 'Environmental',
    description: '',
    icon: VscGraphLine,
    style: 'text-green-600 bg-green-200',
    href: '/dashboard',
  },
  {
    id: 3,
    title: 'Zone Pricing',
    description: '',
    icon: HiOutlineClock,
    style: 'text-red-600 bg-red-200',
    href: '/dashboard',
  },
  {
    id: 4,
    title: 'Market Comparable',
    description: '',
    icon: HiOutlineClock,
    style: 'text-red-600 bg-red-200',
    href: '/dashboard',
  },
  {
    id: 5,
    title: 'Local Trends',
    description: '',
    icon: HiOutlineClock,
    style: 'text-red-600 bg-red-200',
    href: '/dashboard',
  },
  {
    id: 6,
    title: 'Area Analysis',
    description: '',
    icon: HiOutlineClock,
    style: 'text-red-600 bg-red-200',
    href: '/dashboard',
  },
];
const navItems = {
  mainLinks: [
    { id: 1, name: 'Home', href: '/dashboard', icon: HomeIcon, active: true },
    {
      id: 2,
      name: 'Developments',
      href: '/dashboard/current-agendas',
      icon: ListBulletIcon,
      active: false,
    },
    {
      id: 3,
      name: 'Prospectus',
      href: '/dashboard/land-use',
      icon: BarChart,
      active: false,
    },
    // {
    //   id: 4,
    //   name: 'Demographics',
    //   href: '/dashboard/demographics',
    //   icon: UsersIcon,
    //   active: false,
    // },
    // {
    //   id: 5,
    //   name: 'My Reports',
    //   href: '/dashboard/reports',
    //   icon: FolderIcon,
    //   active: false,
    // },
    // {
    //   id: 6,
    //   name: 'Favorites',
    //   href: '/dashboard/favorites',
    //   icon: StarOutline,

    //   active: false,
    // },
    // {
    //   id: 7,
    //   name: 'RI Blog',
    //   href: '/blog',
    //   icon: Squares2X2Icon,
    //   active: false,
    // },
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
      href: '/dashboard',
      icon: Cog6ToothIcon,
      active: false,
    },
  ],
};

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Dashboards', href: '#', icon: UsersIcon, current: false },
  { name: 'Housing Element', href: '#', icon: HomeModernIcon, current: false },
  { name: 'The RI Blog', href: '/blog', icon: IoMdPaper, current: false },
  //   { name: 'Settings', href: '#', icon: IoMdSettings, current: false },
  //   { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  //   { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
];
const userNavigation = [
  { name: 'Your profile', href: '/dashboard/personal-settings' },
];

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
];

// Define the page layout
DashboardHomePage.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      <>{page}</>
    </DashboardLayout>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
