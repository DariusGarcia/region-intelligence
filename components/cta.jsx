import Link from 'next/link'

export default function CTA() {
  return (
    <div className='relative  isolate overflow-hidden bg-neutral-800 '>
      <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Ready to dive in?
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 font-medium'>
            Join Our Waitlist Today
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              href='/signup'
              className='rounded-md bg-white w-48 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-500 transition ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
