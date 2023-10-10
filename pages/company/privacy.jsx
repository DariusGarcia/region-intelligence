import React from 'react'

const PrivacyPage = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center my-12 px-4 md:mx-4'>
      <div className='max-w-7xl'>
        <h1 className='text-2xl font-bold mb-4'>Privacy Policy</h1>
        <p>
          This Privacy Policy describes how Region Intelligence collects, uses,
          and protects the personal information you provide on our website. By
          accessing or using the website, you consent to the data practices
          described in this policy.
        </p>
        <section className='flex flex-col gap-4 mt-8 '>
          {terms.map((term) => (
            <div key={term.id}>
              <h2 className='font-medium text-lg'>{term.title}</h2>
              <p className='pl-6'>{term.text}</p>
              {term?.subText && (
                <ul className='list-disc pl-8'>
                  {term.subText.map((sub) => (
                    <li key={sub} className='ml-6'>
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default PrivacyPage

const terms = [
  {
    id: 1,
    title: '1. Information Collection',
    text: 'We may collect the following types of personal information when you interact with our website:',
    subText: [
      'Name',
      'Email address',
      'Phone number',
      'Mailing address',
      'Cookies',
      'Usage data',
    ],
  },
  {
    id: 2,
    title: '2. Information Usage',
    text: 'We use the collected personal information for the following purposes:',
    subText: [
      'To provide and maintain our services',
      'To personalize your experience on our website',
      'To communicate with you, respond to inquiries, and provide customer support',
      'To send you marketing and promotional materials (with your consent)',
      'To improve our website and services',
      'To enforce our terms and conditions and protect against fraudulent or illegal activities',
    ],
  },
  {
    id: 3,
    title: '3. Information Sharing',
    text: 'We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:',
    subText: [
      'With our subsidiaries and affiliates who provide services on our behalf',
      'With your consent or as required by law',
    ],
  },
  {
    id: 4,
    title: '4. Data Security',
    text: 'We take reasonable measures to protect the security of your personal information. However, please note that no method of transmission or storage is completely secure. We cannot guarantee the absolute security of your data.',
  },
  {
    id: 5,
    title: '5. Cookies',
    text: 'Our website may use cookies and similar tracking technologies to enhance your browsing experience. You have the option to accept or reject cookies through your web browser settings. Please note that blocking cookies may affect the functionality of our website.',
  },
  {
    id: 6,
    title: '6. Links to Third-Party Websites',
    text: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of those third-party websites.',
  },
  {
    id: 7,
    title: "7. Children's Privacy",
    text: 'Our website is not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will delete the information.',
  },
  {
    id: 8,
    title: '8. Changes to this Privacy Policy',
    text: 'We reserve the right to update or modify this Privacy Policy at any time. The updated version will be posted on our website with a revised "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.',
  },
  {
    id: 9,
    title: '9. Contact Information',
    text: 'If you have any questions or concerns about this Privacy Policy or the handling of your personal information, please contact us at [Contact Email].',
  },
]
