const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'm25sad',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
