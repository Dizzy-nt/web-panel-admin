const { Sequelize } = require('sequelize');
require('dotenv').config();

//mengambil url db dari file .env
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false, // Menonaktifkan logging SQL
    }
);

//fungsi untuk tes koneksi ke database
const testConnection = async () => {
    try{
        await sequelize.authenticate();
        console.log('✅ Alhamdulillah berhasil koneksi ke database');
    } catch (error) {
        console.error('❌ Gagal koneksi ke db, nih:', error);
    }
};

testConnection();

module.exports = sequelize;