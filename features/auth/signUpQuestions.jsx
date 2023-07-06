import { useState } from 'react'

export default function SignUpQuestions({
  onIndustryRoleChange,
  onYearsOfExperienceChange,
  onPrimaryPurposeChange,
  onChallengesOvercomeChange,
  onOtherToolsChange,
  onIdealToolChange,
  onCityChange,
  onFoundUsChange,
  onCommunicationMethodChange,
}) {
  const [industryRole, setIndustryRole] = useState('')
  const [primaryPurpose, setPrimaryPurpose] = useState('')
  const [toggleIndustryRoleOther, setToggleIndustryRoleOther] = useState(false)
  const [togglePrimaryPurposeOther, setTogglePrimaryPurposeOther] =
    useState(false)

  function handleIndustryRoleChange(event) {
    const value = event.target.value
    if (value === 'Other') {
      setToggleIndustryRoleOther(true)
      onIndustryRoleChange(industryRole)
    } else {
      setIndustryRole('')
      setToggleIndustryRoleOther(false)
      onIndustryRoleChange(value)
    }
  }

  function handleYearsOfExperienceChange(event) {
    const value = event.target.value
    onYearsOfExperienceChange(value)
  }

  function handlePrimaryPurposeChange(event) {
    const value = event.target.value
    if (value === 'Other') {
      setTogglePrimaryPurposeOther(true)
      onPrimaryPurposeChange(primaryPurpose)
    } else {
      setPrimaryPurpose('')
      setTogglePrimaryPurposeOther(false)
      onPrimaryPurposeChange(value)
    }
  }

  return (
    <div className='pt-4'>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Additional Information
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Please answer these questions so that we can get to know you better.
          </p>
          {/* industry role select menu */}
          <div className='mt-10 '>
            <div>
              <label
                htmlFor='industry'
                className='block text-sm font-medium leading-6 text-gray-900'>
                What is your role in the real estate industry? (Required)
              </label>
              <select
                id='industry'
                name='industry'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6'
                onChange={handleIndustryRoleChange}
                required>
                {industryRoleOptions.map((industry, industryIdx) => (
                  <option key={industryIdx} value={industry.name}>
                    {industry.name}
                  </option>
                ))}
              </select>
              {toggleIndustryRoleOther && (
                <div className='mt-4'>
                  <label
                    htmlFor='industry-role-other'
                    name='industry-role-other'
                    className='block text-sm font-medium leading-6 text-gray-900'>
                    Other: please enter your role in the real estate industry.
                  </label>
                  <div className='mt-2 flex items-center gap-x-3'>
                    <input
                      name='industry-role-other'
                      type='text'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                      onChange={(e) => onIndustryRoleChange(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
            {/* years of experience radio group */}
            <div className='my-8'>
              <label
                htmlFor='experience'
                className='block text-sm font-medium leading-6 text-gray-900'>
                How many years of experience do you have in the real estate
                industry? (Required)
              </label>
              <select
                id='experience'
                name='experience'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6'
                onChange={handleYearsOfExperienceChange}
                required>
                {yearsExpOptions.map((experience, experienceIdx) => (
                  <option key={experienceIdx} value={experience.name}>
                    {experience.name}
                  </option>
                ))}
              </select>
            </div>
            {/* primary purpose radio group */}
            <div className='my-8'>
              <label
                htmlFor='purpose'
                className='block text-sm font-medium leading-6 text-gray-900'>
                What is your primary purpose you will be using our tool for?
                (Required)
              </label>
              <select
                id='purpose'
                name='purpose'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6'
                onChange={handlePrimaryPurposeChange}
                required>
                {mainPurposeOptions.map((purpose, purposeIdx) => (
                  <option key={purposeIdx} value={purpose.name}>
                    {purpose.name}
                  </option>
                ))}
              </select>
              {togglePrimaryPurposeOther && (
                <div className='mt-4'>
                  <label
                    htmlFor='primary-purpose-other'
                    name='primary-purpose-other'
                    className='block text-sm font-medium leading-6 text-gray-900'>
                    Other: please enter your primary purpose for using our tool.
                  </label>
                  <div className='mt-2 flex items-center gap-x-3'>
                    <input
                      name='primary-purpose-other'
                      type='text'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                      onChange={(e) => onPrimaryPurposeChange(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
            {/* challenges looking to overcome textarea */}
            <div className='w-full my-4'>
              <label
                htmlFor='challenges'
                className='block text-sm font-medium leading-6 text-gray-900'>
                What challenges are you hoping to overcome by using our tool?
                (Optional)
              </label>
              <div className='mt-2 flex items-center gap-x-3'>
                <textarea
                  id='challenges'
                  name='challenges'
                  onChange={(e) => onChallengesOvercomeChange(e.target.value)}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
            </div>
            {/* other tools textarea */}
            <div className='w-full my-4'>
              <label
                htmlFor='challenges'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Do you use any other real estate tools, platforms, or software?
                If so, which ones? (Optional)
              </label>
              <div className='mt-2 flex items-center gap-x-3'>
                <textarea
                  id='challenges'
                  name='other tools'
                  onChange={(e) => onOtherToolsChange(e.target.value)}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
            </div>
            {/* ideal tool textarea */}
            <div className='w-full my-4'>
              <label
                htmlFor='challenges'
                className='block text-sm font-medium leading-6 text-gray-900'>
                What would an ideal real estate tool look like for you?
                (Optional)
              </label>
              <div className='mt-2 flex items-center gap-x-3'>
                <textarea
                  id='challenges'
                  name='idea tool'
                  onChange={(e) => onIdealToolChange(e.target.value)}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
            </div>
            {/* city based in input field */}
            <section className='flex flex-col gap-8'>
              <div className='w-full'>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  What city are you based in? (Optional)
                </label>
                <div className='mt-2 flex items-center gap-x-3'>
                  <input
                    id='city'
                    name='city'
                    className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                    defaultValue={''}
                    onChange={(e) => onCityChange(e.target.value)}
                  />
                </div>
              </div>
              {/* how user found us input field */}
              <div className=''>
                <label
                  htmlFor='find-out'
                  name='foundUs'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  How did you find out about us? (Optional)
                </label>
                <div className='mt-2 flex items-center gap-x-3'>
                  <input
                    name='find-out'
                    type='text'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                    onChange={(e) => onFoundUsChange(e.target.value)}
                  />
                </div>
              </div>
              {/* communication method select field */}
              <div className='col-span-full'>
                <label
                  htmlFor='cover-photo'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Preferred method of communication (Optional)
                </label>
                <div className=' flex justify-center rounded-lg '>
                  <select
                    id='location'
                    name='location'
                    defaultChecked={'Please select'}
                    className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6'
                    onChange={(e) =>
                      onCommunicationMethodChange(e.target.value)
                    }>
                    <option>Please select</option>
                    <option>Phone Call</option>
                    <option>Text message</option>
                    <option>Email</option>
                  </select>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

const industryRoleOptions = [
  { id: 0, name: 'Please select' },
  { id: 1, name: 'Real Estate Agent' },
  { id: 2, name: 'Broker' },
  { id: 3, name: 'Property Manger' },
  { id: 4, name: 'Property Developer' },
  { id: 5, name: 'Other' },
]

const mainPurposeOptions = [
  { id: 0, name: 'Please select' },
  { id: 1, name: 'Parcel information / Property research' },
  { id: 2, name: 'City planning listings' },
  { id: 3, name: 'Market trends analysis' },
  { id: 4, name: 'Other' },
]

const yearsExpOptions = [
  { id: 0, name: 'Please select' },
  { id: 1, name: 'Less than 1 year' },
  { id: 2, name: '1-3 years' },
  { id: 3, name: '4-6 years' },
  { id: 4, name: '7-10 years' },
  { id: 5, name: 'More than 10 years' },
]
