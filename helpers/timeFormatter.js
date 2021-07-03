import { fillWithZero, consoleMsg } from './index.js'

const timeFormatter = (dateDiff, format = 'HMS', minDigits = 2) => {
  if (!dateDiff) {
    return consoleMsg('Ops... houve um erro no cálculo do tempo restante...', 'error')
  }
  switch (format) {
    case 'DHMS':
    case 'DHM':
    case 'DH':
    case 'D':
      return ({
        days: fillWithZero(Math.floor(dateDiff / 86400).toString(), minDigits),
        hours: fillWithZero(Math.floor((dateDiff % 86400) / 3600).toString(), minDigits),
        minutes: fillWithZero(Math.floor((dateDiff % 3600) / 60).toString(), minDigits),
        seconds: fillWithZero(Math.floor(dateDiff % 60).toString(), minDigits)
      })
    case 'HMS':
    case 'HM':
    case 'H':
      return ({
        hours: fillWithZero(Math.floor(dateDiff / 3600).toString(), minDigits),
        minutes: fillWithZero(Math.floor((dateDiff % 3600) / 60).toString(), minDigits),
        seconds: fillWithZero(Math.floor(dateDiff % 60).toString(), minDigits)
      })
    case 'MS':
    case 'M':
      return ({
        minutes: fillWithZero(Math.floor(dateDiff / 60).toString(), minDigits),
        seconds: fillWithZero(Math.floor(dateDiff % 60).toString(), minDigits)
      })
    case 'S':
      return ({
        seconds: fillWithZero(Math.floor(dateDiff).toString(), minDigits)
      })
    default:
      return ({
        days: fillWithZero(Math.floor(dateDiff / 86400).toString(), minDigits),
        hours: fillWithZero(Math.floor((dateDiff % 86400) / 3600).toString(), minDigits),
        minutes: fillWithZero(Math.floor((dateDiff % 3600) / 60).toString(), minDigits),
        seconds: fillWithZero(Math.floor(dateDiff % 60).toString(), minDigits)
      })
  }
}

export default timeFormatter