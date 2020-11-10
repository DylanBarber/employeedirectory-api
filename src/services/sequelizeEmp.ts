import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';

dotenv.config();

export const sequelizeEmp = new Sequelize({
        database: 'employeedirectory',
        dialect: 'mysql',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        storage: ':memory:',
        models: [__dirname + '/../entities/**/*.ts'],
        repositoryMode: true,
        define: {
                timestamps: false
        }
});