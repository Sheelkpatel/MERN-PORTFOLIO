const express = require('express');
const Adminrouter = express.Router();
const adminController = require('../Controllers/Admin_Controller');

Adminrouter.post('/admin/register', adminController.register);
Adminrouter.post('/admin/send-otp', adminController.sendOTP);
Adminrouter.post('/admin/login', adminController.login);

module.exports = Adminrouter;
