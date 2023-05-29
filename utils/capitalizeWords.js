export default function capitalizeWords(str) {
  // Split the string into an array of words
  const words = str.toLowerCase().split(' ')

  // Capitalize the first letter of each word
  const capitalizedWords = words.map((word) => {
    // Capitalize the first letter and keep the rest of the word unchanged
    return word.charAt(0).toUpperCase() + word.slice(1)
  })

  // Join the capitalized words back into a string
  const capitalizedString = capitalizedWords.join(' ')

  return capitalizedString
}
