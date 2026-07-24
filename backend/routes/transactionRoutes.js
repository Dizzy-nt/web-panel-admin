const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");
const authMiddleware = require("../middlewares/auth");

// pasang middleware di semua route transaksi
router.use(authMiddleware);

// GET semua transaksi
router.get("/", transactionController.getAllTransactions);
// POST tambah transaksi baru
router.post("/",transactionController.createTransaction);

module.exports = router;