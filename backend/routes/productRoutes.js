const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authMiddleware = require("../middlewares/auth");

// pasang middleware di semua route produk
router.use(authMiddleware);

// GET semua produk
router.get("/product", productController.getAllProducts);
// POST tambah produk baru
router.post("/", productController.createProduct);
// PUT update produk berdasarkan id
router.put("/:id", productController.updateProduct);
// DELETE hapus produk berdasarkan id
router.delete("/:id", productController.removeProduct);

module.exports = router;