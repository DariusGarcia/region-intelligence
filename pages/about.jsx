import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from 'next-sanity'
import groq from 'groq'
import BlogSection from '@/components/blog'

import FeatureSection from '@/components/featureSection'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const client = createClient({
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
})

export default function AboutPage({ posts }) {
  return (
    <>
      <Head>
        <title>
          Region Intelligence - About us | Our platform revolutionizes the way
          you access and handle vital information, making your decision-making
          process quicker and more informed. Step into the future of property
          development
        </title>
        <meta
          name='description'
          content=' No more navigating through complex research. With Region Intelligence,
          everything you need is just a few clicks away. Our platform
          revolutionizes the way you access and handle vital information,
          making your decision-making process quicker and more informed.
          Step into the future of property development - Join Region Intelligence
          today!'
        />
      </Head>
      <div className='bg-white'>
        <main className='isolate'>
          {/* Hero section */}
          <div className='relative isolate -z-10 overflow-hidden bg-gradient-to-b from-blue-100/20 '>
            <div
              className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:-mr-80 lg:-mr-96'
              aria-hidden='true'
            />
            <div className='mx-auto max-w-7xl px-6 py-12 sm:py-12 lg:px-8'>
              <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
                <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto'>
                  Bridging the Gap in Municipal Real-Estate Development
                  Information.
                </h1>
                <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
                  <p className='text-lg leading-8 text-gray-600'>
                    From City Planning to Residential Developments: Dive deep
                    into detailed parcel data, site planning insights, and
                    up-to-date licenses across Southern California
                    municipalities. Serving Real-Estate Developers, City Planner
                    Offices, and enthusiasts with comprehensive data on
                    Development Projects and more.
                  </p>
                </div>
                <Image
                  src='/about/aerialView.jpg'
                  priority={true}
                  width={1080}
                  height={1280}
                  alt='aerial view of LA'
                  className='aspect-[6/5] w-full max-w-lg my-8 md:my-0 rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2'
                />
              </div>
            </div>
            <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
          </div>

          {/* Timeline section */}
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <h2 className='mb-8 text-3xl font-bold'>Our Timeline</h2>
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

          {/* Content section */}
          <div className='bg-white py-12 mt-24 md:my-24'>
            <div className='mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5'>
              <div className='max-w-2xl xl:col-span-2'>
                <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  Meet the Visionaries
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  We’re a dynamic group of individuals who are passionate about
                  what we do and dedicated to delivering the best results for
                  our clients.
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

          {/* Feature sections */}
          <FeatureSection />
          {/* Mission and values */}
          <div className='bg-white'>
            <div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
              <div className='mx-auto max-w-3xl text-center'>
                <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  Our Mission and Values
                </h2>
                <p className='mt-4 text-gray-500'>
                  Building transparent urban futures.
                </p>
              </div>

              <div className='mt-16 space-y-16'>
                {values.map((value, valueIdx) => (
                  <div
                    key={value.name}
                    className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8'>
                    <div
                      className={classNames(
                        valueIdx % 2 === 0
                          ? 'lg:col-start-1'
                          : 'lg:col-start-8 xl:col-start-9',
                        'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
                      )}>
                      <h3 className='text-lg font-medium text-gray-900'>
                        {value.name}
                      </h3>
                      <p className='mt-2 text-md text-gray-500'>
                        {value.description}
                      </p>
                    </div>
                    <div
                      className={classNames(
                        valueIdx % 2 === 0
                          ? 'lg:col-start-6 xl:col-start-5'
                          : 'lg:col-start-1',
                        'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                      )}>
                      <div className='aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100'>
                        <Image
                          src={value.imageSrc}
                          alt={value.imageAlt}
                          height={1280}
                          width={1080}
                          className='object-cover object-center'
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className='bg-blue-700 mt-12'>
            <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
              <div className='mx-auto max-w-2xl text-center'>
                <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                  Streamline Your Real Estate Workflow.
                  <br />
                  Start using our app today.
                </h2>
                <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200'>
                  Save hours in your week by trying our platform. Made and built
                  for real-estate professionals.
                </p>
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                  <Link
                    href='/login'
                    className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                    Get started
                  </Link>
                  <Link
                    href='/'
                    className='text-sm font-semibold leading-6 text-white'>
                    Learn more <span aria-hidden='true'>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog section */}
          <section className='mt-12 bg-red-500 h-full w-full '>
            <BlogSection posts={posts} />
          </section>
        </main>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
      `)
  return {
    props: {
      posts,
    },
  }
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
    role: 'Founder / CEO',
    imageUrl: '/about/julianPortrait.JPG',
    bio: "Julian is a data science expert who received a Master's degree in Business Analytics from the University of California, Irvine. Coming from a family background in real-estate development, Julian is determined to provide a service that connects the information gap between bureaucratic organizations, the private sector, and the public.",
    // twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/julian-sotelo-553252173/',
  },
  {
    name: 'Darius Garcia Jr.',
    role: 'Software Engineer',
    imageUrl: '/about/portrait.jpg',
    bio: "Darius is a Fullstack Developer who received his Bachelor's degree in Business Economics from the University of California, Irvine. He also received a certificate for completing the Fullstack Web Developing bootcamp from UC Irvine. Darius currently works as a coding instructor, as well as a freelance web developer.",
    // twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/darius-garcia/',
  },
]

const values = [
  {
    name: 'Transparent and empowering',
    description:
      'We are committed to transparency in real estate development information. Empowering both the private and public sectors with fast information.',
    imageSrc: '/about/construction1.jpg',
    imageAlt: 'Black and white construction site.',
  },
  {
    name: 'Refined details',
    description:
      'As Southern California grows, so does the infrastructure basic necessities. Our goal is to shorten the time it takes to perform due diligence and get the shovel in the dirt faster.',
    imageSrc: '/about/construction2.jpg',
    imageAlt: 'Night image of construction site.',
  },
]

// used for "mission and values" section
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
