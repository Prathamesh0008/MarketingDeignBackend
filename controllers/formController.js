// controllers/formController.js
const BookingForm = require('../models/BookingForm');

exports.submitForm = async (req, res) => {
  try {
    const form = new BookingForm(req.body);
    await form.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
