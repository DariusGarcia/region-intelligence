import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import homeImage from '../../public/home.jpg'

export default function SlideOver({ isOpen, onClose, markerData }) {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={onClose}>
        <div className='fixed inset-0' />
        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
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
                          Permit
                        </Dialog.Title>
                        {/* TODO: fix bug where slide over doesn't open again if button is clicked */}
                        {/* CLOSE OUT BUTTON GOES HERE */}
                      </div>
                      <div className='mt-1'>
                        <p className='text-sm text-blue-300'>
                          {markerData && markerData.listingName}
                        </p>
                      </div>
                    </div>
                    <div className='relative flex-1 px-4 py-6 sm:px-6'>
                      <h2 className='font-medium text-lg mb-2'>Information</h2>
                      {markerData && (
                        <>
                          <Image
                            src={homeImage}
                            alt='home'
                            width={1000}
                            height={1000}
                            className='rounded-lg my-4 mb-6'
                          />
                          <section className='flex flex-col gap-4'>
                            <span className='bg-gray-300 mt-2 w-full h-0.5' />
                            <div className='flex flex-row justify-between '>
                              <p className='text-gray-500'>Location</p>
                              <p className='text-black'>
                                {markerData.location}
                              </p>
                            </div>
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-row justify-between'>
                              <p className=' text-gray-500'>Lot size</p>
                              <p>{markerData.lotSize}</p>
                            </div>
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-row justify-between'>
                              <p className=' text-gray-500'>Status</p>
                              <p>{markerData.projectStatus}</p>
                            </div>
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-row justify-between'>
                              <p className='text-gray-500'>Owner's name</p>
                              <p className='text-black'>
                                {markerData.ownerName}
                              </p>
                            </div>
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-row justify-between'>
                              <p className='text-gray-500'>Last update</p>
                              <p className='text-black'>
                                {markerData.lastUpdate}
                              </p>
                            </div>
                            <span className='bg-gray-300  w-full h-0.5' />
                            <div className='flex flex-col gap-4 justify-between'>
                              <p className='text-gray-500'>Description</p>
                              <p className='text-black'>
                                {markerData.description}
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
