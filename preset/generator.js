module.exports = (api, options, rootOptions) => {
  // Determine what needs to be initialized based on the user's options
  const files = {}
  const dep = {}
  const devDep = {}

  if (options.axios) {
    dep['axios'] = '^0.19.2'
    files['./src/plugins/axios.js'] = './template/src/plugins/axios.js'
  }

  if (options.lodash) {
    dep['lodash'] = '^4.17.15'
  }

  if (options.css === 'reset') {
    files['./src/assets/styles/reset.scss'] = './template/src/assets/styles/reset.scss'
  } else if (options.css === 'normalize') {
    files['./src/assets/styles/normalize.scss'] = './template/src/assets/styles/normalize.scss'
  }

  if (options.elementUI !== 'none') {
    dep['element-ui'] = '^2.13.0'
    if (options.elementUI === 'partial') {
      devDep['babel-plugin-component'] = '^1.1.1'
      files['./src/plugins/element-ui.js'] = './template/src/plugins/element-ui.js'
    }
  }

  // Add dependencies and devDependencies
  api.extendPackage({
    dependencies: dep,
    devDependencies: devDep
  })

  // Generate files using EJS
  api.render({
    './src/main.js': './template/src/main.js',
    './vue.config.js': './template/vue.config.js',
    './.eslintrc.js': './template/_eslintrc.js',
    './babel.config.js': './template/babel.config.js'
  }, options)

  api.render({
    './src/App.vue': './template/src/App.vue',
    './src/views/Home.vue': './template/src/views/Home.vue',
    './src/views/About.vue': './template/src/views/About.vue',
    './src/components/HelloWorld.vue': './template/src/components/HelloWorld.vue',
    './src/components/JarryChung.vue': './template/src/components/JarryChung.vue',
    './src/assets/styles/variable.scss': './template/src/assets/styles/variable.scss',
    './src/assets/images/vue-logo.png': './template/src/assets/images/vue-logo.png',
    './src/assets/images/papilon-icon.svg': './template/src/assets/images/papilon-icon.svg',
    ...files
  })
}
