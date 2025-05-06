const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  projectDescription: { type: String, required: true },
  technologiesUsed: { type: String, required: true },
  githubUrl: { type: String },
  isPublished: { type: Boolean, default: false },
  images: {
    type: [String],
    validate: [arrayLimit, 'Maximum of 4 images allowed']
  }
});

function arrayLimit(val) {
  return val.length <= 4;
}

module.exports = mongoose.model('Project', projectSchema);
