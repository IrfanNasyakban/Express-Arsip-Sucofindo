const { Sequelize } = require("sequelize");
const db = require("../config/Database.js");
const Data = require("./DataModel.js");

const {DataTypes} = Sequelize;

const Arsip = db.define('arsip', {
    idArsip: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: false
    },
    idData: DataTypes.STRING,
    namaFile: DataTypes.STRING,
    tipeFile: DataTypes.STRING,
    files: DataTypes.STRING,
    url: DataTypes.STRING
}, {
    freezeTableName: true
})

Arsip.belongsTo(Data, { foreignKey: 'idData', as: "Data" })
Data.hasMany(Arsip, { foreignKey: 'idData' });

module.exports = Arsip;

(async()=> {
    await db.sync();
})();