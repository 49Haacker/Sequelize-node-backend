import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.MYSQL_USER_NAME,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
    port: process.env.DB_PORT || 3306,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connected!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

export { sequelize, connectDB };
