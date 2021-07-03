import { consoleMsg } from './index.js'

const fillWithZero = (value, desiredLength = 2) => {
  if (!value) {
    consoleMsg('Ops... não identificamos o tempo restante atual', 'error')
  }
  const currentLength = value.length
  return currentLength < desiredLength
    ? '0'.repeat(desiredLength - currentLength) + value
    : value
}

export default fillWithZero