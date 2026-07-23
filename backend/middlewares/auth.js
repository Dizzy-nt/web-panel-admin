const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Mengambil token dari header Bearer <Token>
    if (!token) {
        return res.status(401).json({ message: 'Akses ditolak. Token tidak ditemukan.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // menyimpan data user ke request
        next(); // lanjut ke proses berikutnya
    } catch (error) {
        return res.status(401).json({ message: 'Akses ditolak. Token tidak valid.' });
    }
};

module.exports = authenticate;