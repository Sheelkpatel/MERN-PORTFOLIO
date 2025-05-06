const Admin = require('./admin_model');
const Project = require('./project_model');
const Resume = require('./resume_model');

const db = { Admin, Project, Resume };

module.exports = db;
