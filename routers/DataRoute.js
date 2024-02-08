const express = require("express");
const router = express.Router();

const {
    getData,
    getDataById,
    createData,
    updateData,
    deleteData
} = require("../controllers/DataController.js");

router.get('/data', getData);
router.get('/data/:idData', getDataById);
router.post('/data', createData);
router.patch('/data/:idData', updateData);
router.delete('/data/:idData', deleteData);

module.exports = router;