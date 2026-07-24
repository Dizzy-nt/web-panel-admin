const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

module.exports = Product;