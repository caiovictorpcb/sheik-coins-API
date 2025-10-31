import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'
import pg from 'pg';

dotenv.config()

const sequelize = new Sequelize(process.env.DATABASE_URI, {
    dialect: 'postgres',
    dialectModule: pg,
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}) 


export default sequelize;