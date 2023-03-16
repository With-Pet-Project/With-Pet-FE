/* eslint-disable import/extensions */
const { defineConfig } = require('cypress');
const { seed, filter } = require('./db-seeder');

module.exports = defineConfig({
  projectId: 'n3yy1e',
  // env: { baseUrl: 'http://localhost:3000', apiUrl: 'https://with-pet-be.org' },
  env: {
    baseUrl: 'https://with-pet-fe.vercel.app/',
    apiUrl: 'https://with-pet-be.org',
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        'db:seed': () => {
          seed();
          return null;
        },
        'filter:database': queryPayload => {
          const { entity } = queryPayload;
          const filteredData = filter(entity);
          return filteredData || null;
        },
        // 'find:database': function (queryPayload) {
        //   // return queryDatabase(queryPayload, (data, attrs) =>
        //   //   _.find(data.results, attrs),
        //   // );
        //   return null;
        // },
      });
      return config;
    },
  },
});
