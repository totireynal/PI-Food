const { getRecipeById} = require('../../controllers/recipesControllers/recipeByIdController');

const getRecipeByIdHandler =  async (req, res) => {
    const { idRecipe } = req.params;
    const source = isNaN(idRecipe) ? 'db' : 'api';

    try {
        const recipeById = await getRecipeById(idRecipe, source);
        res.status(200).json(recipeById);

    } catch (error) {
        res.status(400).json({ error: error.message});
    }
}

module.exports = { getRecipeByIdHandler };

