// Import the Mongoose library
const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Add this line to import Schema
const option = require('./options');
// Define a new Mongoose schema for tasks
// const questionSchema = new mongoose.Schema({
//   //query (required string)
//   query: {
//     type: String,
//     required: true
//   },
//   // options referance
//   options: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'options'
//   },
  
// }, { timestamps: true }); // Enable timestamps for created and updated fields

const questionSchema = new mongoose.Schema({
  query: {
    type: String,
    required: true,
    validate: {
      validator: (v) => v.length > 0,
      message: 'Query must not be empty.',
      query: "what is the capital of france"
    }

  },
  options: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'options'
  },
}, { timestamps: true });




// Create a Mongoose model for  the defined schema
const question = mongoose.model('Question', questionSchema);

// Export the model to be used in other parts of the application
module.exports = question;
