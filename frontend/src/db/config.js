let defaultConfigDB = {
    username: `${process.env.DB_USER ? process.env.DB_USER : 'postgres'}`,
    password: `${process.env.DB_PASS ? process.env.DB_PASS : 'postgres'}`,
    database: `${process.env.DB_NAME ? process.env.DB_NAME : 'app_development'}`,
    host: `${process.env.DB_HOST ? process.env.DB_HOST : 'localhost'}`,
    dialect: `${process.env.DB_DIALECT ? process.env.DB_DIALECT : 'postgres'}`,
}

export default {
    "development": defaultConfigDB,
    "test": defaultConfigDB,
    "production": defaultConfigDB
}
