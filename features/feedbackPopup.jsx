import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function FeedbackPopup({
  onFeedbackRatingChange,
  onFeedbackCommentChange,
  onFeedbackReferChange,
  onFeedbackSubmit,
  onFeedbackClose,
}) {
  const [open, setOpen] = useState(true)
  const [feedbackRating, setFeedbackRating] = useState('')
  const [feedbackComment, setFeedbackComment] = useState('')
  const [feedbackRefer, setFeedbackRefer] = useState('Very likely')

  function handleFeedbackRatingChange(event) {
    const value = event.target.value
    setFeedbackRating(value)
    onFeedbackRatingChange(value)
  }

  function handleFeedbackCommentChange(event) {
    const value = event.target.value
    setFeedbackComment(value)
    onFeedbackCommentChange(value)
  }

  function handleFeedbackReferChange(event) {
    const value = event.target.value
    setFeedbackRefer(value)
    onFeedbackReferChange(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    // Pass the collected values to the onFeedbackSubmit callback function
    onFeedbackSubmit(feedbackRating, feedbackComment, feedbackRefer)
    setOpen(false)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <div className='fixed inset-0' />

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'>
                <Dialog.Panel className='pointer-events-auto w-screen max-w-2xl'>
                  <form
                    onSubmit={handleSubmit}
                    className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    <div className='flex-1'>
                      {/* Header */}
                      <div className='bg-gray-300 px-4 py-6 sm:px-6'>
                        <div className='flex items-start justify-between space-x-3'>
                          <div className='space-y-1'>
                            <Dialog.Title className='text-base font-semibold leading-6 text-gray-900'>
                              Please fill out this short feedback survey
                            </Dialog.Title>
                            <p className='text-sm text-black'>
                              We value your feedback and plan to make changes
                              accordingly.
                            </p>
                          </div>
                          <div className='flex h-7 items-center'>
                            <button
                              type='button'
                              className='text-gray-400 hover:text-gray-500'
                              onClick={() => {
                                setOpen(false)
                                onFeedbackClose(false)
                              }}>
                              <span className='sr-only'>Close panel</span>
                              <XMarkIcon
                                className='h-6 w-6'
                                aria-hidden='true'
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Divider container */}
                      <div className='space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0'>
                        {/* Rating */}
                        <fieldset className='space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5'>
                          <legend className='sr-only'>Rating</legend>
                          <div
                            className='text-sm font-medium leading-6 text-gray-900'
                            aria-hidden='true'>
                            Rating
                          </div>
                          <div className='space-y-5 sm:col-span-2'>
                            <div className='space-y-5 sm:mt-0'>
                              {reverseRating.map((item) => (
                                <div
                                  key={item.id}
                                  className='relative flex items-start'>
                                  <div className='absolute flex h-6 items-center'>
                                    <input
                                      id='feedback-rating'
                                      name='feedback-rating'
                                      aria-describedby='feedback-rating'
                                      type='radio'
                                      value={item.rating}
                                      onChange={handleFeedbackRatingChange}
                                      className='h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600'
                                      defaultChecked={
                                        item.defaultChecked === true
                                      }
                                    />
                                  </div>
                                  <div className='pl-7 text-sm leading-6'>
                                    <label
                                      htmlFor='public-access'
                                      className='font-medium text-gray-900'>
                                      {item.rating} stars
                                    </label>
                                    <p
                                      id='public-access-description'
                                      className='text-gray-500'>
                                      {item.name}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </fieldset>
                        {/* Feedback comment about platform */}
                        <div className='space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5'>
                          <div>
                            <label
                              htmlFor='feedback-comment'
                              className='block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5'>
                              Leave a comment about how we could improve our
                              platform.
                            </label>
                          </div>
                          <div className='sm:col-span-2'>
                            <textarea
                              id='feedback-comment'
                              name='feedback-comment'
                              rows={3}
                              onChange={handleFeedbackCommentChange}
                              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                              defaultValue={''}
                            />
                          </div>
                        </div>

                        {/* How likely to refer someone */}
                        <div className='space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5'>
                          <div>
                            <label
                              htmlFor='feedback-refer'
                              className='block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5'>
                              How likely are you to refer this platform to a
                              colleague or friend?
                            </label>
                          </div>
                          <div className='sm:col-span-2'>
                            <label
                              htmlFor='feedback-refer'
                              className='block text-sm font-medium leading-6 text-gray-900'>
                              Location
                            </label>
                            <select
                              id='feedback-refer'
                              name='feedback-refer'
                              onChange={handleFeedbackReferChange}
                              className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6'
                              defaultValue='Please select'>
                              <option>Please select</option>
                              <option>Very likely</option>
                              <option>Likely</option>
                              <option>Maybe</option>
                              <option>Needs more features first</option>
                              <option>I would not recommend</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Action buttons */}
                    <div className='flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6'>
                      <div className='flex justify-end space-x-3'>
                        <button
                          type='button'
                          className='rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                          onClick={() => setOpen(false)}>
                          Cancel
                        </button>
                        <button
                          type='submit'
                          className='inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                          Submit feedback
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

const rating = [
  {
    id: 1,
    rating: 1,
    name: 'Very Bad',
    defaultChecked: false,
  },
  {
    id: 2,
    rating: 2,
    name: 'Bad',
    defaultChecked: false,
  },
  {
    id: 3,
    rating: 3,
    name: 'Average',
    defaultChecked: false,
  },
  {
    id: 4,
    rating: 4,
    name: 'Good',
    defaultChecked: false,
  },
  {
    id: 5,
    rating: 5,
    name: 'Very Good',
    defaultChecked: false,
  },
]

const reverseRating = rating.reverse()
