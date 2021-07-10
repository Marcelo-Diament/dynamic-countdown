import { consoleMsg } from './helpers/index.js'
import preset from './inc/preset.js'
import mountCounter from './inc/mountCounter.js'

const counter = () => {
  const countersElements = document.querySelectorAll('.counter')
  if (countersElements.length) {
    for (let counterElement of countersElements) {
      const minDigits = counterElement.dataset.minDigits || '2'
      preset(counterElement, minDigits)
    }
  } else {
    return consoleMsg('Por favor, declare ao menos uma tag HTML com a classe counter.', 'error')
  }
}

const countdown = { counter, mountCounter }

export default countdown
export { counter, mountCounter }
module.exports = countdown