/* eslint-disable @typescript-eslint/no-var-requires */
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const fs = require('fs');
const path = require('path');

const databaseFile = path.join(
  process.cwd(),
  'src/lib/test-data',
  'database.json',
);
const adapter = new FileSync(databaseFile);
const db = low(adapter);

module.exports = {
  seed: () => {
    const testSeed = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), 'src/lib/test-data', 'database-seed.json'),
        'utf-8',
      ),
    );

    db.setState(testSeed).write();
  },

  filter: value => {
    const users = db.get(value).value();
    return users;
  },
};
