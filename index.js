#!/usr/bin/env node

const { program } = require('commander')
const { sayHello } = require('./lib/common.js')
const { commandGet, commandVueCLI } = require('./lib/helper.js')

program
  .usage('<command> [options]')
  .description('A powerful and awesome Vue CLI')
  .version(require('./package.json').version)

program
  .command('new <project-name>')
  .description('use powerful papilon to create your Vue application')
  .action(commandGet)

program
  .command('hi')
  .description('show what I want to say to you')
  .action(sayHello)

program
  .command('*')
  .description('other commands supported by Vue CLI')
  .action(commandVueCLI)

program.parse(process.argv)
