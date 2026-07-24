const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./Product');

const Transaksi = sequelize.define('Transaksi', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    transaction_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    qty: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_price: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    }
    // produk_id tidak perlu ditulis manual di sini karena akan otomatis dibuat oleh relasi Sequelize di bawah
}, {
    timestamps: false, // Mematikan timestamps otomatis karena kita pakai tanggal_transaksi
});

//mendefinisikan relasi: 1 produk -> banyak transaksi
Product.hasMany(Transaksi, { foreignKey: 'produk_id', as:'transaksi' });
Transaksi.belongsTo(Product, { foreignKey: 'produk_id', as:'produk' });

module.exports = Transaksi;