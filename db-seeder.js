// const { join, dirname } = require('node:path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const fs = require('fs');
const path = require('path');

// module.exports = {
//   seed: async state => {
//     const adapter = new FileSync('db.json');
//     const db = low(adapter);
//     db.setState(state).write();
//   },
// };

const adapter = new FileSync('db.json');
const db = low(adapter);

module.exports = {
  seed: () => {
    // const testSeed = JSON.parse(fs.readFileSync('database-seed.json'), 'utf-8');
    const testSeed = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), 'src/lib/data', 'database-seed.json'),
        'utf-8',
      ),
    );

    db.setState(testSeed).write();
  },
  filter: () => {},
};
