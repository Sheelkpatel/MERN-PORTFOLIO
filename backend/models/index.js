const sequelize = require('../config/DB');
const Project = require ('./project_model.js')
const Admin = require ('./admin_model.js')
const Resume = require ('./resume_model.js')
const db = { sequelize, Project , Admin,Resume};






module.exports = db;