import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

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
                className='aspect-[6/5] w-full max-w-lg my-8 md:my-0 rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2'
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
        {/* <div className='mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8'>
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
        </div> */}

        {/* Content section */}
        <div className='bg-white py-12 md:py-32 md:mt-24'>
          <div className='mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5'>
            <div className='max-w-2xl xl:col-span-2'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Meet the Visionaries
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                We’re a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
            </div>
            <ul
              role='list'
              className='-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3'>
              {people.map((person) => (
                <li
                  key={person.name}
                  className='flex flex-col gap-10 pt-12 sm:flex-row'>
                  <Image
                    className='aspect-[4/5] w-52 flex-none rounded-2xl object-cover'
                    src={person.imageUrl}
                    alt='Portrait of founders'
                    width={900}
                    height={900}
                  />
                  <div className='max-w-xl flex-auto'>
                    <h3 className='text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                      {person.name}
                    </h3>
                    <p className='text-base leading-7 text-gray-600'>
                      {person.role}
                    </p>
                    <p className='mt-6 text-base leading-7 text-gray-600'>
                      {person.bio}
                    </p>
                    <ul role='list' className='mt-6 flex gap-x-6'>
                      {/* <li>
                        <a
                          href={person.twitterUrl}
                          className='text-gray-400 hover:text-gray-500'>
                          <span className='sr-only'>Twitter</span>
                          <svg
                            className='h-5 w-5'
                            aria-hidden='true'
                            fill='currentColor'
                            viewBox='0 0 20 20'>
                            <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                          </svg>
                        </a>
                      </li> */}
                      <li>
                        <a
                          href={person.linkedinUrl}
                          className='text-gray-400 hover:text-gray-500'>
                          <span className='sr-only'>LinkedIn</span>
                          <svg
                            className='h-5 w-5'
                            aria-hidden='true'
                            fill='currentColor'
                            viewBox='0 0 20 20'>
                            <path
                              fillRule='evenodd'
                              d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Construction image */}
        {/* <div className='py-24 md:py-32'>
          <div className='flex justify-center mx-auto max-w-7xl px-6 lg:px-8'>
            <Image
              src='/about/construction1.jpg'
              alt='construction'
              width={900}
              height={900}
              className='rounded-md shadow-md'
            />
          </div>
        </div> */}

        {/* Feature sections */}
        <div className='overflow-hidden bg-gray-900 py-16 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
              <div className='lg:pr-8 lg:pt-4'>
                <div className='lg:max-w-lg'>
                  <h2 className='text-base font-semibold leading-7 text-blue-500'>
                    Platform Insights
                  </h2>
                  <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                    Our Data in Action
                  </p>
                  <p className='mt-6 text-lg leading-8 text-gray-300'>
                    ArcGIS: Visual Representation of the Esri Project in Action
                  </p>
                  <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none'>
                    {features.map((feature) => (
                      <div key={feature.name} className='relative pl-9'>
                        <dt className='inline font-semibold text-white'>
                          <feature.icon
                            className='absolute left-1 top-1 h-5 w-5 text-blue-500'
                            aria-hidden='true'
                          />
                          {feature.name}
                        </dt>{' '}
                        <dd className='inline'>{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <Image
                src='/about/arcGISDemo.png'
                alt='Product screenshot'
                className='w-full max-w-none rounded-xl shadow-md ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
        <div className='overflow-hidden bg-gray-900 py-16 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
              <div className='lg:ml-auto lg:pl-4 lg:pt-4'>
                <div className='lg:max-w-lg'>
                  <h2 className='text-base font-semibold leading-7 text-blue-500'>
                    Instant support
                  </h2>
                  <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                    Dev
                  </p>
                  <p className='mt-6 text-lg leading-8 text-white'>
                    The AI that will be your knowledgeable best friend when it
                    comes to planning and development projects.
                  </p>
                  <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none'>
                    {features2.map((feature) => (
                      <div key={feature.name} className='relative pl-9'>
                        <dt className='inline font-semibold text-white'>
                          <feature.icon
                            className='absolute left-1 top-1 h-5 w-5 text-blue-500'
                            aria-hidden='true'
                          />
                          {feature.name}
                        </dt>{' '}
                        <dd className='inline'>{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className='flex items-start justify-end lg:order-first'>
                <Image
                  src='/about/Dev.jpg'
                  alt='Product screenshot'
                  className='w-full max-w-none rounded-md shadow-lg ring-1 ring-gray-400/10 sm:w-[40rem]'
                  width={900}
                  height={900}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Stats */}
        {/* <div className='mx-auto mt-12 max-w-7xl px-6 lg:px-8'>
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
        </div> */}

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

const people = [
  {
    name: 'Julian Sotelo',
    role: 'Founder',
    imageUrl: '/about/julianPortrait.JPG',
    bio: "Julian is a data science expert who received a Master's degree in Business Analytics from the University of California, Irvine. Coming from a family background in real-estate development, Julian is determined to provide a service that connects the information gap between bureaucratic organizations, the private sector, and the public.",
    // twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Darius Garcia Jr.',
    role: 'Co-Founder',
    imageUrl: '/about/portrait.jpg',
    bio: "Darius is a Fullstack Developer who received his Business Economics Bachelor's degree from the University of California, Irvine. He also received a certificate for completing the Fullstack Web Developing bootcamp from UC Irvine as well. Darius currently works as a Coding Instructor, as well as a freelance web developer.",
    // twitterUrl: '#',
    linkedinUrl: '#',
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

const features = [
  {
    name: 'Planning Development Data.',
    description:
      'Keep Up to Date with current approved and pre-approved planning developments across SoCal. ',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Vital parcel information.',
    description:
      'Track vital parcel information such as zoning, hazard areas, acreage, and more! ',
    icon: ServerIcon,
  },
]

const features2 = [
  {
    name: 'AI Chatbot.',
    description:
      'Dev is the code and regulation expert when it comes to building and real-estate development, feel free to ask Dev any question!',
    icon: CloudArrowUpIcon,
  },
]
