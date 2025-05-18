// routes/resumeRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../Middleware/Multer');
const resumeController = require('../Controllers/Resume_Controller');

router.post('/upload', upload.single('resume'), resumeController.uploadResume);
router.get('/latest', resumeController.getLatestResume);
router.get('/download',resumeController.downloadResume); 
module.exports = router;
