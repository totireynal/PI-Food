const recipesRouter = require('express').Router();
const { getRecipeByIdHandler} = require('../handlers/recipesHandlers/getRecipeById');
const { getRecipeByQueryHandler } = require('../handlers/recipesHandlers/getQueryHandler')
const { postRecipesHandler } = require('../handlers/recipesHandlers/postRecipesHandler');

 


recipesRouter.get('/:idRecipe/information', getRecipeByIdHandler)
recipesRouter.get('/complexSearch', getRecipeByQueryHandler)
recipesRouter.post('/', postRecipesHandler)





module.exports = recipesRouter;
