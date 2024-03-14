const { Sequelize } = require("sequelize");

const db = new Sequelize('arsip_sucofindo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db