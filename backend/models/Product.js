const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_produk: {
        type: DataTypes.STRING,
        allowNull: false
    },
    harga: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stok: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

module.exports = Product;