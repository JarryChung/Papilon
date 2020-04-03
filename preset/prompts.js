module.exports = [
  {
    name: 'axios',
    type: 'confirm',
    message: 'Use axios as a plugin?',
    default: true
  },
  {
    name: 'lodash',
    type: 'confirm',
    message: 'Import lodash? (Use lodash anywhere by _)',
    default: true
  },
  {
    name: 'css',
    type: 'list',
    message: 'Pick an unified browser styles solution:',
    choices: [
      {
        name: 'Normalize(Unified some styles)',
        value: 'normalize'
      },
      {
        name: 'Reset(Reset all default styles)',
        value: 'reset'
      },
      {
        name: 'None(Use default styles)',
        value: 'none'
      }
    ]
  }
]
