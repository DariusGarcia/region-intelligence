export default function YearsExpRadioGroup({ onInputChange }) {
  function handleChange(event) {
    const value = event.target.value
    onInputChange(value)
  }

  return (
    <fieldset>
      <legend className='text-base font-semibold text-gray-900'>
        How many years of experience do you have in the real estate industry?
      </legend>
      <div className='mt-4 divide-y divide-gray-200 border-b border-t border-gray-200'>
        {sides.map((side, sideIdx) => (
          <div key={sideIdx} className='relative flex items-start py-4'>
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
  )
}

const sides = [
  { id: 1, name: 'Less than 1 year' },
  { id: 2, name: '1-3 years' },
  { id: 3, name: '4-6 years' },
  { id: 4, name: '7-10 years' },
  { id: 5, name: 'More than 10 years' },
]
