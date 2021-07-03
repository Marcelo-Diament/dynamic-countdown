import { fillWithZero, consoleMsg } from '../helpers/index.js'

const render = (counterContainer, remainingTime, timeFormat = 'HMS', minDigits = 2) => {
  if (counterContainer.children) {
    if (!remainingTime) {
      consoleMsg('Ops... houve algum problema com o cálculo do tempo restante...', 'error')
      return
    }
    for (let counterItem of counterContainer.children) {
      if (timeFormat.search('D') >= 0 && counterItem.dataset.unit === 'days')
        counterItem.innerText = fillWithZero(remainingTime.days, minDigits)
      if (timeFormat.search('H') >= 0 && counterItem.dataset.unit === 'hours')
        counterItem.innerText = fillWithZero(remainingTime.hours, minDigits)
      if (timeFormat.search('M') >= 0 && counterItem.dataset.unit === 'minutes')
        counterItem.innerText = fillWithZero(remainingTime.minutes, minDigits)
      if (timeFormat.search('S') >= 0 && counterItem.dataset.unit === 'seconds')
        counterItem.innerText = fillWithZero(remainingTime.seconds, minDigits)
    }
  } else {
    consoleMsg('Não encontramos elementos dentro do container com a classe counter', 'warning')
  }
  return
}

export default render