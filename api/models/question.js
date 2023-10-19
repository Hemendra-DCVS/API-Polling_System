// Import the Mongoose library
const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Add this line to import Schema
const option = require('./options');
// Define a new Mongoose schema for tasks
const questionSchema = new mongoose.Schema({
  // Reference to the Project model
  
  // Issue title (required string)
  query: {
    type: String,
    required: true
  },
  // Issue description (required string)
  options: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'options'
  },
  
}, { timestamps: true }); // Enable timestamps for created and updated fields

// Create a Mongoose model for issues using the defined schema
const Question = mongoose.model('Question', questionSchema);

// Export the Issue model to be used in other parts of the application
module.exports = Question;
