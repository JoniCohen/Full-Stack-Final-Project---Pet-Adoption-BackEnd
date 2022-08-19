const path = require('path')
const pathToMigrations = path.resolve(__dirname, '../Migrations');


const knexConfig = {
  client: 'mysql',
  connection: {
    database: 'pets_adoption',
    user: 'root',
    password: 'joni94sql',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex-migrations',
    directory: pathToMigrations,
  },
};

module.exports = knexConfig
