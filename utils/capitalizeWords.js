export default function capitalizeWords(str) {
  if (!str) {
    return '' // Return an empty string if the input is undefined or empty
  }

  // Check if the string is a single word
  if (!str.includes(' ')) {
    // If it is, capitalize the entire word and return it
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  // Split the string into an array of words
  const words = str?.toLowerCase().split(' ')

  // Capitalize the first letter of each word
  const capitalizedWords = words.map((word) => {
    // Capitalize the first letter and keep the rest of the word unchanged
    return word.charAt(0).toUpperCase() + word.slice(1)
  })

  // Join the capitalized words back into a string
  const capitalizedString = capitalizedWords.join(' ')

  return capitalizedString
}
