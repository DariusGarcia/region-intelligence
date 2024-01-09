import {
  Square3Stack3DIcon,
  GlobeAltIcon,
  MapPinIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'

export default function ProductFeatures() {
  return (
    <div className='flex flex-col items-center  justify-center bg-gray-900 text-white w-full rounded-md px-4 md:px-0 mt-36 '>
      <div className='my-8 border-b-2 flex items-center justify-center text-center'>
        <h2 className='text-3xl md:text-4xl font-bold w-full flex items-center text-center pb-8'>
          Dashboard Core Capabilities
        </h2>
      </div>
      <ul role='list' className='-mb-8 pb-24 '>
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className='relative pb-8'>
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className='absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200'
                  aria-hidden='true'
                />
              ) : null}
              <div className='relative flex space-x-3'>
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex mt-2 items-center justify-center ring-8 ring-white'
                    )}>
                    <event.icon
                      className='h-5 w-5 text-black '
                      aria-hidden='true'
                    />
                  </span>
                </div>
                <div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5 pl-2 md:pl-8'>
                  <div>
                    <p className='text-2xl font-semibold '>
                      {event.title}{' '}
                      <a href={event.href} className='font-medium '>
                        {event.target}
                      </a>
                    </p>
                    <div className='flex flex-col gap-6 max-w-lg mt-6 '>
                      <p className='leading-8'>{event.body1}</p>
                      <p className='leading-8'>{event.body2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const timeline = [
  {
    id: 1,
    title: 'Zoning & Regulations',
    body1:
      'Stay informed about the specific land-use regulations and restrictions in Southern California. Keep up to date with local  changes in zoning ordinances. ',
    body2:
      'Know the nuances between every city and understand how these can impact your projects. ',
    icon: Square3Stack3DIcon,
    iconBackground: 'bg-white',
  },
  {
    id: 2,
    title: 'Parcel Information',
    body1:
      'Access detailed data on individual land parcels, from hazards to size dimensions. ',
    body2: 'Great for when you need fast due diligence on a particular parcel.',
    icon: MapPinIcon,
    iconBackground: 'bg-white',
  },
  {
    id: 3,
    title: 'Current Planning Developments',
    body1: 'Who is building where? Who is building what?  ',
    body2:
      'Keep track of current planning developments as they happen. Providing you a wealth of knowledge of how municipalities are governing developments and how competitors are navigating the landscape. ',
    icon: GlobeAltIcon,
    iconBackground: 'bg-white',
  },
  {
    id: 4,
    title: 'Demographic & Land-Use Trends',
    body1:
      'Region Intelligence’s analytics gives you an added bonus of leveraging demographic trends in favorite areas.  ',
    body2:
      'Be in the know of how the landscape is changing and where the development hot-spots are. ',
    icon: UserGroupIcon,
    iconBackground: 'bg-white',
  },
  {
    id: 5,
    title: 'The Future & Beyond',
    body1:
      "Region Intelligence's prospects are shining, with a steady stream of data enriching our databases every day, ensuring our dedication to delivering a superior user experience remains steadfast.",
    body2:
      'Our ongoing mission is to unveil innovative features that empower you to stay at the forefront of your industry.',
    icon: RocketLaunchIcon,
    iconBackground: 'bg-white',
  },
]
