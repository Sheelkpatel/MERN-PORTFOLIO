const express = require('express');
const router = express.Router();
const testimonialController = require('../Controllers/testimonails_controller');

router.get('/', testimonialController.getAllTestimonials);

router.post('/', testimonialController.addTestimonial);

router.put('/:id', testimonialController.updateTestimonial);

router.delete('/:id', testimonialController.deleteTestimonial);

module.exports = router;
