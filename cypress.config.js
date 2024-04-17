const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 900,
  viewportWidth:1440,
  defaultCommandTimeout: 100000,
  pageLoadTimeout: 100000,

  e2e: {
    baseUrl: 'https://www.google.com',
    setupNodeEvents(on, config) {
      
    },
     specPattern:"cypress/integration/*.spec.js"
     
},
})

