/*
    This module is creating a Sequelize connector to interact with the database.
*/

import Sequelize from 'sequelize';

import { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_DIALECT } from '$env/static/private';

const conn = new Sequelize(
    DB_NAME, DB_USER, DB_PASS,
    {
        host: DB_HOST,
        dialect: DB_DIALECT
    }
);

export default conn;