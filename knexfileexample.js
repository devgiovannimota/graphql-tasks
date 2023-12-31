// Update with your config settings.

module.exports = {
  client: "",
  connection: {
    database: "",
    user: "",
    password: "",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/db/migrations",
  },
};
