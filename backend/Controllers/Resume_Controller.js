const cloudinary = require('../config/cloudinary');
const { Resume } = require('../models/index');

// === Upload Resume PDF ===
const uploadResume = async (req, res) => {
  try {
    const file = req.file;
    if (!file || file.mimetype !== 'application/pdf') {
      return res.status(400).json({ message: 'Only PDF files are allowed.' });
    }

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          resource_type: 'raw',
          folder: 'resumes'
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(file.buffer);
    });

    // Delete existing resume (if any)
    const oldResume = await Resume.findOne();
    if (oldResume) {
      await cloudinary.uploader.destroy(oldResume.publicId, { resource_type: 'raw' });
      await Resume.findByIdAndDelete(oldResume._id);
    }

    const newResume = await Resume.create({
      url: result.secure_url,
      publicId: result.public_id
    });

    res.status(201).json(newResume);
  } catch (error) {
    res.status(500).json({ message: 'Failed to upload resume.', error: error.message });
  }
};

// === Get Latest Resume ===
const getLatestResume = async (req, res) => {
  try {
    const resume = await Resume.findOne().sort({ updatedAt: -1 });
    if (!resume) {
      return res.status(404).json({ message: 'No resume found.' });
    }

    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch resume.', error: error.message });
  }
};

module.exports = { uploadResume, getLatestResume };
