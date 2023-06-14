import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function StatusModal({ handleToggle }) {
  const [open, setOpen] = useState(true)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full md:max-w-4xl  sm:p-6'>
                <div>
                  <div className=''>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-semibold leading-6 text-black'>
                      Project status types:
                    </Dialog.Title>
                    <section className='mt-2'>
                      {statusTypes.map((statusType) => (
                        <article
                          key={statusType.name}
                          className='mb-4 text-black'>
                          <p className='text-md font-bold text-black underline'>
                            {statusType.name}
                          </p>
                          <div className='flex flex-col gap-2'>
                            <div>
                              <p>
                                <span className='font-medium'>
                                  {statusType.type1.name}:{' '}
                                </span>
                                {statusType.type1.description}
                              </p>
                            </div>
                            {statusType.type2 && (
                              <div>
                                <p>
                                  <span className='font-medium'>
                                    {statusType.type2?.name}:{' '}
                                  </span>
                                  {statusType.type2?.description}
                                </p>
                              </div>
                            )}
                            {statusType.type3 && (
                              <div>
                                <p>
                                  <span className='font-medium'>
                                    {statusType.type3?.name}:{' '}
                                  </span>
                                  {statusType.type3?.description}
                                </p>
                              </div>
                            )}
                          </div>
                        </article>
                      ))}
                    </section>
                  </div>
                </div>
                <div className='mt-5 sm:mt-6'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                    onClick={() => setOpen(false)}>
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

const statusTypes = [
  {
    name: 'Approved',
    type1: {
      name: 'Approved',
      description:
        'Projects or applicants that have received the necessary approvals and are moving forward.',
    },
  },
  {
    name: 'Active Status',
    type1: {
      name: 'Pending',
      description:
        'Projects or applicants that are currently awaiting a decision or action.',
    },
    type2: {
      name: 'In Review',
      description:
        'Projects or applicants that are currently being evaluated or assembled by relevant authorities.',
    },
  },
  {
    name: 'Inactive Status',
    type1: {
      name: 'Withdrawn',
      description:
        'Projects or applicants that have been voluntarily withdrawn by the applicant or project proponent.',
    },
    type2: {
      name: 'Under Construction',
      description:
        'Projects that are currently in progress and undergoing physical development or construction.',
    },
  },
  {
    name: 'Administrative Status',
    type1: {
      name: 'Entitled',
      description:
        'Projects or applicants that have obtained entitlements or rights to proceed but have not yet commenced construction or development.',
    },
  },
  {
    name: 'Procedural Status',
    type1: {
      name: 'Development Project Review',
      description:
        'Projects or applicants that are undergoing a comprehensive review process to assess their compliance with regulations.',
    },
    type2: {
      name: 'Public Hearing',
      description:
        'Projects or applicants that are being presented for public feedback and discussion as part of the decision-making process.',
    },
    type3: {
      name: 'Occurred',
      description:
        'Events or actions that have already taken place, potentially referring to past public hearings or other procedural steps.',
    },
  },
]
