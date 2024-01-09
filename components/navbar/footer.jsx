import Link from 'next/link'

export default function Footer() {
  return (
    <div className='mx-auto  max-w-7xl px-6 lg:px-8 '>
      <footer
        aria-labelledby='footer-heading'
        className='relative border-t border-gray-900/10 py-24  sm:py-32'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <Link
            href='/'
            className='h-7 text-xl font-bold hover:underline leading-6 text-blue-600 hover:text-blue-500 transition ease-out'
            alt='Company name'>
            Region Intelligence{' '}
            <span className='inline-flex ml-2 items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700'>
              Beta
            </span>
          </Link>

          <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                  Products
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {footerNavigation.projects.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm leading-6 hover:underline text-gray-600 hover:text-gray-900'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                  Support
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm leading-6 hover:underline text-gray-600 hover:text-gray-900'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                  Company
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm hover:underline leading-6 text-gray-600 hover:text-gray-900'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                  Legal
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm hover:underline leading-6 text-gray-600 hover:text-gray-900'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const footerNavigation = {
  projects: [
    { name: 'Map View', href: '/current-planning-developments/map-view' },
    { name: 'Land Directory', href: '/current-planning-developments' },
    { name: 'Demo', href: '/demo' },
    { name: 'My Profile', href: '/profile' },
    // { name: 'CEQA Map', href: '/ceqa' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Pricing', href: '/pricing' },
  ],

  company: [
    { name: 'About us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/company/faq' },
  ],
  legal: [
    // { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '/company/privacy' },
    { name: 'Terms', href: '/company/terms-and-conditions' },
  ],
}
