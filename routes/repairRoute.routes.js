const express = require('express');

const repairController = require('./../controllers/repairs.controller');

const repairRoute = express.Router();

repairRoute
  .route('/')
  .get(repairController.allRepair)
  .post(repairController.createRepair);

repairRoute
  .route('/:id')
  .get(repairController.repairById)
  .patch(repairController.repairUpDate)
  .delete(repairController.deleteRepair);

module.exports = repairRoute;
