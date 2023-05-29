import excelData from '../data/city_data_set.xlsx'

// Function to convert Excel spreadsheet to JSON object
function excelToJson(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result)
      const workbook = XLSX.read(data, { type: 'array' })
      const worksheet = workbook.Sheets[workbook.SheetNames[0]]
      const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 })

      resolve(json)
    }

    reader.onerror = (e) => {
      reject(e)
    }

    reader.readAsArrayBuffer(file)
  })
}

// Function to write JSON object to file
function saveJSONToFile(json, filename) {
  const data = JSON.stringify(json)
  const blob = new Blob([data], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename

  link.click()

  // Clean up the URL object after the download
  setTimeout(() => {
    URL.revokeObjectURL(url)
  }, 0)
}

// Example usage
const fileInput = document.getElementById('file-input')

fileInput.addEventListener('change', async (event) => {
  const file = event.target.files[0]

  try {
    const json = await excelToJson(file)
    saveJSONToFile(json, 'output.json')
  } catch (error) {
    console.error('Error reading Excel file:', error)
  }
})
