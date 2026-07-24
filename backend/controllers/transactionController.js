const Transaction = require("../models/Transaction");
const Product = require("../models/Product");
const sequelize = require("../config/database");

exports.createTransaction = async (req, res) => {
    // pakai db transaction agar aman jika ada error di tengah proses, maka semua proses akan dibatalkan
    const t = await sequelize.transaction();
    try {
        const { product_id, qty } = req.body;
        // cari produk berdasarkan product_id
        const product = await Product.findByPk(product_id, { transaction: t });
        if (!product) {
            // jika produk tidak ditemukan, batalkan transaksi dan kembalikan error
            await t.rollback();
            return res.status(404).json({ message: "Produk tidak ditemukan" });
        }
        // validasi stok
        if (product.stock < qty) {
            await t.rollback();
            return res.status(400).json({ message: "Stok produk tidak cukup" });
        }
        // hitung total harga dan buat transaksi baru
        const total_price = product.price * qty;
        const transaction = await Transaction.create({
            qty, total_price, product_id
        }, { transaction: t });
        // kurangi stok produk
        product.stock -= qty;
        await product.save({transaction: t});
        // commit transaksi
        await t.commit();
        res.status(201).json({ message: "Transaksi berhasil dibuat", transaction });
    } catch (error) {
        await t.rollback();
        console.error(error);
        res.status(500).json({ message: "Gagal membuat transaksi" });
    }
};

exports.getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.findAll({
            include: [{
                model: Product,
                as: 'product',
                attributes: ['product_name']
            }]
        });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(400).json({ message: "Gagal mengambil data transaksi" });
    }
};