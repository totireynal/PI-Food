const dietsRouter = require('express').Router();
const { getDietsHandler } = require('../handlers/dietsHandlers/dietsHandler');

dietsRouter.get('/', getDietsHandler)



module.exports = dietsRouter;