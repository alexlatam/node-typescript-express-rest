import {Sequelize} from 'sequelize';

const db = new Sequelize('social_network', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: true,
});

export default db;