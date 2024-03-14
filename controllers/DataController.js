const Arsip = require("../models/ArsipModel.js");
const Data = require("../models/DataModel.js");
const { Op } = require("sequelize");

const getRes = async (req, res) => {
  try {
    const data = {
      data: "data success"
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
};

const getData = async (req, res) => {
  try {
    const data = await Data.findAll({
      include: [{
        model: Arsip,
        as: "arsips"
      }]
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
};

const getDataById = async (req, res) => {
  try {
    const response = await Data.findOne({
      where: {
        idData: req.params.idData,
      },
      include: [{
        model: Arsip,
        as: "arsips"
      }]
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

const createData = async (req, res) => {
  const { noOrder, noSpk, namaPelanggan, subPortfolio, nilai, nama, email, noHp } = req.body;

  try {
    // Mendapatkan jumlah data yang sudah ada dalam database
    const existingDataCount = await Data.count({
      where: {
        createdAt: {
          [Op.ne]: null, // Menghindari null values (createdAt sudah ada)
        },
      },
    });

    // Membuat idData dengan format DATAxxx (xxx adalah angka dengan padding)
    const idData = `DATA${(existingDataCount + 1).toString().padStart(3, '0')}`;

    // Menyimpan data baru ke database
    await Data.create({
      idData: idData,
      noOrder: noOrder,
      noSpk: noSpk,
      namaPelanggan: namaPelanggan,
      subPortfolio: subPortfolio,
      nilai: nilai,
      nama: nama,
      email: email,
      noHp: noHp,
    });

    res.json({ msg: "Data Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateData = async (req, res) => {
  try {
    await Data.update(req.body, {
      where: {
        idData: req.params.idData,
      },
    });
    res.status(200).json({ msg: "Data Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteData = async (req, res) => {
  try {
    await Data.destroy({
      where: {
        idData: req.params.idData,
      },
    });
    res.status(200).json({ msg: "Data Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getRes,
  getData,
  getDataById,
  createData,
  updateData,
  deleteData
};