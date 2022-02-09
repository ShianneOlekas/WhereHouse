// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */


module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: "127.0.0.1",
      database: "wherehouseDB",
      user: "root",
      password: "rootroot"
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: "127.0.0.1",
      database: "wherehouseDB",
      user: "root",
      password: "rootroot"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: process.env.JAWSDB_URL
  }

};
