export default function Questions({
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
  function handleIndustryRoleChange(event) {
    const value = event.target.value
    onIndustryRoleChange(value)
  }
  function handleYearsOfExperienceChange(event) {
    const value = event.target.value
    onYearsOfExperienceChange(value)
  }

  function handlePrimaryPurposeChange(event) {
    const value = event.target.value
    onPrimaryPurposeChange(value)
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
          {/* industry role radio selection */}
          <div className='mt-10 '>
            <fieldset>
              <legend className='text-base font-semibold text-gray-900'>
                What is your role in the real estate industry? (Required)
              </legend>
              <div className='mt-4 divide-y divide-gray-200 border-b border-t border-gray-200'>
                {industryRole.map((industry, industryIdx) => (
                  <div
                    key={industryIdx}
                    className='relative flex items-start py-4'>
                    <div className='min-w-0 flex-1 text-sm leading-6'>
                      <label
                        htmlFor={`industry-${industry.id}`}
                        className='select-none font-medium text-gray-900'>
                        {industry.name}
                      </label>
                    </div>
                    <div className='ml-3 flex h-6 items-center'>
                      <input
                        id={`industry-${industry.id}`}
                        name='industry role'
                        type='radio'
                        required
                        value={industry.name}
                        onChange={handleIndustryRoleChange}
                        defaultChecked={industry.id === null}
                        className='h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
            {/* years of experience radio group */}
            <div className='my-8'>
              <fieldset>
                <legend className='text-base font-semibold text-gray-900'>
                  How many years of experience do you have in the real estate
                  industry? (Required)
                </legend>
                <div className='mt-4 divide-y divide-gray-200 border-b border-t border-gray-200'>
                  {yearsExpOptions.map((experience, experienceIdx) => (
                    <div
                      key={experienceIdx}
                      className='relative flex items-start py-4'>
                      <div className='min-w-0 flex-1 text-sm leading-6'>
                        <label
                          htmlFor={`experience-${experience.id}`}
                          className='select-none font-medium text-gray-900'>
                          {experience.name}
                        </label>
                      </div>
                      <div className='ml-3 flex h-6 items-center'>
                        <input
                          id={`experience-${experience.id}`}
                          name='years of experience'
                          type='radio'
                          required
                          value={experience.name}
                          onChange={handleYearsOfExperienceChange}
                          defaultChecked={experience.id === null}
                          className='h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600'
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            {/* primary purpose radio group */}
            <div className='my-8'>
              <fieldset>
                <legend className='text-base font-semibold text-gray-900'>
                  What is your primary purpose you will be using our tool for?
                  (Required)
                </legend>
                <div className='mt-4 divide-y divide-gray-200 border-b border-t border-gray-200'>
                  {mainPurposeOptions.map((purpose, purposeIdx) => (
                    <div
                      key={purposeIdx}
                      className='relative flex items-start py-4'>
                      <div className='min-w-0 flex-1 text-sm leading-6'>
                        <label
                          htmlFor={`purpose-${purpose.id}`}
                          className='select-none font-medium text-gray-900'>
                          {purpose.name}
                        </label>
                      </div>
                      <div className='ml-3 flex h-6 items-center'>
                        <input
                          id={`purpose-${purpose.id}`}
                          name='primary purpose'
                          type='radio'
                          required
                          value={purpose.name}
                          onChange={handlePrimaryPurposeChange}
                          defaultChecked={purpose.id === null}
                          className='h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600'
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
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
                  className='block w-full rounded-md border-0 py-1.5 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
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
                  className='block w-full rounded-md border-0 py-1.5 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
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
                  className='block w-full rounded-md border-0 py-1.5 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
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
                  What city are you based in? (Required)
                </label>
                <div className='mt-2 flex items-center gap-x-3'>
                  <input
                    id='city'
                    name='city'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                    defaultValue={''}
                    onChange={(e) => onCityChange(e.target.value)}
                  />
                </div>
              </div>
              {/* how user found us input field */}
              <div className=''>
                <label
                  htmlFor='photo'
                  name='foundUs'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  How did you find out about us? (Optional)
                </label>
                <div className='mt-2 flex items-center gap-x-3'>
                  <input
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

const industryRole = [
  { id: 1, name: 'Real Estate Agent' },
  { id: 2, name: 'Broker' },
  { id: 3, name: 'Property Manger' },
  { id: 4, name: 'Property Developer' },
  { id: 5, name: 'Other' },
]

const mainPurposeOptions = [
  { id: 1, name: 'Parcel information / Property research' },
  { id: 2, name: 'City planning listings' },
  { id: 3, name: 'Market trends analysis' },
  { id: 4, name: 'Other' },
]

const yearsExpOptions = [
  { id: 1, name: 'Less than 1 year' },
  { id: 2, name: '1-3 years' },
  { id: 3, name: '4-6 years' },
  { id: 4, name: '7-10 years' },
  { id: 5, name: 'More than 10 years' },
]
