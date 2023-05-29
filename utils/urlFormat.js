export default function addHyphens(str) {
  // Decode the string to handle encoded spaces
  const decodedStr = decodeURIComponent(str)

  // Replace spaces with hyphens
  const hyphenatedStr = decodedStr.replace(/ /g, '-')

  return hyphenatedStr
}
