const { Recipe, Diet } = require('../../db');
require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { cleanArray } = require('../../utils/utils')



const getAllRecipes = async () => {

    const databaseRecipes = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    });
    
    const apiRecipesRaw = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data.results;
    const apiRecipes = cleanArray(apiRecipesRaw);

    return [...databaseRecipes, ...apiRecipes]
};

module.exports = {
    getAllRecipes
}