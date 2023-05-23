import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function SlideOver({ isOpen, onClose, markerData }) {
  const [open, setOpen] = useState(isOpen)

  // Update the `open` state when the `isOpen` prop changes
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  console.log({ markerData: markerData })
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
                        <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            className='rounded-md bg-blue-700 text-blue-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                            onClick={() => setOpen(false)}
                          >
                            <span className='sr-only'>Close panel</span>
                            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>
                      <div className='mt-1'>
                        <p className='text-sm text-blue-300'>
                          {markerData && markerData.listingName}
                        </p>
                      </div>
                    </div>
                    <div className='relative flex-1 px-4 py-6 sm:px-6'>
                      {/* Your content */}{' '}
                      {markerData && (
                        <div className='mt-1'>
                          <p className='text-sm text-black'>
                            {markerData.ownerName}
                          </p>
                          <p>{markerData.projectStatus}</p>
                        </div>
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
