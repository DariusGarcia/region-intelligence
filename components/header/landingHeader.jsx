export default function LandingHeaderNew() {
  return (
    <div className='relative bg-white w-full'>
      {/* First Section */}
      <div className='mx-auto my-2 md:my-0 max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
        <div className='px-6 pb-12 pt-6 md:pt-10 sm:pb-32 lg:col-span-7 md:px-0 xl:col-span-6'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <div className='hidden sm:flex'></div>
            <h1 className=' text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl'>
              Bringing Innovation to Urban Landscapes
            </h1>
            <p className='mt-8 md:mt-16 text-lg leading-8 text-gray-600'>
              <span className='italic text-blue-600'>
                Simple, quick, insightful.
              </span>{' '}
              Region Intelligence is where innovative data solutions meet
              Southern California’s urban challenges, enabling smarter growth
              and community synergy.
            </p>
            <div className='mt-10 flex items-center gap-x-6'>
              <a
                href='/login'
                className='rounded-md w-48 text-center bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                Get started
              </a>
              <a
                href='/about'
                className='text-sm font-semibold leading-6 text-gray-900 hover:opacity-70 transition ease-out hover:underline'>
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className='relative lg:col-span-4 lg:-mr-8  xl:inset-0 xl:left-1/2 xl:mr-0'>
          <img
            className='  bg-gray-50 w-96 lg:absolute rounded-md'
            src='/landingHeader.png'
            alt='first section'
          />
        </div>
      </div>
      {/* Second section */}
      <div className='bg-gray-100 w-full my-8 md:my-0'>
        <div className='w-full bg-gray-50 max-w-none'>
        <div className='mx-auto max-w-7xl lg:flex lg:flex-row lg:justify-between lg:px-8 '>
          <div className='relative md:mt-12 lg:col-span-4 lg:-mr-8 xl:mr-0 place-content-center '>
            <img
              className='rounded-md w-96'
              src='/landingHeader2.png'
              alt='2nd section'
            />
          </div>
          <div className='px-6 pb-12 pt-10 lg:col-span-8 md:px-0 xl:col-span-6 lg:flex lg:flex-col'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <div className='hidden sm:flex'>
                {/* Add any additional content you want to display on larger screens */}
              </div>
              <ul>
              <li className='list-disc ml-4 text-orange-600 font-bold'>
                For Municipalities
              </li></ul>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl'>
                Fostering Innovation with Municipal Partnerships
              </h1>
              <p className='mt-8 md:mt-16 text-lg leading-8 text-gray-600'>
                Region Intelligence is at the forefront of uniting
                municipalities through cutting-edge technology. We collaborate
                with cities across Southern California to bring advanced data
                tools that enhance urban planning, promote sustainable growth,
                and enable smart city initiatives.
              </p>
              <div className='mt-10 flex items-center gap-x-6'>
                <a
                  href='/why-us'
                  className='rounded-md w-48 text-center bg-white border border-black text-black px-3.5 py-2.5 text-sm font-semibold shadow-sm transition ease-out hover:text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                  Learn More <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* Third section */}
      <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 my-8 md:my-0'>
        <div className='px-6 pb-12 pt-10 lg:col-span-7 md:px-0 xl:col-span-6'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <div className='hidden  sm:flex'></div>
            <ul>
              <li className='list-disc ml-4 text-orange-600 font-bold'>For Municipalities</li></ul>
            <h1 className=' text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl'>
              Amplify Your Research
            </h1>
            <p className='mt-8 md:mt-16 text-lg leading-8 text-gray-600'>
              Region Intelligence equips real estate professionals with dynamic
              tools for comprehensive market analysis. Dive into detailed
              demographics, land-use trends, and essential data points through
              our intuitive dashboards, designed for informed, strategic
              decision-making.
            </p>
            <div className='mt-10 flex items-center gap-x-6'>
              <a
                href='/why-us'
                className='rounded-md w-48 text-center bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                Why RI <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className='relative md:mt-12 lg:col-span-4 lg:-mr-8 xl:inset-0 xl:left-1/2 xl:mr-0'>
          <img
            className='  bg-gray-50 w-96 lg:absolute rounded-md'
            src='/landingHeader3.png'
            alt=''
          />
        </div>
      </div>
      {/* Fourth section */}
      <div className='bg-gray-100 w-full my-8 md:my-0'>
      <div className='mx-auto max-w-7xl lg:flex lg:flex-row lg:justify-between lg:px-8 '>
          <div className='relative md:mt-12 lg:col-span-4 lg:-mr-8  xl:mr-0 place-content-center '>
            <img
              className='bg-gray-100 rounded-md w-96'
              src='/landingHeader4.png'
              alt=''
            />
          </div>
          <div className='px-6 pb-12 pt-10 lg:col-span-8 md:px-0 xl:col-span-6 lg:flex lg:flex-col'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <div className='hidden sm:flex'>
                {/* Add any additional content you want to display on larger screens */}
              </div>
              <ul>
              <li className='list-disc ml-4 text-orange-600 font-bold'>Why us?</li></ul>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl'>
                See How Our Data Can Help You
              </h1>
              <p className='mt-8 md:mt-16 text-lg leading-8 text-gray-600'>
                Region Intelligence equips real estate experts with personalized
                data points designed to meet their unique requirements. This
                service augments their analytical skills, allowing for a more
                comprehensive grasp of the property development environment.
              </p>
              <div className='mt-10 flex items-center gap-x-6'>
                <a
                  href='/why-us'
                  className='rounded-md w-48 text-center bg-white border border-black text-black px-3.5 py-2.5 text-sm font-semibold shadow-sm transition ease-out hover:text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                  Explore <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
