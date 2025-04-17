// models/BookingForm.js
const mongoose = require('mongoose');

const BookingFormSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  message: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('BookingForm', BookingFormSchema);
