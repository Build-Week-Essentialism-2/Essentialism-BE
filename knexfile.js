// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/essentialism.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations/'
    },
    seeds: {
      directory: './db/seeds/'
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    useNullAsDefault: true,
    // pool: {
    //   afterCreate: (conn, done) => {
    //     // runs after a connection is made to the sqlite engine
    //     conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    //   },
    // }
  }, 

  // testing: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './test-db/test-essentialism.db3'
  //   },
  //   migrations: {
  //     directory: './test-db/'
  //   },
  //   seeds: {
  //     directory: './test-db/'
  //   },
  //   useNullAsDefault: true,
  //   pool: {
  //     afterCreate: (conn, done) => {
  //     // runs after a connection is made to the sqlite engine
  //     conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
  //     }
  //   }
  // }
}
