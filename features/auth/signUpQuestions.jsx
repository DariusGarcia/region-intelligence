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
            Tell Us About Yourself
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Please answer these questions so that we can get to know you better.
          </p>
          {/* industry role select menu */}
          <div className='mt-10'>
            {/* Name of company */}
            <div className='my-8'>
              <label
                htmlFor='companyName'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Company Name
              </label>
              <input
                id='companyName'
                name='companyName'
                type='text'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6'
                onChange={handleYearsOfExperienceChange}
                required
              />
            </div>
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
            {/* Phone Number input field */}
            <div className='my-8'>
              <label
                htmlFor='experience'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Phone Number
              </label>
              <input
                id='experience'
                name='experience'
                type='tel'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6'
                onChange={handleYearsOfExperienceChange}
                required
              />
            </div>
            {/* Size of organization radio group */}
            <div className='my-8'>
              <label
                htmlFor='purpose'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Size of the organization (Required)
              </label>
              <select
                id='purpose'
                name='purpose'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6'
                onChange={handlePrimaryPurposeChange}
                required>
                {organizationSize.map((purpose, purposeIdx) => (
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
            {/* Average number of projects radio group */}
            <div className='my-8'>
              <label
                htmlFor='purpose'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Average number of projects at any given time (Required)
              </label>
              <select
                id='purpose'
                name='purpose'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6'
                onChange={handlePrimaryPurposeChange}
                required>
                {numberOfProjects.map((purpose, purposeIdx) => (
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
          </div>
        </div>
      </div>
    </div>
  )
}

const industryRoleOptions = [
  { id: 0, name: 'Please select' },
  { id: 1, name: 'Developer' },
  { id: 2, name: 'Contractor' },
  { id: 3, name: 'Agent' },
  { id: 4, name: 'Planner' },
  { id: 5, name: 'Architect' },
  { id: 6, name: 'Other' },
]

const mainPurposeOptions = [
  { id: 0, name: 'Please select' },
  { id: 1, name: 'Environmental Compliance and Risk Assessment' },
  { id: 2, name: 'Compliance Monitoring and Governance' },
  { id: 3, name: 'Real Estate Portfolio Management' },
  { id: 4, name: 'Market trends analysis' },
  { id: 5, name: 'Other' },
]

const organizationSize = [
  { id: 0, name: 'Please select' },
  { id: 1, name: '1-10' },
  { id: 2, name: '11-50' },
  { id: 3, name: '51-100' },
  { id: 4, name: '101+' },
  { id: 5, name: 'Other' },
]

const numberOfProjects = [
  { id: 0, name: 'Please select' },
  { id: 1, name: '1-2' },
  { id: 2, name: '3-8' },
  { id: 3, name: '9-20' },
  { id: 4, name: '20+' },
  { id: 5, name: 'Other' },
]
