// controllers/testimonialController.js
const Testimonial = require('../models/testimonails');

// Get all testimonials
exports.getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new testimonial
exports.addTestimonial = async (req, res) => {
  const { quote, author, position, rating } = req.body;
  const newTestimonial = new Testimonial({ quote, author, position, rating });

  try {
    const savedTestimonial = await newTestimonial.save();
    res.status(201).json(savedTestimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update testimonial by ID
exports.updateTestimonial = async (req, res) => {
  const { quote, author, position, rating } = req.body;

  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { quote, author, position, rating },
      { new: true, runValidators: true }
    );

    if (!updatedTestimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.json(updatedTestimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete testimonial by ID
exports.deleteTestimonial = async (req, res) => {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!deletedTestimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.json({ message: 'Testimonial deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
