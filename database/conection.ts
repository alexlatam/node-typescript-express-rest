import {Sequelize} from 'sequelize';
import dotenv from "dotenv";
dotenv.config()

const db = new Sequelize(process.env.DEV_DB_NAME, process.env.DEV_DB_USERNAME, process.env.DEV_DB_PASSWORD, {
    host: process.env.DEV_DB_HOST,
    port: process.env.DEV_DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: process.env.DB_DEBUG === "true" ? true : false,
});

export default db;