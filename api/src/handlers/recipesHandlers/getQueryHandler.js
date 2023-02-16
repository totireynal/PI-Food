const {  searchRecipeByName} = require('../../controllers/recipesControllers/searchRecipeByName');
const { getAllRecipes } = require('../../controllers/recipesControllers/getAllRecipes')



const getRecipeByQueryHandler = async (req, res ) => {

    let { name } = req.query;
    try {
        const results = name ? await searchRecipeByName(name) : await getAllRecipes()
        res.status(200).json(results)
    } catch ( error ) {
        res.status(400).json({error: error.message})
    }
    


}


module.exports = {getRecipeByQueryHandler};