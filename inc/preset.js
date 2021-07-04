import { timeFormatter, consoleMsg } from "../helpers/index.js"
import render from "./render.js"

let count

const counterChecker = (counterContainer, targetDate, timeFormat = 'DHMS', minDigits = '2') => {
  if (!targetDate) {
    consoleMsg('Por favor, inclua o atributo \'data-time-target\' (DHMS) em cada counter.', 'error')
    clearInterval(count)
    return
  }
  const timeDiff = (new Date(targetDate) - new Date()) / 1000
  if (timeDiff <= 0) {
    render(counterContainer, timeFormatter(0, timeFormat, minDigits), timeFormat, minDigits)
    clearInterval(count)
    return
  }
  return render(counterContainer, timeFormatter(timeDiff, timeFormat, minDigits), timeFormat)
}

const initCounter = (counterContainer, minDigits = '2') => {
  let { targetDate, timeFormat } = counterContainer.dataset
  if (!timeFormat || timeFormat == '') timeFormat = 'DHMS'
  let timeInterval = 1000
  const minorTimeUnit = timeFormat ? timeFormat[timeFormat.length - 1] : 'S'
  switch (minorTimeUnit) {
    case 'D':
      timeInterval = 1000 * 60 * 60 * 24
      break
    case 'H':
      timeInterval = 1000 * 60 * 60
      break
    case 'M':
      timeInterval = 1000 * 60
      break
    default:
      timeInterval = 1000
  }
  if (counterContainer.children) {
    counterChecker(counterContainer, targetDate, timeFormat, minDigits)
    count = setInterval(() => counterChecker(counterContainer, targetDate, timeFormat, minDigits), timeInterval)
  } else {
    consoleMsg('Não encontramos elementos dentro do container com a classe counter', 'warning')
  }
  return
}

const preset = (counterContainer, minDigits = '2') => {
  if (counterContainer.children && counterContainer.children.length) {
    return initCounter(counterContainer, minDigits)
  } else {
    consoleMsg('Não encontramos elementos dentro do container com a classe counter', 'warning')
  }
}

export default preset