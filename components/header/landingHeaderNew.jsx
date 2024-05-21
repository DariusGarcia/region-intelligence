import { ArrowUpIcon, HomeIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { FaDollarSign } from 'react-icons/fa';
import Link from 'next/link';
import { HiSearchCircle } from 'react-icons/hi';

export default function landingHeaderNew() {
  return (
    <div className="my-12 lg:my-24 flex flex-col items-center px-2 lg:px-0">
      <AnimatePresence>
        {' '}
        <div className="p-4">
          <h1 className="font-bold text-3xl text-center md:text-5xl flex w-full">
            Bringing Innovation to Urban Landscapes
          </h1>
        </div>
        <section className="hidden lg:block max-w-7xl mt-24 h-full">
          <m.div className="h-full grid grid-cols-7 bg-gray-50 rounded-lg">
            <m.div
              key="card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="col-span-1 p-4 flex flex-col justify-around gap-0"
            >
              <div className="w-full flex justify-center">
                <Image
                  src="/logos/logo3.svg"
                  width={100}
                  height={100}
                  alt="logo"
                  className="w-12"
                />
              </div>
              <m.span
                custom={0}
                variants={cardVariantsFromLeft}
                className="h-3 w-36 bg-gray-300 rounded-full"
              />
              <m.span
                custom={1}
                variants={cardVariantsFromLeft}
                className="h-3 w-24 bg-blue-400 rounded-full"
              />
              <m.span
                custom={2}
                variants={cardVariantsFromLeft}
                className="h-3 w-36 bg-gray-300 rounded-full"
              />
              <m.span
                custom={3}
                variants={cardVariantsFromLeft}
                className="h-3 w-36 bg-blue-400 rounded-full"
              />
              <m.span
                custom={4}
                variants={cardVariantsFromLeft}
                className="h-3 w-36 bg-gray-300 rounded-full"
              />
              <m.span
                custom={5}
                variants={cardVariantsFromLeft}
                className="h-3 w-36 bg-gray-300 rounded-full"
              />
              <m.span
                custom={6}
                variants={cardVariantsFromLeft}
                className="h-3 w-36 bg-gray-300 rounded-full"
              />
            </m.div>
            <m.div
              key="card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="h-full pl-12 col-span-5 p-4 bg-white"
            >
              <m.div
                variants={cardVariants}
                className="pl-12 col-span-3 p-4 bg-white"
              >
                <div className="flex flex-row items-center gap-2">
                  <HiSearchCircle size={30} className="text-gray-200" />
                  <p className="bg-gray-100 w-48 rounded-full p-2 font-semibold pl-4">
                    Los Angeles
                  </p>
                </div>
                <section className="grid grid-cols-2 mt-12 gap-6">
                  <article className="flex flex-row gap-12 items-center">
                    <div>
                      <div className="flex flex-row gap-4 items-center">
                        <p className="font-semibold text-2xl ">$180,000</p>
                        <span className="w-6 text-green-500">
                          <ArrowUpIcon size={15} />
                        </span>
                      </div>
                      <p className=" ">Land Value</p>
                    </div>
                    <div className="w-12 flex items-center justify-center text-blue-500 bg-blue-200 p-4 rounded-full">
                      <FaDollarSign size={15} />
                    </div>
                  </article>
                  <article className="flex flex-row gap-12 items-center">
                    <div>
                      <div className="flex flex-row gap-4 items-center">
                        <p className="font-semibold text-2xl ">1.056</p>
                        <span className="w-6 text-green-500">
                          <ArrowUpIcon size={15} />
                        </span>
                      </div>
                      <p className=" ">Area Growth</p>
                    </div>
                    <div className="w-12 text-green-500 bg-green-200 p-4 rounded-full">
                      <HomeIcon size={15} />
                    </div>
                  </article>
                </section>
                <section className="grid grid-cols-2 mt-16  ">
                  <article className="">
                    <h4 className="font-semibold mb-6">Opportunity Score</h4>
                    {/* circle chart */}
                    <div className="h-24 w-24 flex items-center justify-center rounded-full">
                      <div className="h-full w-1/2 bg-blue-500 rounded-l-full"></div>
                      <div className="h-full w-1/2 bg-gray-200 rounded-r-full"></div>
                    </div>
                    {/* Lines */}
                    <div className="flex flex-row justify-start gap-4 mt-8 items-start">
                      <div className="flex flex-col gap-4">
                        <span className="h-2 w-4 bg-gray-200 rounded-md" />
                        <span className="h-2 w-4 bg-gray-200 rounded-md" />
                        <span className="h-2 w-4 bg-gray-200 rounded-md" />
                      </div>
                      <div className="flex flex-col gap-4">
                        <span className="h-2 w-24 bg-blue-400 rounded-md" />
                        <span className="h-2 w-36 bg-blue-400 rounded-md" />
                        <span className="h-2 w-18 bg-blue-400 rounded-md" />
                      </div>
                    </div>
                  </article>
                  <article className=" pb-4">
                    <h4 className="font-semibold">Land Comparables</h4>
                    <div className="w-full h-full flex flex-col gap-4">
                      <div className="w-[70%] h-full flex flex-row gap-0">
                        <div className="w-full h-full flex flex-row items-end gap-2">
                          <span className="h-32 w-2 bg-gray-200 rounded-md" />
                          <span className="h-24 w-2 bg-blue-400 rounded-md" />
                        </div>
                        <div className="w-full h-full flex flex-row items-end gap-2">
                          <span className="h-40 w-2 bg-gray-200 rounded-md" />
                          <span className="h-36 w-2 bg-blue-400 rounded-md" />
                        </div>
                        <div className="w-full h-full flex flex-row items-end gap-2">
                          <span className="h-40 w-2 bg-gray-200 rounded-md" />
                          <span className="h-36 w-2 bg-blue-400 rounded-md" />
                        </div>
                        <div className="w-full h-full flex flex-row items-end gap-2">
                          <span className="h-32 w-2 bg-gray-200 rounded-md" />
                          <span className="h-24 w-2 bg-blue-400 rounded-md" />
                        </div>
                      </div>
                      <div className="flex flex-row justify-start">
                        <div className="flex flex-row gap-4">
                          <span className="h-2 w-4 bg-gray-200 rounded-md" />
                          <span className="h-2 w-24 bg-blue-400 rounded-md" />{' '}
                        </div>
                        <div className="flex flex-row gap-4 ml-2">
                          <span className="h-2 w-4 bg-gray-200 rounded-md" />
                          <span className="h-2 w-24 bg-blue-400 rounded-md" />{' '}
                        </div>
                      </div>
                    </div>
                  </article>
                </section>
              </m.div>
            </m.div>

            <m.div
              key="card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="col-span-1 flex flex-col gap-4 mt-8 bg-white py-6 rounded-r-md"
            >
              <m.div
                variants={staggeredCardVariants}
                custom={0}
                className="flex flex-col gap-2 pr-4"
              >
                <h3 className="text-lg font-semibold">Latest Developments</h3>
              </m.div>
              <m.div
                variants={staggeredCardVariants}
                custom={1}
                className="flex flex-col gap-2"
              >
                <h3 className=" font-semibold">Rainbow ADU</h3>
                <span className="w-36 h-3 bg-blue-300 rounded-full" />
                <span className="w-36 h-3 bg-gray-300 rounded-full" />
              </m.div>
              <m.div
                variants={staggeredCardVariants}
                custom={2}
                className="flex flex-col gap-2"
              >
                <h3 className=" font-semibold">Major Hotel</h3>
                <span className="w-36 h-3 bg-blue-300 rounded-full" />
                <span className="w-40 h-3 bg-gray-300 rounded-full" />
              </m.div>
              <m.div
                variants={staggeredCardVariants}
                custom={3}
                className="flex flex-col gap-2"
              >
                <h3 className=" font-semibold">Parcel Rezoning</h3>
                <span className="w-36 h-3 bg-blue-300 rounded-full" />
                <span className="w-40 h-3 bg-gray-300 rounded-full" />
              </m.div>
              <m.div
                variants={staggeredCardVariants}
                custom={4}
                className="flex flex-col gap-2"
              >
                <h3 className=" font-semibold">Tentative Tract Map</h3>
                <span className="w-36 h-3 bg-blue-300 rounded-full" />
                <span className="w-36 h-3 bg-gray-300 rounded-full" />
              </m.div>
            </m.div>
          </m.div>
        </section>
        <section className="mt-24 mb-12 flex flex-col gap-24 md:gap-0 md:flex-row items-center justify-between w-full max-w-7xl p-4 xl:p-0">
          <div className="md:w-1/2 w-full p-4">
            <p className="mb-8 text-lg md:text-2xl ">
              Region Intelligence equips real estate professionals with dynamic
              tools for comprehensive market analysis. Track municipal changes,
              price trends, and new investment opportunities.
            </p>
            <Link
              className="text-blue-600 text-xl font-semibold underline "
              href="/waitlist"
            >
              Join Our Waitlist
            </Link>
          </div>
          <div>
            <img
              src="/landingHeader/3squares.svg"
              alt=""
              className="w-full md:w-72 rounded-lg"
            />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-full">
          <div className="mt-24 w-full flex flex-col items-center max-w-7xl">
            <h3 className="text-3xl font-bold mb-12">What We Offer</h3>
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 mt-12 w-full ">
              <div className="bg-gray-300 md:w-1/2 p-4 rounded-md flex items-center justify-center md:p-12">
                <img src="/landingHeader/chart3.svg" alt="chart" className="" />
              </div>
              <div className="p-4 xl:p-0 md:w-1/2">
                <h5 className="text-3xl font-semibold">
                  Real-Time Data Driven Insights
                </h5>
                <p className="text-lg text-stone-600 mt-8">
                  Leveraging artificial intelligence, we offer access to
                  instantaneous data on the ever-changing local market
                  landscape, transforming how decisions are made.
                </p>
                <ul className="list-disc flex flex-col gap-8 pl-6 mt-8">
                  <li className="text-stone-600 text-lg">
                    Discover the latest municipal developments in your area.
                  </li>
                  <li className="text-stone-600 text-lg">
                    Understand upcoming rezoning changes and subdivisions in a
                    region.
                  </li>
                  <li className="text-stone-600 text-lg">
                    Stay informed with daily updates on local market shifts.{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center gap-6 w-full mt-12 md:mt-24">
          <div className="max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 w-full mt-24">
            <div className="p-4 xl:p-0 md:w-1/2">
              <h5 className="text-3xl font-semibold">
                Land Leads and Comparables
              </h5>
              <p className="text-lg text-stone-600 mt-8">
                Leveraging our comprehensive analysis, you gain a strategic
                advantage, by finding new land potential. Bringing you new land
                insights and development potential. You can just worry about
                closing the deal.{' '}
              </p>
              <ul className="list-disc flex flex-col gap-8 pl-6 mt-8">
                <li className="text-stone-600 text-lg">
                  Explore development trends within each city.
                </li>
                <li className="text-stone-600 text-lg">
                  Find potential parcels that are prime for development.
                </li>
                <li className="text-stone-600 text-lg">
                  Explore similar transaction costs of each parcel and find if
                  it makes sense to you.
                </li>
              </ul>
            </div>
            {/* <div className="md:w-1/2 w-full bg-gray-300 flex justify-center p-4 md:p-12 mt-12 md:mt-0 rounded-md">
              <div className="flex flex-col md:flex-row gap-4 h-full pb-12 ">
                <div className="flex flex-col justify-between gap-6 bg-white p-4 rounded-md ">
                  <div className="flex flex-row justify-between pt-6 gap-2">
                    <span className="h-2 bg-gray-300 w-24 rounded-md" />
                    <span className="h-2 bg-gray-300 w-24 rounded-md" />
                  </div>
                  <div className="flex flex-row items-end gap-3">
                    <span className="h-24 bg-red-400 opacity-70 w-2 rounded-md" />
                    <span className="h-20 bg-red-400 w-2 rounded-md" />
                    <span className="h-24 bg-red-400 opacity-70 w-2 rounded-md" />
                    <span className="h-16 bg-red-400 opacity-70 w-2 rounded-md" />
                    <span className="h-12 bg-red-400 opacity-70 w-2 rounded-md" />
                    <span className="h-20 bg-red-400 opacity-70 w-2 rounded-md" />
                    <span className="h-4 bg-red-400 opacity-70 w-2 rounded-md" />
                    <span className="h-20 bg-red-400 w-2 rounded-md" />
                    <span className="h-24 bg-red-400 opacity-70 w-2 rounded-md" />
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-2 items-center justify-center">
                      <span className="h-2 bg-gray-300 w-16 rounded-md" />
                      <p className="font-bold text-lg">1.8</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="h-2 bg-gray-300 w-full rounded-md" />
                      <p className="font-bold text-lg">Residential</p>
                    </div>
                  </div>
                </div>
                <div className="h-full justify-end flex flex-col my-12">
                  <div className="bg-white p-4 rounded-b-md md:rounded-md flex flex-col items-center gap-6 w-full">
                    <p className="text-xl font-bold">New Leads</p>
                    <div className="flex flex-row justify-between gap-6 w-full">
                      <div className="flex flex-col gap-4 justify-between w-full">
                        <span className="h-2 bg-gray-300 w-24 rounded-md" />
                        <span className="h-2 bg-gray-300 w-24 rounded-md" />
                        <span className="h-2 bg-gray-300 w-24 rounded-md" />
                        <span className="h-2 bg-gray-300 w-24 rounded-md" />
                      </div>
                      <div className="flex flex-col w-full h-full justify-between">
                        <span className="h-2 bg-red-300 w-18 rounded-md" />
                        <span className="h-2 bg-green-300 w-18 rounded-md" />
                        <span className="h-2 bg-green-300 w-18 rounded-md" />
                        <span className="h-2 bg-green-300 w-18 rounded-md" />
                        <span className="h-2 bg-green-300 w-18 rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="bg-gray-300 md:w-1/2 p-4 rounded-md flex items-center justify-center md:p-12">
              <img src="/landingHeader/chart2.svg" alt="chart" className="" />
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center justify-center">
          <div className="mt-12 md:mt-24 w-full flex flex-col items-center max-w-7xl  ">
            <div className="flex flex-col md:flex-row justify-between gap-12 mt-12 ">
              {/* <div className="bg-gray-300 p-4 md:p-12 md:w-1/2 rounded-md">
                <div className="flex flex-col justify-center items-center md:flex-row gap-4 w-full">
                  <div className="flex flex-col gap-6 bg-white p-4 rounded-md w-full">
                    <div className="flex flex-row justify-between">
                      <h4 className="text-xl font-semibold">APN</h4>
                    </div>
                    <p className="font-bold text-lg h-max">8675309</p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col gap-6 bg-white p-4 rounded-md w-full">
                      <div className="flex flex-row justify-between items-center gap-12 w-full h-full">
                        <h5 className="font-semibold text-lg">Hazard</h5>
                        <span className="h-2 bg-gray-400 w-16 rounded-md" />
                      </div>
                      <div className="flex flex-row ">
                        <span className="h-3 ml-2 bg-red-400 w-16 rounded-md" />
                        <span className="h-3 bg-red-400 opacity-30 w-24 rounded-md" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 bg-white p-4 rounded-md">
                      <div className="flex flex-row justify-between items-center gap-12 w-full h-full">
                        <h5 className="font-semibold text-lg">Area</h5>
                        <span className="h-2 bg-gray-400 w-16 rounded-md" />
                      </div>
                      <div className="flex flex-row">
                        <span className="h-3 ml-2 bg-green-500 w-48 rounded-md" />
                        <span className="h-3 bg-green-400 opacity-30 w-16 rounded-md" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 bg-white p-4 rounded-md">
                      <div className="flex flex-row justify-between items-center gap-12 w-full h-full">
                        <h5 className="font-semibold text-lg">Zone</h5>
                        <span className="h-3 bg-yellow-400 w-16 rounded-md" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 bg-white p-4 rounded-md">
                      <div className="flex flex-row justify-between items-center gap-12 w-full h-full">
                        <h5 className="font-semibold text-lg">Land Use</h5>
                        <span className="h-3 bg-yellow-400 w-16 rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="bg-gray-300 md:w-1/2 p-4 rounded-md flex items-center justify-center md:p-12">
                <img src="/landingHeader/chart.svg" alt="chart" className="" />
              </div>
              <div className="p-4 xl:p-0 md:w-1/2 mb-12">
                <h5 className="text-3xl font-semibold">
                  Risk Analysis and Zoning
                </h5>
                <p className="text-lg text-stone-600 mt-8">
                  Navigate zoning laws and environmental risks with our detailed
                  risk assessments, ensuring your real estate decisions are
                  safeguarded and set for growth. Our tools provide clarity and
                  foresight in complex landscapes.
                </p>
                <ul className="list-disc flex flex-col gap-8 pl-6 mt-8">
                  <li className="text-stone-600 text-lg">
                    Get updated on potential obstacles that may effect land
                    development.
                  </li>
                  <li className="text-stone-600 text-lg">
                    Employ our proprietary models that evaluate the efficacy of
                    land makeup and local regulations.
                  </li>
                  <li className="text-stone-600 text-lg">
                    Real-time data to assess and strategize for project
                    resilience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatePresence>
    </div>
  );
}

const cardVariants = {
  hidden: {
    y: 350,
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
};
const cardVariantsFromLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (index) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
      delay: index * 0.1, // Adjust the delay for staggered effect
    },
  }),
};

const staggeredCardVariants = {
  hidden: {
    y: 350,
    opacity: 0,
  },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
      delay: index * 0.1, // Adjust the delay for staggered effect
    },
  }),
};
