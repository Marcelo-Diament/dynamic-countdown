import { consoleMsg } from './helpers/index.js'
import { counter } from './counter.js'

const init = () => {
  consoleMsg('Visite https://github.com/Marcelo-Diament/js-countdown-template', 'info')
  counter()
}

window.onload = () => {
  init()
  consoleMsg('Obrigado por usar o js-countdown.', 'success')
}