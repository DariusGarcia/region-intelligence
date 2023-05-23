import Link from 'next/link'

export default function Cta() {
  return (
    <div className='bg-white mt-12 md:mt-24'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Ready to dive in?
          <br />
          Start your free trial today.
        </h2>
        <div className='mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
          <Link
            href='/pricing'
            className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          >
            Get started
          </Link>
          <Link
            href='/pricing'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Learn more <span aria-hidden='true'>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
