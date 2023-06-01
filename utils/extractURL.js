export default function extractURL(str) {
  const regex = /['"](https?:\/\/[^\s]+?)['"]/
  const match = str.match(regex)

  if (match) {
    return match[1]
  }

  return ''
}
