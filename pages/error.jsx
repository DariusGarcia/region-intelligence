export default function ErrorPage({ errorMessage }) {
  return (
    <div className='min-h-screen'>
      <main className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-base font-semibold text-blue-600'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Page not found
          </h1>
          <p className='mt-12 text-base leading-7 text-gray-600'>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className='flex flex-row gap-2 items-center'>
            <p className='mt-12 text-base leading-7 text-black bg-red-500/40 border-2 border-red-600 rounded-md p-2 w-24 font-medium text-lg'>
              Error:
            </p>
            <p className='mt-12 text-base leading-7 text-gray-600'>
              {errorMessage}
            </p>
          </div>
          <div className='mt-12 flex items-center justify-center gap-x-6'>
            <a
              href='/land-directory'
              className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
              Go back home
            </a>
            <a href='/contact' className='text-sm font-semibold text-gray-900'>
              Contact support <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
