const createCounterUnit = unit => {
  const counterUnit = document.createElement('span')
  counterUnit.setAttribute('class', 'counter__unit')
  switch (unit) {
    case 'D':
      counterUnit.setAttribute('data-unit', 'days')
      break
    case 'H':
      counterUnit.setAttribute('data-unit', 'hours')
      break
    case 'M':
      counterUnit.setAttribute('data-unit', 'minutes')
      break
    case 'S':
      counterUnit.setAttribute('data-unit', 'seconds')
      break
    default:
      console.log('Unit must be H, D, M or S')
      break
  }
  return counterUnit
}

const mountCounter = (targetDate, timeFormat = 'DHMS', minDigits = '2', lang = 'pt', theme = '') => {
  const counterContainer = document.createElement('div')
  theme == ''
    ? counterContainer.setAttribute('class', 'counter')
    : counterContainer.setAttribute('class', `counter counter--${theme}`)
  counterContainer.setAttribute('data-target-date', targetDate)
  counterContainer.setAttribute('data-time-format', timeFormat)
  counterContainer.setAttribute('data-min-digits', minDigits)
  counterContainer.setAttribute('data-lang', lang)
  for (let unit of timeFormat) {
    const counterUnit = createCounterUnit(unit)
    counterContainer.appendChild(counterUnit)
  }
  return counterContainer
}

export default mountCounter