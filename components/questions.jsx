import PurposeRadioGroup from './radioGroups/purposeRadioGroup'
import YearsExpRadioGroup from '../components/radioGroups/yearsExp'
import RadioGroup from '../components/radioGroups/radioGroup'

export default function Questions({
  onBackgroundChange,
  onIndustryChange,
  onCityChange,
  onFoundUsChange,
  onCommunicationMethodChange,
}) {
  function handleRadioSelection(value) {
    onBackgroundChange(value)
  }

  function handleChange(event) {
    const value = event.target.value
    onInputChange(value)
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

          <div className='mt-10 '>
            <RadioGroup onInputChange={handleRadioSelection} />
            <div className='my-8'>
              <YearsExpRadioGroup />
            </div>
            <div className='my-8'>
              <PurposeRadioGroup />
            </div>
            <div className='my-8'>
              <fieldset>
                <legend className='text-base font-semibold text-gray-900'>
                  What is your primary purpose you will be using our tool for?
                </legend>
                <div className='mt-4 divide-y divide-gray-200 border-b border-t border-gray-200'>
                  {sides.map((side, sideIdx) => (
                    <div
                      key={sideIdx}
                      className='relative flex items-start py-4'>
                      <div className='min-w-0 flex-1 text-sm leading-6'>
                        <label
                          htmlFor={`side-${side.id}`}
                          className='select-none font-medium text-gray-900'>
                          {side.name}
                        </label>
                      </div>
                      <div className='ml-3 flex h-6 items-center'>
                        <input
                          id={`side-${side.id}`}
                          name='plan'
                          type='radio'
                          value={side.name}
                          onChange={handleChange}
                          defaultChecked={side.id === null}
                          className='h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600'
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            <div className='w-full my-4'>
              <label
                htmlFor='challenges'
                className='block text-sm font-medium leading-6 text-gray-900'>
                What challenges are you hoping to overcome by using our tool?
              </label>
              <div className='mt-2 flex items-center gap-x-3'>
                <textarea
                  id='challenges'
                  name='challenges'
                  className='block w-full rounded-md border-0 py-1.5 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
            </div>
            <div className='w-full my-4'>
              <label
                htmlFor='challenges'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Do you use any other real estate tools, platforms, or software?
                If so, which ones?
              </label>
              <div className='mt-2 flex items-center gap-x-3'>
                <textarea
                  id='challenges'
                  name='challenges'
                  className='block w-full rounded-md border-0 py-1.5 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
            </div>
            <div className='w-full my-4'>
              <label
                htmlFor='challenges'
                className='block text-sm font-medium leading-6 text-gray-900'>
                What would an ideal real estate tool look like for you?
              </label>
              <div className='mt-2 flex items-center gap-x-3'>
                <textarea
                  id='challenges'
                  name='challenges'
                  className='block w-full rounded-md border-0 py-1.5 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
            </div>
            <section className='flex flex-col gap-8'>
              <div className='w-full'>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  What city are you based in?
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
              <div className=''>
                <label
                  htmlFor='photo'
                  name='foundUs'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  How did you find out about us?
                </label>
                <div className='mt-2 flex items-center gap-x-3'>
                  <input
                    type='text'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                    onChange={(e) => onFoundUsChange(e.target.value)}
                  />
                </div>
              </div>
              <div className='col-span-full'>
                <label
                  htmlFor='cover-photo'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Preferred method of communication
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

const sides = [
  { id: 1, name: 'Parcel information / Property research' },
  { id: 2, name: 'City planning listings' },
  { id: 3, name: 'Market trends analysis' },
  { id: 4, name: 'Other' },
]
