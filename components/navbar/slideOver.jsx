import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import homeImage from '../../public/home.jpg'
import extractPhoneNumber from '@/utils/extractPhoneNumber'

export default function SlideOver({ isOpen, onClose, markerData }) {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={onClose}>
        <div className='fixed inset-0' />
        <div className='fixed inset-0 overflow-auto'>
          <div className='absolute inset-0 overflow-auto'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    <div className='bg-blue-700 px-4 py-6 sm:px-6'>
                      <div className='flex items-center justify-between'>
                        <Dialog.Title className='text-base font-semibold leading-6 text-white'>
                          Case number: {markerData && markerData.caseNumbers}
                        </Dialog.Title>
                        {/* TODO: fix bug where slide over doesn't open again if button is clicked */}
                        {/* CLOSE OUT BUTTON GOES HERE */}
                      </div>
                      <div className='mt-1'>
                        <p className='text-md text-blue-300'>
                          {markerData && markerData.listingNames}
                        </p>
                      </div>
                    </div>
                    <div className='relative flex-1 px-4 py-6 sm:px-6'>
                      <h2 className='font-medium text-lg mb-2'>Information</h2>
                      {markerData && (
                        <>
                          <img
                            src={
                              markerData.imageUrls ||
                              'https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?w=1200&ssl=1'
                            }
                            alt='home'
                            width={1000}
                            height={1000}
                            className='rounded-lg my-4 mb-6'
                          />
                          <section className='flex flex-col gap-4'>
                            <span className='bg-gray-300 mt-2 w-full h-0.5' />
                            <div className='flex gap-2 flex-row justify-between '>
                              <p className='text-gray-500 min-w-max'>
                                Project Name
                              </p>
                              <p className='flex text-center text-black text-sm'>
                                {markerData.listingNames}
                              </p>
                            </div>
                            <span className='bg-gray-300 mt-2 w-full h-0.5' />
                            <div className='flex flex-row justify-between '>
                              <p className='text-gray-500'>Location</p>
                              <p className='text-black text-end'>
                                {markerData.projectLocations} {markerData.city},
                                CA
                              </p>
                            </div>
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-row justify-between'>
                              <p className=' text-gray-500'>Status</p>
                              <p>{markerData.projectStatus}</p>
                            </div>
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-row justify-between'>
                              <p className=' text-gray-500'>Type of use</p>
                              <p>{markerData.typeOfUse}</p>
                            </div>
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-row justify-between'>
                              <p className='text-gray-500'>Applicant's name</p>
                              <p className='text-black'>
                                {markerData.applicant}
                              </p>
                            </div>
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-row justify-between'>
                              <p className='text-gray-500'>Applicant's email</p>

                              <a
                                href={`mailto: ${markerData.applicantEmail}`}
                                className={
                                  markerData.applicantEmail === 'Undisclosed'
                                    ? 'text-black'
                                    : 'text-blue-500 underline hover:text-blue-400'
                                }
                              >
                                {markerData.applicantEmail}
                              </a>
                            </div>
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-row justify-between'>
                              <p className='text-gray-500'>Planner's name</p>
                              <p className='text-black'>
                                {markerData.plannerName}
                              </p>
                            </div>
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-row justify-between'>
                              <p className='text-gray-500'>Planner's email</p>
                              <a
                                href={`mailto: ${markerData.plannerEmail}`}
                                className='text-blue-500 underline hover:text-blue-400'
                              >
                                {markerData.plannerEmail}
                              </a>
                            </div>
                            <span className='bg-gray-300 w-full h-0.5' />
                            <div className='flex flex-row justify-between'>
                              <p className='text-gray-500'>
                                Planner's phone number
                              </p>
                              <a
                                className='flex w-full justify-end underline text-blue-500 hover:text-blue-400'
                                href={`tel: ${extractPhoneNumber(
                                  markerData.plannerPhone
                                )}`}
                              >
                                {markerData.plannerPhone}
                              </a>
                            </div>
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-row justify-between'>
                              <p className='text-gray-500'>Last update</p>
                              <p className='text-black'>
                                {markerData.recentUpdate}
                              </p>
                            </div>
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-col gap-4 justify-between'>
                              <p className='text-gray-500'>Description</p>
                              <p className='text-black'>
                                {markerData.projectDescriptions}
                              </p>
                            </div>
                          </section>
                        </>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

{
  /* <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            className='rounded-md bg-blue-700 text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                            onClick={() => setOpen(!isOpen)}
                          >
                            <span className='sr-only'>Close panel</span>
                            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div> */
}
