const recipesRouter = require('express').Router();
const { getRecipeByIdHandler} = require('../handlers/recipesHandlers/getRecipeById');
const { getRecipeByQueryHandler } = require('../handlers/recipesHandlers/getQueryHandler')
const { postRecipesHandler } = require('../handlers/recipesHandlers/postRecipesHandler');

 const validate = (req, res, next) => {
    const {name, image, summary, healthScore, steps, diets} = req.body
    if(!name || ! image || !summary || !healthScore || !steps || !diets) 
        return res.status(400).json({error: 'Missing data'});

        next();
 }


recipesRouter.get('/:idRecipe/information', getRecipeByIdHandler)
recipesRouter.get('/complexSearch', getRecipeByQueryHandler)
recipesRouter.post('/', validate,  postRecipesHandler)



module.exports = recipesRouter;
