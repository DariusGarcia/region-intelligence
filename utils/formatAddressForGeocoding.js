export default function formatAddressForGeocoding(address) {
  const formattedAddress = address.replace(/\s+/g, '+')
  return formattedAddress
}
