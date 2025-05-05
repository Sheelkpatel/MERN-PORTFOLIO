// models/Project.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/DB'); 
const Project = sequelize.define('Project', {
  projectId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  projectName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  projectDescription: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  technologiesUsed: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  githubUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true
    }
  },
  isPublished: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  images: {
    type: DataTypes.JSON, // Array of up to 4 image URLs
    allowNull: true,
    validate: {
      isArrayOfUrls(value) {
        if (!Array.isArray(value)) {
          throw new Error('Images must be an array.');
        }
        if (value.length > 4) {
          throw new Error('Only up to 4 images allowed.');
        }
        for (const url of value) {
          if (typeof url !== 'string' || !/^https?:\/\//.test(url)) {
            throw new Error('Each image must be a valid URL.');
          }
        }
      }
    }
  }
}, {
  tableName: 'projects'
});

module.exports = Project;
