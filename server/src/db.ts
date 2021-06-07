import knex from "knex";

export default knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "parcial1",
  },
});

// export default db;
