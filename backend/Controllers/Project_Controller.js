const cloudinary = require('../config/cloudinary');
const { Project } = require('../models/index');

// Upload helper using Cloudinary upload_stream
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

// === Add New Project ===
const addProject = async (req, res) => {
  try {
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

    const project = await Project.create({
      projectName,
      projectDescription,
      technologiesUsed,
      githubUrl,
      isPublished: isPublished === 'true',
      images: uploadedImages
    });

    res.status(201).json(project);
  } catch (error) {
    console.error('Add Project Error:', error);
    res.status(500).json({ message: 'Failed to add project.', error: error.message });
  }
};

// === Edit Project ===
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

    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    project.projectName = projectName;
    project.projectDescription = projectDescription;
    project.technologiesUsed = technologiesUsed;
    project.githubUrl = githubUrl;
    project.isPublished = isPublished === 'true';
    if (uploadedImages.length) {
      project.images = uploadedImages;
    }

    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update project.', error: error.message });
  }
};

// === List All Projects (latest first) ===
const listProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ _id: -1 }); // Newest first
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch projects.', error: error.message });
  }
};

// === Get Single Project by ID ===
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch project.', error: error.message });
  }
};

module.exports = {
  addProject,
  editProject,
  listProjects,
  getProjectById
};
