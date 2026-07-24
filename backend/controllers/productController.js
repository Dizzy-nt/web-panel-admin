const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
    const Products = await Product.findAll();
    res.json(Products);
};

exports.createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: "Gagal menambah produk"});
    }
};

exports.updateProduct = async (req,res)=>{
    try {
        await Product.update(req.body, { where: { id: req.params.id } });
        res.status(200).json({ message: "Produk berhasil diperbarui" });
    } catch (error) {
        res.status(400).json({ message: "Gagal memperbarui produk" });
    }
};

exports.removeProduct = async (req,res)=>{
    try {
        await Product.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "Produk berhasil dihapus" });
    } catch (error) {
        res.status(400).json({ message: "Gagal menghapus produk" });
    }
};