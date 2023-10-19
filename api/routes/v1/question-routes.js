const express = require('express');
const router = express.Router();

 // Import the controller for handling routes
const questionController = require('../../controllers/v1/question-controller'); //  relative path 

router.use('/:questionId/options', require('./options-routes')); //create options under questionID

router.get('/create', questionController.create);

router.delete('/:questionid', questionController.deleteQuestion);

module.exports = router; // Export the router for use in other parts of the application
