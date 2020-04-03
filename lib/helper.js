const execa = require('execa')
const path = require('path')

const preset = path.resolve(__dirname, '../preset')

const commandGet = (projectName) => {
  const command = `vue create ${projectName} --preset ${preset}`
  execa.command(command, {
    stdio: 'inherit'
  })
}

const commandVueCLI = () => {
  const command = process.argv.slice(2)
  command.unshift('vue')
  execa.command(command.join(' '), {
    stdio:'inherit'
  })
}

module.exports = {
  commandGet,
  commandVueCLI
}
