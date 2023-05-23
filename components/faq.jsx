import React from 'react'

export default function Faq() {
  return (
    <div className='mx-auto mt-24 max-w-7xl divide-y divide-gray-900/10 px-6  lg:px-8'>
      <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
        Frequently asked questions
      </h2>
      <dl className='mt-10 space-y-8 divide-y divide-gray-900/10'>
        {faqs.map((faq) => (
          <div key={faq.id} className='pt-8 lg:grid lg:grid-cols-12 lg:gap-8'>
            <dt className='text-base font-semibold leading-7 text-gray-900 lg:col-span-5'>
              {faq.question}
            </dt>
            <dd className='mt-4 lg:col-span-7 lg:mt-0'>
              <p className='text-base leading-7 text-gray-600'>{faq.answer}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

const faqs = [
  {
    id: 1,
    question: 'How do the reoccuring payments work?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum quos odit doloribus.',
  },
  {
    id: 2,
    question: 'How do the reoccuring payments work?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum quos odit doloribus.',
  },
  {
    id: 3,
    question: 'How do the reoccuring payments work?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum quos odit doloribus.',
  },
  {
    id: 4,
    question: 'How do the reoccuring payments work?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum quos odit doloribus.',
  },
  {
    id: 5,
    question: 'How do the reoccuring payments work?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum quos odit doloribus.',
  },
]
