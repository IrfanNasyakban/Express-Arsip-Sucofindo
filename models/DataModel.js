const { Sequelize } = require("sequelize");
const db = require("../config/Database.js");

const {DataTypes} = Sequelize;

const Data = db.define('data', {
    idData: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: false
    },
    noOrder: DataTypes.INTEGER,
    noSpk: DataTypes.INTEGER,
    namaPelanggan: DataTypes.STRING,
    subPortfolio: DataTypes.STRING,
    nilai: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    noHp: DataTypes.STRING
}, {
    freezeTableName: true
})

module.exports = Data;

(async()=> {
    await db.sync();
})();