import Link from 'next/link'

export default function CTA() {
  return (
    <div className='relative  isolate overflow-hidden bg-gray-900 '>
      <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Ready to dive in?
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 font-medium'>
            Get started or schedule a demo
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              href='/signup'
              className='rounded-md bg-blue-600 w-48 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
              Get started
            </Link>
            <Link
              href='/contact'
              className='rounded-md  w-48 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
      <svg
        viewBox='0 0 1024 1024'
        className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]'
        aria-hidden='true'>
        <circle
          cx={512}
          cy={512}
          r={512}
          fill='url(#8d958450-c69f-4251-94bc-4e091a323369)'
          fillOpacity='0.7'
        />
        <defs>
          <radialGradient id='8d958450-c69f-4251-94bc-4e091a323369'>
            <stop stopColor='#93c5fd' />
            <stop offset={1} stopColor='#2563eb' />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
