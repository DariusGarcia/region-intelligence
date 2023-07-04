import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { HiOutlinePlus } from 'react-icons/hi'

export default function Faq() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'What is the planning map and what is its purpose? ',
      answer:
        'Our tool is a comprehensive real estate platform specifically designed for real estate professionals in Southern California. It provides exclusive access to current planning developments, parcel-specific zoning information, and landmark locations, thereby equipping professionals with vital insights into the local real estate market. Giving professionals the opportunity to save time in their due diligence process. ',
    },
    {
      id: 2,
      question: 'How do I create an account? ',
      answer:
        "To create an account, navigate to our homepage and click on 'Get Started'. From that point on, pick a subscription tier that best suits your interest, and it will forward you to an account creation page. You will be asked for some background information regarding your role in the real-estate industry, we ask that you fill this out as it will help us improve our platform. Lastly, finish the sign-up process and you will receive a confirmation email. Click that email and you will get access to our beta version of the platform.",
    },
    {
      id: 3,
      question: 'I forgot my password, how do I reset it? ',
      answer:
        'If you\'ve forgotten your password, click on the "Forgot password?" link on the login page. You will be asked to enter the email address associated with your account. Once you do, an email will be sent with instructions on how to reset your password.',
    },
    {
      id: 4,
      question: 'How can I update my personal information? ',
      answer:
        'After logging in, navigate to "Profile" on the dashboard. From there, you can update your personal information, such as your name, email address, and professional details.',
    },
    {
      id: 5,
      question: 'Where can I find a user manual or guide?',
      answer:
        'Our user manual can be found in the "Help" or "Support" section of our website. it contains a detailed guide on how to use the platform and its various features.',
    },
    {
      id: 6,
      question: 'How can I contact customer support?',
      answer:
        'You can reach out to our customer support team through the "Company" tab under \'Contact Us\'. Another way is to click on the support button at the bottom of the page. We aim to respond to all queries within 24 hours.',
    },
    {
      id: 7,
      question: 'Is my personal information secure?',
      answer:
        'We take user privacy and data security very seriously. Your personal information is stored securely and is only used for the purposes outlined in our privacy policy.',
    },
    {
      id: 8,
      question: 'How often is the data in the app updated?',
      answer:
        'Our database is updated regularly to ensure that you have the most accurate and current information. Specific features like planning, developments, parcel information, and landmark locations are updated as we receive new data from municipal cities across Southern California.',
    },
    {
      id: 9,
      question: 'What is the cost of using the mapping tool? ',
      answer:
        'As our pricing model has not been solid, we are granting users free access to our platform in exchange for their time and feedback. The current tools available are in beta and need to be refined. Therefore, enjoy free access!',
    },
    {
      id: 10,
      question: "What does 'undisclosed' mean in the data?",
      answer:
        "The reasoning behind outlining 'undisclosed' is that the city has not provided us with this information yet. We are working hard in fixing this, as it is a concern to us as much as it is to you.",
    },
    {
      id: 11,
      question: 'How do I report a bug?',
      answer:
        'Please use our "Contact Us" tab under the "Company" link located on the home page. Another way is to click \'support\' located at the bottom of the page.',
    },
    {
      id: 12,
      question: 'Does the platform offer a mobile or desktop version? ',
      answer:
        'Yes! Our platform is accessible on any device layout, ensuring access to important information wherever you are.',
    },
  ])

  const toggleFaq = (id) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) => {
        if (faq.id === id) {
          return {
            ...faq,
            toggle: !faq.toggle,
          }
        }
        return faq
      })
    )
  }

  return (
    <div className='mx-auto mt-24 max-w-7xl divide-y  divide-gray-900/10 px-6 lg:px-8'>
      <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
        Frequently asked questions
      </h2>
      <dl className=' mt-10 space-y-8 divide-y divide-gray-900/10 cursor-pointer'>
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className='w-full py-8 px-2 rounded-md flex flex-col md:grid md:grid-cols-3 justify-between items-start lg:gap-8 hover:bg-stone-50'
            onClick={() => toggleFaq(faq.id)}>
            <div className='md:hidden flex flex-row justify-between w-full'>
              <dt className='w-56 md:w-full text-base font-semibold leading-7 text-gray-900 '>
                {faq.question}
              </dt>
              <button className='w-min h-min flex justify-end text-4xl hover:text-gray-500 transition ease-out'>
                {faq.toggle ? (
                  <IoMdClose size={30} />
                ) : (
                  <HiOutlinePlus size={30} />
                )}
              </button>
            </div>
            <div className='hidden md:grid md:col-span-1  justify-between w-full'>
              <dt className='w-56 md:w-full text-base font-semibold leading-7 text-gray-900 '>
                {faq.question}
              </dt>
            </div>
            <dd className='mt-4 lg:mt-0 flex flex-row md:grid md:col-span-2  w-full justify-end items-start'>
              <div className='flex flex-row'>
                {faq.toggle && (
                  <p className='text-base md:w-full leading-7 text-gray-600 mr-4'>
                    {faq.answer}
                  </p>
                )}
                <button className='hidden w-min h-min md:grid md:row-span-2 justify-end text-4xl hover:text-gray-500 transition ease-out'>
                  {faq.toggle ? (
                    <IoMdClose size={30} />
                  ) : (
                    <HiOutlinePlus size={30} />
                  )}
                </button>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

// const faqs = [
//   {
//     id: 1,
//     question: 'What is the planning map and what is its purpose? ',
//     answer:
//       'Our tool is a comprehensive real estate platform specifically designed for real estate professionals in Southern California. It provides exclusive access to current planning developments, parcel-specific zoning information, and landmark locations, thereby equipping professionals with vital insights into the local real estate market. Giving professionals the opportunity to save time in their due diligence process. ',
//   },
//   {
//     id: 2,
//     question: 'How do I create an account? ',
//     answer:
//       "To create an account, navigate to our homepage and click on 'Get Started'. From that point on, pick a subscription tier that best suits your interest, and it will forward you to an account creation page. You will be asked for some background information regarding your role in the real-estate industry, we ask that you fill this out as it will help us improve our platform. Lastly, finish the sign-up process and you will receive a confirmation email. Click that email and you will get access to our beta version of the platform.",
//   },
//   {
//     id: 3,
//     question: 'I forgot my password, how do I reset it? ',
//     answer:
//       'If you\'ve forgotten your password, click on the "Forgot password?" link on the login page. You will be asked to enter the email address associated with your account. Once you do, an email will be sent with instructions on how to reset your password.',
//   },
//   {
//     id: 4,
//     question: 'How can I update my personal information? ',
//     answer:
//       'After logging in, navigate to "Profile" on the dashboard. From there, you can update your personal information, such as your name, email address, and professional details.',
//   },
//   {
//     id: 5,
//     question: 'Where can I find a user manual or guide?',
//     answer:
//       'Our user manual can be found in the "Help" or "Support" section of our website. it contains a detailed guide on how to use the platform and its various features.',
//   },
//   {
//     id: 6,
//     question: 'How can I contact customer support?',
//     answer:
//       'You can reach out to our customer support team through the "Company" tab under \'Contact Us\'. Another way is to click on the support button at the bottom of the page. We aim to respond to all queries within 24 hours.',
//   },
//   {
//     id: 7,
//     question: 'Is my personal information secure?',
//     answer:
//       'We take user privacy and data security very seriously. Your personal information is stored securely and is only used for the purposes outlined in our privacy policy.',
//   },
//   {
//     id: 8,
//     question: 'How often is the data in the app updated?',
//     answer:
//       'Our database is updated regularly to ensure that you have the most accurate and current information. Specific features like planning, developments, parcel information, and landmark locations are updated as we receive new data from municipal cities across Southern California.',
//   },
//   {
//     id: 9,
//     question: 'What is the cost of using the mapping tool? ',
//     answer:
//       'As our pricing model has not been solid, we are granting users free access to our platform in exchange for their time and feedback. The current tools available are in beta and need to be refined. Therefore, enjoy free access!',
//   },
//   {
//     id: 10,
//     question: "What does 'undisclosed' mean in the data?",
//     answer:
//       "The reasoning behind outlining 'undisclosed' is that the city has not provided us with this information yet. We are working hard in fixing this, as it is a concern to us as much as it is to you.",
//   },
//   {
//     id: 11,
//     question: 'How do I report a bug?',
//     answer:
//       'Please use our "Contact Us" tab under the "Company" link located on the home page. Another way is to click \'support\' located at the bottom of the page.',
//   },
//   {
//     id: 12,
//     question: 'Does the platform offer a mobile or desktop version? ',
//     answer:
//       'Yes! Our platform is accessible on any device layout, ensuring access to important information wherever you are.',
//   },
// ]
