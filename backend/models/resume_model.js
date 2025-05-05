const { DataTypes } = require('sequelize');
const sequelize = require('../config/DB'); 
    const Resume = sequelize.define('Resume', {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      publicId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    
    module.exports = Resume;