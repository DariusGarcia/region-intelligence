export default function extractPhoneNumber(str) {
  const phoneNumberRegex = /\d{3}-\d{3}-\d{4}/
  const matches = str.match(phoneNumberRegex)
  if (matches && matches.length > 0) {
    return matches[0]
  }
  return null
}
