import { useState } from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function feedbackCommentFeedBackBanner({
  bannerToggleFeedbackPopup,
}) {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <div className='max-w-[100vw] w-full'>
      {showBanner && (
        <AnimatePresence>
          <m.div
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.8 }}
            className=''>
            <m.div
              variants={cardVariants}
              className='relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 mb-8 rounded-md'>
              <div
                className='absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl'
                aria-hidden='true'>
                <div
                  className='aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-#3b82f6 to-#1e3a8a opacity-30'
                  style={{
                    clipPath:
                      'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                  }}
                />
              </div>
              <div
                className='absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl'
                aria-hidden='true'>
                <div
                  className='aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-#3b82f6 to-#1e3a8a opacity-30'
                  style={{
                    clipPath:
                      'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                  }}
                />
              </div>
              <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
                <p className='text-sm leading-6 text-gray-900'>
                  <strong className='font-semibold'>Feedback</strong>
                  <svg
                    viewBox='0 0 2 2'
                    className='mx-2 inline h-0.5 w-0.5 fill-current'
                    aria-hidden='true'>
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  Please fill out this short feedback survey. We value your
                  input and will use it to enhance our platform.
                </p>
                <button
                  onClick={() => {
                    bannerToggleFeedbackPopup(true)
                    setShowBanner(true)
                  }}
                  className='flex-none rounded-full bg-blue-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'>
                  Fill out now <span aria-hidden='true'>&rarr;</span>
                </button>
              </div>
              <div className='flex flex-1 justify-end'>
                <button
                  type='button'
                  onClick={() => setShowBanner(false)}
                  className='-m-3 p-3 focus-visible:outline-offset-[-4px] hover:bg-gray-200 rounded-full transition ease-out hover:scale-95'>
                  <span className='sr-only'>Dismiss</span>
                  <XMarkIcon
                    className='h-5 w-5 hover:text-gray-700 transition ease-out text-gray-900'
                    aria-hidden='true'
                  />
                </button>
              </div>
            </m.div>
          </m.div>{' '}
        </AnimatePresence>
      )}
    </div>
  )
}

const cardVariants = {
  offscreen: {
    x: 300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}
