const { defineConfig } = require('cypress');

// http://localhost:3000/
// https://with-pet-fe-cgh123198-with-pet-prod.vercel.app/
module.exports = defineConfig({
  projectId: 'n3yy1e',
  env: { BASE_URL: 'https://with-pet-fe-cgh123198-with-pet-prod.vercel.app/' },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
