export default function validatePhoneNumber(phoneNumber) {
  return /^\d{10}$/.test(phoneNumber)
}
