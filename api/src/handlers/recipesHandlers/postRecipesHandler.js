const { postRecipe } = require('../../controllers/recipesControllers/postRecipe.js');


const postRecipesHandler = async (req, res) => {

    const {name, image, summary, healthScore, steps, diets} = req.body

    try {
        const newRecipe = await postRecipe(name, image, summary, healthScore, steps, diets);
        res.status(200).json(newRecipe); 

    } catch (error) {
        if(error.message === 'Validation error') {
            res.status(400).json({error: `The recipe ${name} already exists. Please create another one.`})
        } else {
        res.status(400).json({error: error.message})
        }
    }
}

module.exports = {postRecipesHandler};