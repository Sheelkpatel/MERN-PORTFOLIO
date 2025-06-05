// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../Middleware/Multer');
const projectController = require('../Controllers/Project_Controller');

router.post('/add', upload.fields([{ name: 'images', maxCount: 4 }]), projectController.addProject);
router.put('/edit/:id', upload.fields([{ name: 'images', maxCount: 4 }]), projectController.editProject);
router.get('/published', projectController. getPublishedProjects);
router.get('/list', projectController.listProjects);
router.get('/:id',projectController.getProjectById);
router.delete('/delete/:id', projectController.deleteProject);

module.exports = router;
