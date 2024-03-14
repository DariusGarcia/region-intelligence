import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import CTA from '@/components/cta'
import DefaultLayout from '@/components/layouts/defaultLayout'
export default function WhyUsPage() {
  return (
    <>
      <Head>
        <title>Region Intelligence - Why Us</title>
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
        <div className='relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 '>
          {/*<div
            className='absolute inset-y-0 right-1/2 -z-10  -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:-mr-80 lg:-mr-96'
            aria-hidden='true'
          />*/}

          <div className='mx-auto max-w-full flex flex-row justify-center'>
            <div className='mx-auto w-full pt-24 lg:mx-0 z-50 lg:max-w-none flex flex-col place-items-center justify-start gap-4'>
              <h2 className='w-3/12 text-5xl font-bold tracking-normal text-zinc-500 sm:text-6xl lg:col-span-2 xl:col-auto '>
                Analysts
              </h2>

              <h2 className='w-3/12 text-5xl font-bold tracking-normal text-zinc-500 sm:text-6xl lg:col-span-2 xl:col-auto '>
                Brokers
              </h2>

              <h2 className='w-3/12 text-5xl font-bold tracking-normal text-zinc-500 sm:text-6xl lg:col-span-2 xl:col-auto '>
                Developers
              </h2>

              <h2 className='w-1/2 text-5xl font-bold tracking-normal text-black sm:text-6xl lg:col-span-2 xl:col-auto'>
                For Realtors
              </h2>

              <h2 className='w-3/12 text-5xl font-bold tracking-normal text-zinc-500 sm:text-6xl lg:col-span-2 xl:col-auto '>
                You
              </h2>

              <p className='my-8 w-1/2 italic text-3xl font-normal tracking-normal text-black sm:text-4xl lg:col-span-2 xl:col-auto'>
                A unique experience tailored to fit your needs.
              </p>

              <div className='w-1/2 flex gap-8 mt-6'>
                <Link
                  href='/products'
                  className='bg-black w-72 text-center rounded-lg text-white text-xl font-semibold p-2 transition ease-out hover:bg-blue-500'>
                  Get Started
                </Link>
              </div>
            </div>

            <div className='relative h-224 w-full bg-black z-0 flex flex-col justify-center items-center'>
              <div className='w-72 h-auto mr-44 mb-44 py-5 rounded-lg flex flex-col bg-white text-black items-start justify-start gap-2 z-10 border border-gray-300 shadow-md'>
                <div className='h-auto w-auto px-10 font-medium text-2xl items-center'>
                  Hazard Overview
                </div>
                <div className='h-auto w-auto flex flex-row ml-10 gap-4'>
                  <div className='flex-1 h-3 w-20 rounded-lg bg-zinc-200' />
                  <div className='flex-1 h-3 w-20 rounded-lg bg-slate-400' />
                </div>
                <div className='h-auto w-auto px-10 mt-5 font-medium text-xl items-center'>
                  Fire Hazard
                </div>
                <div className='h-auto w-auto flex flex-row ml-10 gap-4'>
                  <div className='flex-1 h-3 w-20 rounded-lg bg-teal-100' />
                  <div className='flex-1 h-3 w-20 rounded-lg bg-zinc-200' />
                </div>
                <div className='h-auto w-auto px-10 mt-5 font-medium text-xl items-center'>
                  Liquefaction
                </div>
                <div className='h-auto w-auto flex flex-row ml-10 gap-4'>
                  <div className='h-3 w-20 rounded-lg bg-zinc-200' />
                  <div className='h-3 w-10 rounded-lg bg-green-700' />
                </div>
                <div className='h-auto w-auto px-10 mt-5 font-medium text-xl items-center'>
                  Earthquake Fault
                </div>
                <div className='h-auto w-auto flex flex-row ml-10 gap-4'>
                  <div className='h-3 w-20 rounded-lg bg-zinc-200' />
                  <div className='h-3 w-10 rounded-lg bg-green-700' />
                </div>
                <div className='h-auto w-auto px-10 mt-5 font-medium text-xl items-center'>
                  Sea Rise
                </div>
                <div className='h-auto w-auto flex flex-row ml-10 gap-4'>
                  <div className='h-3 w-20 rounded-lg bg-zinc-200' />
                  <div className='h-3 w-10 rounded-lg bg-green-700' />
                </div>
              </div>
              <div className='absolute bottom-48 end-36 w-auto h-auto py-5 rounded-lg flex flex-col bg-white text-black items-start justify-start gap-2 z-20 border border-gray-300 shadow-md'>
                <div className='h-auto w-auto px-10 font-medium text-2xl items-center'>
                  Price Trends
                </div>
                <div className='h-auto w-auto flex flex-row mx-10 gap-4'>
                  <div className='flex-1 h-3 w-20 rounded-lg bg-zinc-200' />
                  <div className='flex-1 h-3 w-20 rounded-lg bg-zinc-200' />
                </div>
                <div className='h-auto w-auto px-10 font-medium text-xl items-center'>
                  $180,000
                </div>
                {/*Insert Graph*/}
                <div className='h-auto w-auto flex flex-row mx-10 mt-32 gap-20'>
                  <div className='flex-1 h-3 w-20 rounded-lg bg-zinc-200' />
                  <div className='flex-1 h-3 w-20 rounded-lg bg-zinc-200' />
                </div>
              </div>
            </div>
          </div>

          {/*<div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />*/}
        </div>

        {/* Above Features */}
        <div className='mt-40 mx-10 w-auto flex flex-wrap flex-row justify-center'>
          <div className='px-10 w-1/3'>
            <h4 className='pb-3 text-3xl font-bold'>
              First Mover Advantage
            </h4>
            <p className='text-xl font-semibold'>
              Get the latest information on city planning to stay ahead of your competition.
              We provide all of the analysis at your fingertips so all you have to do is make the call.
            </p>
          </div>
          <div className='px-10 w-1/3'>
            <h4 className='pb-3 text-3xl font-bold'>
              Data Driven Decision Making
            </h4>
            <p className='text-xl font-semibold'>
              We leverage AI in our data process so you can get real-time insigns on latest city
              development trends.
            </p>
          </div>
          <div className='px-10 w-1/3'>
            <h4 className='pb-3 text-3xl font-bold'>
              A Growing Community
            </h4>
            <p className='text-xl font-semibold'>
              Our community of investors, developers, builders, and analysis value our data.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className='my-40 flex flex-col justify-center items-center gap-24'>
          <div className='w-fit justify-start'>
            <h1 className='text-6xl font-bold text-center'>
              Features
            </h1>
          </div>
          <div className='mx-auto w-full flex flex-row'>
            <div className='ml-20 w-full h-128 bg-slate-200 bg-clip-content flex items-center justify-center'>
              <div className='w-auto h-auto py-5 rounded-lg flex flex-col bg-white text-black items-start justify-start gap-4 z-10 border border-gray-300 shadow-md'>
                <div className='h-auto w-auto px-10 font-semibold text-2xl items-center'>
                  New Developments
                </div>
                <table class="table-fixed mx-8 w-auto">
                  <thead class='w-auto'>
                    <tr>
                      <th class='pl-2 pr-24 font-medium text-left'>APN(s)</th>
                      <th class='pr-12 font-medium text-left'>City</th>
                      <th class='pr-12 font-medium text-left'>Recent Update</th>
                      <th class='font-medium text-left'>More</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class='group hover:bg-gray-100'>
                      <td class='pl-2 pr-12 whitespace-nowrap'>
                        <div class='h-2 w-full rounded bg-zinc-200 group-hover:bg-gray-400'/>
                      </td>
                      <td class='pr-12 whitespace-nowrap'>Los Angeles</td>
                      <td class='pr-12 whitespace-nowrap'>02-24</td>
                      <td class='py-2 pr-2 whitespace-nowrap'>
                        <button class='bg-gray-200 hover:bg-gray-700 hover:text-white font-semibold py-1 px-3 rounded'>View Details</button>
                      </td>
                    </tr>
                    <tr class='group hover:bg-gray-100'>
                      <td class='pl-2 pr-12 whitespace-nowrap'>
                        <div class='h-2 w-full rounded bg-zinc-200 group-hover:bg-gray-400'/>
                      </td>
                      <td class='pr-12 whitespace-nowrap'>Irvine</td>
                      <td class='pr-12 whitespace-nowrap'>02-24</td>
                      <td class='py-2 pr-2 whitespace-nowrap'>
                        <button class='bg-gray-200 hover:bg-gray-700 hover:text-white font-semibold py-1 px-3 rounded'>View Details</button>
                      </td>
                    </tr>
                    <tr class='group hover:bg-gray-100'>
                      <td class='pl-2 pr-12 whitespace-nowrap'>
                        <div class='h-2 w-4/5 rounded bg-zinc-200 group-hover:bg-gray-400'/>
                      </td>
                      <td class='pr-12 whitespace-nowrap'>Palm Springs</td>
                      <td class='pr-12 whitespace-nowrap'>02-24</td>
                      <td class='py-2 pr-2 whitespace-nowrap'>
                        <button class='bg-gray-200 hover:bg-gray-700 hover:text-white font-semibold py-1 px-3 rounded'>View Details</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='mx-20 w-5/6 flex flex-col justify-center gap-4'>
              <h4 className='font-semibold text-3xl'>
                Fostering Innovation with Municipal Partnerships
              </h4>
              <p className='mb-5 text-2xl'>
                Region Intelligence is at the forefront of uniting municipalities through cutting
                edge technologies.
              </p>
              <div className='pl-3 flex flex-row justify-start w-full gap-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <p className='text-2xl'>
                  See individual land requirements for your developments.
                </p>
              </div>
              <div className='pl-3 flex flex-row justify-start w-full gap-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <p className='text-2xl'>
                  Identify hazards, dimensions, area analysis, and more for each project.
                </p>
              </div>
              <div className='pl-3 flex flex-row justify-start w-full gap-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <p className='text-2xl'>
                  Customize your experience in our fast-growing platform of cities.
                </p>
              </div>
            </div>
          </div>
          <div className='mx-auto w-full flex flex-row'>
            <div className='mx-20 w-5/6 flex flex-col justify-center gap-6'>
              <h4 className='ml-20 font-semibold text-3xl'>
                A Basis for Land Prices
              </h4>
              <p className='ml-20 text-2xl'>
                Leverage our proprietary AI to identify accurate pricing for parcels of land across Southern California.
                This takes the guess work out of your negotiations so you don’t need to worry about a bad deal. 
              </p>
            </div>
            <div className='relative mr-20 w-full h-128 bg-slate-200 bg-clip-content justify-center'>
              <div className='absolute w-[32rem] h-auto top-24 left-36 rounded-lg flex flex-row bg-white text-black items-start justify-start gap-4 z-10 border border-gray-300 shadow-md'>
                <div className='w-full flex flex-col gap-4'>
                  <div className='h-auto w-auto px-12 pt-4 font-semibold text-2xl underline underline-offset-[6px] items-center'>
                    Overview
                  </div>
                  <div className='w-auto px-12 text-gray text-lg tracking-wide'>
                    Project Location
                  </div>
                  <div class='h-2 w-24 mx-12 -mt-2 rounded bg-zinc-200'/>
                  <div className='w-auto px-12 text-gray text-lg tracking-wide'>
                    Description
                  </div>
                  <div class='h-2 w-32 mx-12 -mt-2 rounded bg-zinc-200'/>
                </div>
                <div className='w-full h-60 rounded-tr-lg rounded-br-lg bg-gray-200'>
                  {/*Insert Image*/}
                </div> 
              </div>
              <div className='absolute w-[22rem] h-auto bottom-16 right-28 rounded-lg flex flex-row bg-white text-black items-start justify-start gap-4 z-20 border border-gray-300 shadow-md'>
                <div className='w-full flex flex-col gap-4'>
                  <div className='h-auto w-auto pl-12 pt-4 font-semibold text-2xl underline underline-offset-[6px] items-center'>
                    Analysis
                  </div>
                  <div className='w-auto pl-12 text-gray text-lg tracking-wide'>
                    Square Feet
                  </div>
                  <div class='h-2 w-24 ml-12 -mt-2 rounded bg-zinc-200'/>
                  <div className='w-auto pl-12 text-gray text-lg tracking-wide'>
                    Comparable
                  </div>
                  <div class='h-2 w-24 ml-12 -mt-2 rounded bg-zinc-200'/>
                </div>
                <div className='w-full h-48 rounded-tr-lg rounded-br-lg bg-gray-200'>
                  {/*Insert Bar Graph*/}
                </div> 
              </div>
            </div>
          </div>
          <div className='mx-auto w-full flex flex-row'>
            <div className='relative ml-20 w-full h-128 bg-slate-200 bg-clip-content justify-center'>
              <div className='absolute w-[28rem] h-auto top-32 left-28 rounded-lg flex flex-row bg-white text-black items-start justify-start gap-4 z-10 border border-gray-300 shadow-md'>
                <div className='w-1/4 h-60 flex flex-col rounded-l-lg bg-gray-100 gap-6'>
                  <div className='mx-3 mt-8 h-2 rounded-full bg-gray-200'/>
                  <div className='mx-3 h-2 rounded-full bg-gray-200'/>
                  <div className='mx-3 h-2 rounded-full bg-gray-200'/>
                  <div className='mx-3 h-2 rounded-full bg-gray-200'/>
                  <div className='mx-3 h-2 rounded-full bg-gray-200'/>
                </div> 
                <div className='w-full flex flex-col gap-4'>
                  <div className='mt-8 ml-4 grid grid-rows-3 grid-flow-col justify-start gap-2 gap-x-10'>
                    <div className='w-16 h-4 bg-indigo-200'/>
                    <div className='w-28 h-4 bg-indigo-500'/>
                    <div className='w-20 h-4 bg-indigo-200'/>
                    <div className='w-16 h-4 bg-indigo-200'/>
                    <div className='w-28 h-4 bg-indigo-200'/>
                    <div className='w-24 h-4 bg-indigo-400'/>
                  </div>
                  <div className='m-2 w-auto h-[6.5rem] rounded-lg bg-gray-100'>
                    <div className='m-3 w-auto h-20 rounded-lg bg-white'>
                      {/*Insert Graph*/}
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute w-80 h-auto bottom-28 right-24 rounded-lg flex flex-row bg-white text-black items-start justify-start gap-4 z-20 border border-gray-300 shadow-md'>
                <div className='w-1/4 h-40 flex flex-col rounded-l-lg bg-gray-100 justify-center gap-6'>
                  <div className='mx-3 h-2 rounded-full bg-gray-200'/>
                  <div className='mx-3 h-2 rounded-full bg-gray-200'/>
                  <div className='mx-3 h-2 rounded-full bg-gray-200'/>
                </div>
                <div className='w-full flex flex-col gap-4'>
                  <div className='h-auto w-auto pt-4 font-semibold items-center'>
                    Region Intelligence
                  </div>
                  <div className='mr-8 h-auto w-auto flex flex-row gap-5'>
                    <div class='h-1 w-3/4 rounded bg-slate-200'/>
                    <div class='h-1 w-full rounded bg-slate-200'/>
                  </div>
                  <div class='h-0.5 w-56 rounded bg-zinc-200'/>
                  <div class='h-0.5 w-56 rounded bg-zinc-200'/>
                  <div class='h-0.5 w-56 rounded bg-zinc-200'/>
                </div>
              </div>
            </div>
            <div className='mx-20 w-5/6 flex flex-col justify-center gap-6'>
              <h4 className='pr-20 font-semibold text-3xl'>
                Great User Experience
              </h4>
              <p className='pr-20 text-2xl'>
                Our intuitive design makes us a great choice for users across all backgrounds.
                Providing that they know how to work a laptop.
              </p>
            </div>
          </div>
          <div className='mx-auto w-full flex flex-row'>
            <div className='mx-20 w-5/6 flex flex-col justify-center gap-6'>
              <h4 className='pl-20 font-semibold text-3xl'>
                Intuitive Reporting for Your Use-Case
              </h4>
              <p className='pl-20 text-2xl'>
                Generate detailed reports on all aspects of real-estate. From city level to parcel level,
                we can get you prepared for your next meeting.
              </p>
            </div>
            <div className='relative w-full h-128 mr-20 bg-slate-200 bg-clip-content justify-center'>
              <div className='absolute w-auto h-auto top-32 left-64 rounded-lg flex flex-col bg-white items-start justify-start gap-6 z-10 border border-gray-300 shadow-md'>
                <div className='w-full px-4 mt-10 flex flex-row gap-4'>
                  <div className='w-full h-12 bg-gray-400'>
                    {/*Insert Pie Chart*/}
                  </div>
                  <div className='w-32 flex flex-col justify-between'>
                    <div className='h-0.5 w-full rounded bg-zinc-200' />
                    <div className='h-0.5 w-full rounded bg-zinc-200' />
                    <div className='h-0.5 w-full rounded bg-zinc-200' />
                  </div>
                </div>
                <div class='h-0.5 w-36 mx-4 rounded bg-zinc-200'/>
                <div class='h-0.5 w-36 mx-4 rounded bg-zinc-200'/>
                <div class='h-0.5 w-36 mx-4 mb-10 rounded bg-zinc-200'/>
              </div>
              <div className='absolute w-auto h-auto bottom-24 right-40 rounded-lg flex flex-col bg-white item-start justify-start gap-6 z-20 border border-gray-300 shadow-md'>
                <div className='w-auto h-auto mt-5 px-5 flex flex-row justify-start items-center gap-4'>
                  <div className='w-20 p-0.5 text-black text-center font-medium rounded-full bg-gray-100'>
                    APN
                  </div>
                  <div className='w-20 p-0.5 text-black text-center font-medium rounded-full bg-gray-100'>
                    Permit
                  </div>
                  <div class='h-1.5 w-20 rounded bg-gray-100'/>
                </div>
                <div className='w-auto h-auto px-5 flex flex-row justify-start items-center gap-4'>
                  <div className='text-left text-3xl font-semibold'>
                    $
                  </div>
                  <div className='w-auto h-6 flex flex-col justify-center gap-1'>
                    <div className='h-1 w-16 rounded-full bg-gray-200' />
                    <div className='h-1 w-24 rounded-full bg-gray-300' />
                    <div className='h-1 w-8 rounded-full bg-gray-200' />
                  </div>
                  <div className='w-20 h-16 mx-10 rounded bg-stone-200 self-justify-end' />
                </div>
                <div className='w-auto h-auto px-5 flex flex-row justify-start items-center gap-8'>
                  <div className='h-2 w-4 rounded-full bg-orange-300' />
                  <div className='h-2 w-20 -ml-6 rounded-full bg-gray-200' />
                  <div className='h-2 w-4 rounded-full bg-emerald-400' />
                  <div className='h-2 w-20 -ml-6 rounded-full bg-gray-200' />
                </div>
                <div className='w-auto h-auto px-5 -mt-5 mb-5 flex flex-row justify-start items-center gap-20'>
                  <div className='text-left text-sm font-semibold'>8765309</div>
                  <div className='text-left text-sm font-semibold'>28 - 921</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CTA />
      </div>
    </>
  )
}

WhyUsPage.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      <>{page}</>
    </DefaultLayout>
  )
}
