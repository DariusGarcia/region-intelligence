import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-white'>
      <main className='isolate'>
        {/* Hero section */}
        <div className='relative isolate -z-10 overflow-hidden bg-gradient-to-b from-blue-100/20 '>
          <div
            className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:-mr-80 lg:-mr-96'
            aria-hidden='true'
          />
          <div className='mx-auto max-w-7xl px-6 py-12 sm:py-40 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
              <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto'>
                Bridging the Gap in Municipal Real-Estate Development
                Information.
              </h1>
              <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
                <p className='text-lg leading-8 text-gray-600'>
                  From City Planning to Residential Developments: Dive deep into
                  detailed parcel data, site planning insights, and up-to-date
                  licenses across Southern California municipalities. Serving
                  Real-Estate Developers, City Planner Offices, and enthusiasts
                  with comprehensive data on Development Projects and more.
                </p>
              </div>
              <Image
                src='/about/aerialView.jpg'
                width={800}
                height={800}
                alt='aerial view of LA'
                className='aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2'
              />
            </div>
          </div>
          <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
        </div>

        {/* Timeline section */}
        <div className='mx-auto -mt-8 max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className='flex items-center text-sm font-semibold leading-6 text-blue-600'>
                  <svg
                    viewBox='0 0 4 4'
                    className='mr-4 h-1 w-1 flex-none'
                    aria-hidden='true'>
                    <circle cx={2} cy={2} r={2} fill='currentColor' />
                  </svg>
                  {item.date}
                  <div
                    className='absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0'
                    aria-hidden='true'
                  />
                </time>
                <p className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                  {item.name}
                </p>
                <p className='mt-1 text-base leading-7 text-gray-600'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Logo cloud */}
        <div className='mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8'>
          <div className='relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16'>
            <h2 className='mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Our customers love us
            </h2>
            <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300'>
              Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit
              occaecat labore proident cillum in nisi adipisicing officia
              excepteur tempor deserunt.
            </p>
            <div className='mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5'>
              <img
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg'
                alt='Transistor'
                width={158}
                height={48}
              />
              <img
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/reform-logo-white.svg'
                alt='Reform'
                width={158}
                height={48}
              />
              <img
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg'
                alt='Tuple'
                width={158}
                height={48}
              />
              <img
                className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg'
                alt='SavvyCal'
                width={158}
                height={48}
              />
              <img
                className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
                src='https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg'
                alt='Statamic'
                width={158}
                height={48}
              />
            </div>
            <div
              className='absolute -top-24 right-0 -z-10 transform-gpu blur-3xl'
              aria-hidden='true'>
              <div
                className='aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25'
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className='mt-32 overflow-hidden sm:mt-40'>
          <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
            <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
              <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
                <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  Our people
                </h2>
                <p className='mt-6 text-xl leading-8 text-gray-600'>
                  Quasi est quaerat. Sit molestiae et. Provident ad dolorem
                  occaecati eos iste. Soluta rerum quidem minus ut molestiae
                  velit error quod. Excepturi quidem expedita molestias quas.
                </p>
                <p className='mt-6 text-base leading-7 text-gray-600'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat. Quasi aperiam sit non sit neque
                  reprehenderit.
                </p>
              </div>
              <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
                <div className='w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
                  <img
                    src='https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80'
                    alt=''
                    className='aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                  />
                </div>
                <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8'>
                  <div className='order-first flex w-64 flex-none justify-end self-end lg:w-auto'>
                    <img
                      src='https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80'
                      alt=''
                      className='aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                    />
                  </div>
                  <div className='flex w-96 flex-auto justify-end lg:w-auto lg:flex-none'>
                    <img
                      src='https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80'
                      alt=''
                      className='aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                    />
                  </div>
                  <div className='hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none'>
                    <img
                      src='https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80'
                      alt=''
                      className='aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              We approach the workplace as something that adds to our lives and
              adds value to world.
            </h2>
            <p className='mt-6 text-base leading-7 text-gray-600'>
              Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est
              euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus
              sit eu in id. Integer vel nibh.
            </p>
          </div>
          <div className='mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end'>
            <div className='flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start'>
              <p className='flex-none text-3xl font-bold tracking-tight text-gray-900'>
                250k
              </p>
              <div className='sm:w-80 sm:shrink lg:w-auto lg:flex-none'>
                <p className='text-lg font-semibold tracking-tight text-gray-900'>
                  Users on the platform
                </p>
                <p className='mt-2 text-base leading-7 text-gray-600'>
                  Vel labore deleniti veniam consequuntur sunt nobis.
                </p>
              </div>
            </div>
            <div className='flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44'>
              <p className='flex-none text-3xl font-bold tracking-tight text-white'>
                $8.9 billion
              </p>
              <div className='sm:w-80 sm:shrink lg:w-auto lg:flex-none'>
                <p className='text-lg font-semibold tracking-tight text-white'>
                  We’re proud that our customers have made over $8 billion in
                  total revenue.
                </p>
                <p className='mt-2 text-base leading-7 text-gray-400'>
                  Eu duis porta aliquam ornare. Elementum eget magna egestas.
                </p>
              </div>
            </div>
            <div className='flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-blue-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28'>
              <p className='flex-none text-3xl font-bold tracking-tight text-white'>
                401,093
              </p>
              <div className='sm:w-80 sm:shrink lg:w-auto lg:flex-none'>
                <p className='text-lg font-semibold tracking-tight text-white'>
                  Transactions this year
                </p>
                <p className='mt-2 text-base leading-7 text-blue-200'>
                  Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu
                  duis porta aliquam ornare.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
          <div className='mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row'>
            <div className='w-full lg:max-w-lg lg:flex-auto'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                We’re always looking for awesome people to join us
              </h2>
              <p className='mt-6 text-xl leading-8 text-gray-600'>
                Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est
                euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus
                sit eu in id.
              </p>
              <img
                src='https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80'
                alt=''
                className='mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]'
              />
            </div>
            <div className='w-full lg:max-w-xl lg:flex-auto'>
              <h3 className='sr-only'>Job openings</h3>
              <ul className='-my-8 divide-y divide-gray-100'>
                {jobOpenings.map((opening) => (
                  <li key={opening.id} className='py-8'>
                    <dl className='relative flex flex-wrap gap-x-3'>
                      <dt className='sr-only'>Role</dt>
                      <dd className='w-full flex-none text-lg font-semibold tracking-tight text-gray-900'>
                        <a href={opening.href}>
                          {opening.role}
                          <span
                            className='absolute inset-0'
                            aria-hidden='true'
                          />
                        </a>
                      </dd>
                      <dt className='sr-only'>Description</dt>
                      <dd className='mt-2 w-full flex-none text-base leading-7 text-gray-600'>
                        {opening.description}
                      </dd>
                      <dt className='sr-only'>Salary</dt>
                      <dd className='mt-4 text-base font-semibold leading-7 text-gray-900'>
                        {opening.salary}
                      </dd>
                      <dt className='sr-only'>Location</dt>
                      <dd className='mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500'>
                        <svg
                          viewBox='0 0 2 2'
                          className='h-0.5 w-0.5 flex-none fill-gray-300'
                          aria-hidden='true'>
                          <circle cx={1} cy={1} r={1} />
                        </svg>
                        {opening.location}
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
              <div className='mt-8 flex border-t border-gray-100 pt-8'>
                <a
                  href='#'
                  className='text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500'>
                  View all openings <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const timeline = [
  {
    name: 'Founded company',
    description:
      'In August 2023, a group of passionate real estate and tech enthusiasts came together to address the challenges faced by professionals in accessing municipal real-estate development information. Recognizing a gap in the market, they founded Region Intelligence with the aim to create an aggregated platform for this crucial data.',
    date: 'Aug 2023',
    dateTime: '2023-08',
  },
  {
    name: 'Developed Proof of Concept',
    description:
      'By September, the team had already conceptualized a dynamic platform that could gather, analyze, and present municipal development data. Leveraging their combined expertise, they quickly developed a proof of concept, laying the foundation for what would become a game-changing tool in the real estate and urban planning sector.',
    date: 'Sept 2023',
    dateTime: '2023-9',
  },
  {
    name: 'Developed beta',
    description:
      'October witnessed rapid advancements as the team took feedback from the initial proof of concept and channeled it into the development of a beta version. This version offered enhanced data analytics capabilities, user-friendly interfaces, and robust integration with multiple municipal data sources.',
    date: 'Oct 2023',
    dateTime: '2023-10',
  },
  {
    name: 'Beta Test',
    description:
      'In November, the plan is to initiate a closed beta test, inviting industry professionals, city planners, and real estate firms to try out the platform. This period was marked by rigorous testing, feedback collection, and iterative improvements, ensuring that the platform met the highest standards of accuracy and usability.',
    date: 'Nov 2023',
    dateTime: '2023-11',
  },
  {
    name: 'Launch',
    description:
      'Come December,  Region Intelligence is planning to officially launch its platform to the public. Offering unparalleled insights into municipal real-estate development, the platform quickly gained recognition as an indispensable tool for industry professionals, providing them with comprehensive, reliable, and easily accessible data.',
    date: 'Dec 2023',
    dateTime: '2023-12',
  },
]
const jobOpenings = [
  {
    id: 1,
    role: 'Full-time designer',
    href: '#',
    description:
      'Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.',
    salary: '$75,000 USD',
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    role: 'Account executive',
    href: '#',
    description:
      'Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.',
    salary: '$125,000 USD',
    location: 'San Francisco, CA',
  },
]
