const dotenv = require("dotenv");

dotenv.config({
  path: "./.env",
});

module.exports = {
  development: {
    username: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  // Add other environments (e.g., test, production) if needed
};
