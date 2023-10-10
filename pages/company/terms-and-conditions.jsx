import React from 'react'

const TermsAndConditions = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center my-12 px-4 md:mx-4'>
      <div className='max-w-7xl'>
        <h1 className='text-2xl font-bold'>Terms and Conditions</h1>
        <section className='flex flex-col gap-4 mt-8 '>
          {terms.map((term) => (
            <div key={term.id}>
              <h2 className='font-medium text-lg'>{term.title}</h2>
              <p className='pl-6'>{term.text}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default TermsAndConditions

const terms = [
  {
    id: 1,
    title: '1. Introduction',
    text: 'These terms and conditions govern your use of Region Intelligence website and any related services provided by Region Intelligence. By accessing or using the website, you agree to comply with these terms and conditions.',
  },
  {
    id: 2,
    title: '2. Intellectual Property Rights ',
    text: 'All content on this website, including text, graphics, logos, images, and software, is the property of Region Intelligence and is protected by intellectual property laws. You may not reproduce, distribute, modify, or republish any content from this website without prior written consent from Region Intelligence.',
  },
  {
    id: 3,
    title: '3. User Obligations',
    text: 'You must provide accurate and complete information when using this website. You must not engage in any activity that may interfere with or disrupt the functioning of the website. - You must not attempt to gain unauthorized access to any part of the website or any user accounts.',
  },
  {
    id: 4,
    title: '4. Third-Party Links',
    text: 'This website may contain links to third-party websites that are not owned or controlled by Region Intelligence. We are not responsible for the content or privacy practices of these third-party websites. Your use of such websites is at your own risk.',
  },
  {
    id: 5,
    title: '5. Disclaimer of Liability',
    text: 'The information provided on this website is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the accuracy, completeness, reliability, or suitability of the information contained on the website. - In no event shall Region Intelligence be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use of this website.',
  },
  {
    id: 6,
    title: '6. Privacy',
    text: 'Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal information.',
  },
  {
    id: 7,
    title: '7. Modifications',
    text: 'Region Intelligence reserves the right to modify or replace these terms and conditions at any time. It is your responsibility to check this page periodically for any changes. Your continued use of the website after the modifications will constitute your acknowledgment and acceptance of the modified terms and conditions.',
  },
  {
    id: 8,
    title: '8. Governing Law',
    text: 'These terms and conditions shall be governed by and construed in accordance with the laws of California. Any disputes arising under or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction]. If you have any questions or concerns about these terms and conditions, please contact us at [Contact Email].',
  },
]
