import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import extractPhoneNumber from '@/utils/extractPhoneNumber'
import StatusModal from '../statusModal'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

export default function SlideOver({ isOpen, onClose, markerData }) {
  const [open, setOpen] = useState(isOpen)
  const [isHovered, setIsHovered] = useState(false)

  const handleStatusIconClick = () => {
    setIsHovered(true)
    setTimeout(() => {
      setIsHovered(false)
    }, 5000)
  }

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  function handleToggle() {
    setIsHovered(!isHovered)
  }
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
                leaveTo='translate-x-full'>
                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    <div className='bg-blue-700 px-4 py-6 sm:px-6'>
                      <div className='flex items-center justify-between'>
                        <Dialog.Title className='text-base font-semibold leading-6 text-white'>
                          Case number: {markerData && markerData.caseNumbers}
                        </Dialog.Title>
                        {/* CLOSE OUT BUTTON GOES HERE */}
                      </div>
                      <div className='absolute  right-40 pb-24 bottom-50 '>
                        {isHovered && (
                          <StatusModal handleToggle={handleToggle} />
                        )}
                      </div>
                      <div className='mt-1'>
                        <p className='md:text-md text-blue-300'>
                          {markerData && markerData.listingNames}
                        </p>
                      </div>
                    </div>
                    <div className='relative flex-1 px-4 py-6 sm:px-6 z-30'>
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
                            <div className='flex gap-2 flex-col justify-start md:flex-row md:justify-between md:items-center '>
                              <p className='text-gray-500 min-w-max'>
                                Project Name
                              </p>
                              <p className='flex md:text-center text-black md:text-sm'>
                                {markerData.listingNames}
                              </p>
                            </div>
                            <span className='bg-gray-300 mt-2 w-full h-0.5' />
                            <div className='flex flex-col justify-start md:flex-row md:justify-between '>
                              <p className='text-gray-500'>Location</p>
                              <p className='text-black md:text-end'>
                                {markerData.projectLocations} {markerData.city},
                                CA
                              </p>
                            </div>
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-col justify-start md:flex-row md:justify-between'>
                              <div className='flex justify-start flex-row gap-2 md:justify-center md:items-center '>
                                <p className=' text-gray-500 w-min'>Status</p>
                                <p className='flex flex-col justify-start md:flex-row w-min cursor-pointer '>
                                  <QuestionMarkCircleIcon
                                    className='h-7 w-7 text-black hover:text-gray-400 hover:scale-105 transition ease-out'
                                    onClick={handleStatusIconClick}
                                  />
                                </p>
                              </div>

                              <p>{markerData.projectStatus}</p>
                            </div>
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-col justify-start md:flex-row md:justify-between'>
                              <p className=' text-gray-500'>Type of use</p>
                              <p>{markerData.typeOfUse}</p>
                            </div>
                            {markerData.applicant === 'Undisclosed' ? (
                              ''
                            ) : (
                              <>
                                <span className='bg-gray-300  w-full h-0.5' />
                                <div className='flex flex-col justify-start md:flex-row md:justify-between'>
                                  <p className='text-gray-500'>
                                    Applicant's name
                                  </p>
                                  <p className='text-black'>
                                    {markerData.applicant}
                                  </p>
                                </div>
                              </>
                            )}
                            {markerData.applicantEmail === 'Undisclosed' ? (
                              ''
                            ) : (
                              <>
                                <span className='bg-gray-300  w-full h-0.5' />
                                <div className='flex flex-col justify-start md:flex-row md:justify-between'>
                                  <p className='text-gray-500'>
                                    Applicant's email
                                  </p>

                                  <a
                                    href={`mailto: ${markerData.applicantEmail}`}
                                    className={
                                      markerData.applicantEmail ===
                                      'Undisclosed'
                                        ? 'text-black'
                                        : 'text-blue-500 underline hover:text-blue-400'
                                    }>
                                    {markerData.applicantEmail}
                                  </a>
                                </div>
                              </>
                            )}
                            {markerData.plannerName === 'Undisclosed' ||
                            markerData.plannerName === '' ? (
                              ''
                            ) : (
                              <>
                                <span className='bg-gray-300  w-full h-0.5' />
                                <div className='flex flex-col justify-start md:flex-row md:justify-between'>
                                  <p className='text-gray-500'>
                                    Planner's name
                                  </p>
                                  <p className='text-black'>
                                    {markerData.plannerName}
                                  </p>
                                </div>
                              </>
                            )}
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-col justify-start md:flex-row md:justify-between'>
                              <p className='text-gray-500'>Planner's email</p>
                              <a
                                href={`mailto: ${markerData.plannerEmail}`}
                                className='text-blue-500 underline hover:text-blue-400'>
                                {markerData.plannerEmail}
                              </a>
                            </div>
                            <span className='bg-gray-300 w-full h-0.5' />
                            <div className='flex flex-col justify-start md:flex-row md:justify-between'>
                              <p className='text-gray-500'>
                                Planner's phone number
                              </p>
                              <a
                                className='flex w-full md:justify-end underline text-blue-500 hover:text-blue-400'
                                href={`tel: ${extractPhoneNumber(
                                  markerData.plannerPhone
                                )}`}>
                                {markerData.plannerPhone}
                              </a>
                            </div>
                            {markerData.recentUpdate === 'Undisclosed' ? (
                              ''
                            ) : (
                              <>
                                <span className='bg-gray-300  w-full h-0.5' />
                                <div className='flex flex-col justify-start md:flex-row md:justify-between'>
                                  <p className='text-gray-500'>Last update</p>
                                  <p className='text-black'>
                                    {markerData.recentUpdate}
                                  </p>
                                </div>
                              </>
                            )}
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-col gap-4 md:justify-between'>
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
