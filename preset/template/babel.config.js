module.exports = {
    presets: [
      '@vue/cli-plugin-babel/preset'
    ],
    <%_ if (options.elementUI === 'partial') { _%>
    plugins: [
      [
        'component',
        {
          'libraryName': 'element-ui',
          'styleLibraryName': 'theme-chalk'
        }
      ]
    ]
    <%_ } _%>
  }
  