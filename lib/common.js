const chalk = require('chalk')
const log = console.log

const sayHello = () => {
  log()
  log('😊')
  log('Hello, Welcome to ' + chalk.yellow('papilon') + ', I am the author ' + chalk.yellow('Jarry Chung.'))
  log('More about me: ' + chalk.underline('https://www.jarrychung.com/'))
  log('Hava fun!')
  log('😜')
  log()
}

module.exports = {
  sayHello
}
