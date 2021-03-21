require("dotenv").config();

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "react_inventory"),
        username: env("DATABASE_USERNAME", process.env.MYSQL_USERNAME),
        password: env("DATABASE_PASSWORD", process.env.MYSQL_PASSWORD),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
