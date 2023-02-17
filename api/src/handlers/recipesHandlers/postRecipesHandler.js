const { postRecipe } = require('../../controllers/recipesControllers/postRecipe.js');


const postRecipesHandler = async (req, res) => {

    const {name, image, summary, healthScore, steps, diets} = req.body

    try {
        const newRecipe = await postRecipe(name, image, summary, healthScore, steps, diets);
        res.status(200).json(newRecipe); //ver si es mejor retornar la receta creada o un mensaje

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {postRecipesHandler};