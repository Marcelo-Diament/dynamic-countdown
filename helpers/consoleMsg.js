const consoleMsg = (msg, type = 'info') => {
  const msgColors = {
    info: ['#1ae', '#88d5f7'],
    success: ['#1ea', '#88f7d5'],
    warning: ['#ea1', '#f7d588'],
    error: ['#e1a', '#f788d5']
  }
  if (!msg) {
    return console.log(`\n%c %c${msg}`, `background-color:${msgColors['warning'][0]};padding:8px 1px;`, `background-color:${msgColors['warning'][1]};color:#111;display:block;font-size:12px;font-weight:bold;padding:8px;`)
  }
  return console.log(`\n%c %c${msg}`, `background-color:${msgColors[type][0]};padding:8px 1px;`, `background-color:${msgColors[type][1]};color:#111;display:block;font-size:12px;font-weight:bold;padding:8px;`)
}

export default consoleMsg