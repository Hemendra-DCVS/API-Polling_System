// Import the Mongoose library
const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Add this line to import Schema
const Question = require('./question');
// Define a new Mongoose schema for tasks
const optionsSchema = new mongoose.Schema({
  // Reference to the Project model
  
  // Issue title (required string)
  text: {
    type: String,
    required: true
  },

  votes:{
    type: Number,
    default: 0
  },

  // Issue description (required string)
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  },
  
}, { timestamps: true }); // Enable timestamps for created and updated fields

// Create a Mongoose model for issues using the defined schema
const option = mongoose.model('option', optionsSchema);

// Export the Issue model to be used in other parts of the application
module.exports = option;
