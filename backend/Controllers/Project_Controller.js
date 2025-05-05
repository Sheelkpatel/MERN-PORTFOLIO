// controllers/projectController.js
const cloudinary = require('../config/cloudinary');
const {Project} = require('../models/index');

const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: 'image', folder: 'projects' },
      (error, result) => {
        if (error) reject(error);
        else resolve(result.secure_url);
      }
    );
    stream.end(fileBuffer);
  });
};

const addProject = async (req, res) => {
  try {
    const { projectName, projectDescription, technologiesUsed, githubUrl, isPublished } = req.body;
    const files = req.files?.images || [];

    if (files.length > 4) {
      return res.status(400).json({ message: 'Maximum 4 images allowed.' }); 
    }

    const uploadedImages = await Promise.all(
      files.map((file) => uploadToCloudinary(file.buffer))
    );

    const project = await Project.create({
      projectName,
      projectDescription,
      technologiesUsed,
      githubUrl,
      isPublished: isPublished === 'true', // convert from string
      images: uploadedImages,
    });

    res.status(201).json(project);
  } catch (error) {
    console.error('Add Project Error:', error);
    res.status(500).json({ message: 'Failed to add project.', error: error.message });
  }
};


const editProject = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      projectName,
      projectDescription,
      technologiesUsed,
      githubUrl,
      isPublished
    } = req.body;

    const files = req.files?.images || [];

    if (files.length > 4) {
      return res.status(400).json({ message: 'Maximum 4 images allowed.' });
    }

    const uploadedImages = await Promise.all(
      files.map((file) => uploadToCloudinary(file.buffer))
    );

    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    project.projectName = projectName;
    project.projectDescription = projectDescription;
    project.technologiesUsed = technologiesUsed;
    project.githubUrl = githubUrl;
    project.isPublished = isPublished === 'true';
    project.images = uploadedImages.length ? uploadedImages : project.images;

    await project.save();

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update project.', error: error.message });
  }
};

 const listProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({ order: [['projectId', 'DESC']] });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch projects.', error: error.message });
  }
};

const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch project.', error: error.message });
  }
};

module.exports={listProjects,editProject,addProject,getProjectById}