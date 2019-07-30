// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/weddings.db3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'weddings.db3',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations"
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: './seeds'
    }
  }
};

// production: {
//   client: 'pg',
//   connection: process.env.DATABASE_URL,
//   useNullAsDefault: true,
//   pool: {
//     afterCreate: (conn, done) => {
//       conn.run('PRAGMA foreign_keys = ON', done);
//     },
//   migrations: {
//     directory: "./migrations"
//   },
//   seeds: {
//     directory: './seeds'
//   }
// }
// }
// };
