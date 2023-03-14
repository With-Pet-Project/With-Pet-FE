/* eslint-disable import/extensions */
const { defineConfig } = require('cypress');
const { seed } = require('./db-seeder');

module.exports = defineConfig({
  projectId: 'n3yy1e',
  // env: { baseUrl: 'http://localhost:3000/' },
  env: { BASE_URL: 'https://with-pet-fe-cgh123198-with-pet-prod.vercel.app/' },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        'db:seed': () => {
          // const defaultSeed = { users: [] };
          // const seedToUse = seeds || defaultSeed;
          // seed(seedToUse);
          // return null;
          seed();
          return null;
        },
        // !: 여기 하는 중 ...
        'filter:database': function (queryPayload) {
          console.log(JSON.stringify(queryPayload));
          // return queryDatabase(queryPayload, (data, attrs) =>
          //   _.filter(data.results, attrs),
          // );
          return null;
        },
        'find:database': function (queryPayload) {
          // return queryDatabase(queryPayload, (data, attrs) =>
          //   _.find(data.results, attrs),
          // );
          return null;
        },
      });
      return config;
    },
  },
});
