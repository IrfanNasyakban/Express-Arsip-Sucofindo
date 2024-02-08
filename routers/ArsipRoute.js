const express = require("express");
const router = express.Router();

const {
    getArsip,
    getArsipById,
    createArsip,
    updateArsip,
    deleteArsip
} = require("../controllers/ArsipController.js");

router.get('/arsip', getArsip);
router.get('/arsip/:idArsip', getArsipById);
router.post('/arsip', createArsip);
router.patch('/arsip/:idArsip', updateArsip);
router.delete('/arsip/:idArsip', deleteArsip);

module.exports = router;