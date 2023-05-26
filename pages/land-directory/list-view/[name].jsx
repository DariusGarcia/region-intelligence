import React from 'react'
import image from '../../../public/home.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function ListViewPage() {
  return (
    <div className='flex justify-center mt-12 px-4'>
      <div className='max-w-7xl'>
        {permitData.map((item) => (
          <section className='flex flex-col justify-center  w-full gap-4'>
            <h1 className='text-3xl font-medium mb-4'>{item.listingNames}</h1>
            <Image
              src={image}
              width={500}
              height={500}
              className='rounded-sm shadow-lg'
            />
            <p className='italic'>{item.lastProjectUpdate}</p>
            <p className='text-xl font-medium'>
              Project address: {item.location}
            </p>
            <p className='text-lg'>
              <span className='font-medium'> Project manager: </span>
              {item.projectManager}
            </p>
            <p className='text-lg'>
              <span className='font-medium'> Phone: </span>
              {item.phoneNumber}
            </p>
            <p className='text-lg'>
              <span className='font-medium'> Email: </span>
              {item.email}
            </p>
            <ul className='text-lg'>
              <span className='font-medium'> Project Description: </span>
              <li className='list-disc ml-8 max-w-lg text-left'>
                {item.description}
              </li>
            </ul>
            <p className='text-lg'>
              <span className='font-medium'> Project Status: </span>
              {item.status}
            </p>
          </section>
        ))}
        <div className='mt-24 flex justify-center'>
          <Link
            href='/land-directory'
            className='bg-blue-600 hover:bg-blue-500 transition ease-out text-white p-2 rounded-md'
          >
            Back to major planning projects
          </Link>
        </div>
      </div>
    </div>
  )
}

const permitData = [
  {
    status: 'In Process',
    projectManager: 'Jerry C. Guevara',
    email: 'JerryG@gmail.com',
    phoneNumber: '(562)-392-2342',
    lastProjectUpdate: 'Updated: March 22, 2023',
    listingNames: '1st and Harbor mix-use development',
    location: '101 N Harbor Boulevard',
    lotSize: '5,500sq',
    description:
      'Applicant is proposing to construct a 10-story mixed-use development consisting of 15, 182-square feet of leasable commercial space, 183 residential units (of which 28 units will be affordable units), 13, 217-square feet of open space, and 341 onsite parking spaces. As proposed, the project requires approval of a Site Plan Review (SPR) by the Planning Commission.',
  },
]
