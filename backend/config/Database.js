import { Sequelize } from "sequelize"

const db = new Sequelize('db_serba_serbi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;

