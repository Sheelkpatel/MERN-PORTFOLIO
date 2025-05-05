const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Admin } = require('../models/index');
const nodemailer = require('nodemailer');

const OTP_EXPIRY_MINUTES = 10;


// Register Admin - Allow only one admin
exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if an admin already exists
    const existingAdmin = await Admin.findOne();
    if (existingAdmin) {
      return res.status(400).json({ error: 'Admin already exists. Only one admin is allowed.' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ email, password: hashed });
    res.status(201).json({ message: 'Admin registered', admin });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Send OTP - Allow OTP to be sent only if there's one admin

// Setup transporter using Gmail with App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,     // e.g., your-email@gmail.com
    pass: process.env.EMAIL_PASS      // 🔑 16-digit App Password from Google
  }
});

exports.sendOTP = async (req, res) => {
  const { email } = req.body;

  try {
    const admin = await Admin.findOne({ where: { email } });

    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await Admin.update({ otp }, { where: { email } });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Admin Login OTP',
      text: `Your OTP is: ${otp}`
    });

    res.json({ message: 'OTP sent to email' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: 'Failed to send OTP. ' + err.message });
  }
};

// Admin login with OTP
exports.login = async (req, res) => {
  const { email, password, otp } = req.body;
  try {
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) return res.status(404).json({ error: 'Admin not found' });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(401).json({ error: 'Invalid password' });

    if (admin.otp !== otp) return res.status(401).json({ error: 'Invalid OTP' });

    const token = jwt.sign({ adminId: admin.adminId }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
