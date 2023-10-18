import {
  CloudArrowUpIcon,
  ServerIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'

export default function FeatureSection() {
  return (
    <>
      {/* Feature sections */}
      <div className='overflow-hidden bg-gray-900 py-12 sm:py-12'>
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
                  <Link
                    href='https://www.esri.com/en-us/arcgis/about-arcgis/overview'
                    className='text-blue-500 underline hover:opacity-80'>
                    Powered by ArcGIS
                  </Link>
                  : Visual Representation of the Esri Project in Action
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
              className='w-full rounded-xl shadow-md ring-1 ring-white/10 sm:w-[96rem] md:-ml-4 lg:-ml-0'
              width={900}
              height={900}
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className='overflow-hidden bg-gray-900 py-12 '>
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
            <div className='flex items-start justify-start lg:order-first'>
              <Image
                src='/about/devBot.jpg'
                alt='Product screenshot'
                className='w-full rounded-md shadow-lg ring-1 ring-gray-400/10 sm:w-[30rem]'
                width={600}
                height={600}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

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
    icon: ChatBubbleLeftIcon,
  },
]
