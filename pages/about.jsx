import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from 'next-sanity'
import groq from 'groq'
import BlogSection from '@/features/blog/blog'
import DefaultLayout from '@/components/layouts/defaultLayout'

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
      <div className='bg-[#FDFBF5]'>
        <main className='isolate'>
          {/* Hero section */}
          <div className='relative isolate -z-10 overflow-hidden bg-gradient-to-b from-blue-100/20 pt-24 '>
            <div className='mx-auto max-w-7xl px-6 py-4 sm:py-12 lg:px-8 flex '>
              <div className='mx-auto w-full lg:mx-0  lg:max-w-none  flex flex-col md:flex-row gap-12 justify-between  items-center'>
                <div className='mt-6 max-w-3xl lg:mt-0 flex flex-col items-center gap-8 justify-center w-full'>
                  <div className='flex flex-row gap-12 items-end'>
                    <img
                      src='/logos/logo3.svg'
                      alt='logo'
                      className='w-24 lg:w-56'
                    />
                    <h1 className='max-w-4xl text-7xl lg:text-9xl font-semibold tracking-tight lg:col-span-2 xl:col-auto uppercase'>
                      RI
                    </h1>
                  </div>
                  <p className='pl-1 text-2xl leading-8 uppercase font-semibold'>
                    Based in Los Angeles
                  </p>
                </div>
                <Image
                  src='/about/about-us-image.png'
                  priority={true}
                  width={1080}
                  height={1280}
                  alt='aerial view of LA'
                  className='aspect-[7/4] w-full max-w-xl my-8 md:my-0 rounded-md object-cover sm:mt-16 lg:mt-0 xl:row-span-2 xl:row-end-2'
                />
              </div>
            </div>
          </div>

          {/* Principles section */}
          <div className='w-full flex justify-center bg-neutral-800 text-white my-12 '>
            <div className='max-w-7xl px-6'>
              <section className='flex flex-col justify-center gap-4 py-16'>
                {mission.map((item) => (
                  <article key={item.title} className='py-4'>
                    <p className='text-3xl uppercase font-semibold'>
                      {item.title}
                    </p>
                    <div className='flex flex-col gap-8 mt-6'>
                      <p>{item.body1}</p>
                      <p>{item.body2}</p>
                      <p>{item.body3}</p>
                      <p>{item.body4}</p>
                      <p>{item.body5}</p>
                    </div>
                  </article>
                ))}
              </section>
            </div>
          </div>
          {/* Timeline section */}
          <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-12 md:mt-24 border-b pb-24'>
            <h2 className='mb-8 text-3xl font-bold '>COMPANY TIMELINE</h2>
            <div className='mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3'>
              {timeline.map((item) => (
                <div key={item.name}>
                  <time
                    dateTime={item.dateTime}
                    className='flex items-center text-sm font-semibold leading-6'>
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
                  <p className='mt-6 text-xl font-semibold leading-8 tracking-tight text-gray-900'>
                    {item.name}
                  </p>
                  <p className='mt-1 text-base leading-7 text-gray-600'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      <>{page}</>
    </DefaultLayout>
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

const links = [
  {
    id: 0,
    title: 'Getting Started with Region Intelligence',
    href: '/company/faq',
  },
  {
    id: 1,
    title:
      'How we leverage Artificial Intelligence to power your due diligence',
    href: '/company/faq',
  },
  {
    id: 2,
    title: 'How to use our products - a beginners guide',
    href: '/company/faq',
  },
]

const timeline = [
  {
    name: 'Proof of Concept',
    description:
      'In March 2024, the idea came to revolutionize the way real-estate development is completed. The team reached out to domain experts to validate industry pain points, and identified bottlenecks in the development process.',
    date: 'March 2024',
    dateTime: '2024-03',
  },
  {
    name: 'Ignition',
    description:
      'In April 2024, the team began working on a minimum viable product to share with target customers. Aiming to bring value from the beginning.',
    date: 'April 2024',
    dateTime: '2024-04',
  },
  {
    name: 'Beta Begins',
    description:
      'Working with domain experts, our plan is to make rapid advancements as the team took new ideas from the initial proof of concept and turned it into a MVP. With aim to offer enhanced data analytics capabilities, user-friendly interfaces, and robust integration with various sources. ',
    date: 'May 2024',
    dateTime: '2024-05',
  },
  {
    name: 'Iterations',
    description:
      'The team aims to iterate over the product and continue to meet customer needs & expectations. By this time we plan to have expanded to more cities and produce more features according to our KPI metrics. ',
    date: 'June 2024',
    dateTime: '2023-06',
  },
  {
    name: 'Product Market Fit',
    description:
      'Come July, Region Intelligence is planning to officially launch its platform to our main customers. With a refined financial model, Region Intelligence by now will have a plan to manage the burn rate. ',
    date: 'July 2024',
    dateTime: '2024-07',
  },
  {
    name: 'Launch of Version 1',
    description:
      'Come August, Region Intelligence is planning to officially launch its platform to the public. Offering unparalleled insights into the world of real estate development. Stay Tuned!',
    date: 'August 2024',
    dateTime: '2024-08',
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

const mission = [
  {
    id: 0,
    title: 'Our principles',
    body1:
      'This company was founded on the idea that information should be accessible to everyone. In a future where real estate development is AI-Driven, this company will be at the forefront of providing a wealth of information for real estate professionals of all backgrounds.',
    body2:
      'The due-diligence process for land valuation will be an entirely new process that encompasses key variables to give our users the best informed decision-making. ',
    body3:
      'Determining optimal solutions for land development will transform how real-estate transactions are completed. With our company being the backbone of the research. Taking the guessing out of brokered deals, land development, and lead generation. ',
    body4:
      'Region Intelligence aims to save the time, money, and headache involved in the entire acquisition process. Shedding light on what the future of real estate development can be. ',
    body5:
      'Being based in Los Angeles means that we are at the forefront of real estate development in California. With thousands of building permits submitted across over 200 cities. Southern California provides Region Intelligence the best foothold to reach developers of all types. ',
  },
]

// used for "mission and values" section
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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

{
  /* Staff section */
}
{
  /* <div className='bg-[#FDFBF5] py-12 mt-24 md:my-24'>
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
          </div> */
}
