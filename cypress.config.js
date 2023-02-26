const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'n3yy1e',
  env: { BASE_URL: 'http://localhost:3000/' },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
