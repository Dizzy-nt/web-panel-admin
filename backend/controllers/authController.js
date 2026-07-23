const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

// POST /login
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        
        if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Password salah" });

        const token = jwt.sign({id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({message:"Login berhasil" , token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Terjadi kesalahan server" });
    }
};

// fungsi helper untuk membuat user baru (untuk testing)
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const role = req.body.role || "admin";
        await User.create({ username, password: hashedPassword, role });
        
        res.status(201).json({ message: "Admin berhasil dibuat" });
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Terjadi kesalahan server" });
    }
};