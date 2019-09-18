exports.config = {
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    }
  },
  
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codetry'
}
