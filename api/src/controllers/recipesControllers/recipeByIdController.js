const { Recipe, Diet } = require('../../db');
require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { cleanObjectApi, cleanObjectDatabase } = require('../../utils/utils')

const getRecipeById = async (idRecipe, source) => {

if (source === 'api'){
    const response = (await axios(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`)).data
    return cleanObjectApi(response);
   
} else {
    const recipeDbByIdRaw = await Recipe.findByPk(idRecipe, {
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],  
            },
        },
    });

    const recipeDbById = cleanObjectDatabase(recipeDbByIdRaw);
    if (!recipeDbById) return `Coudn't find the recipe with id: ${idRecipe}. Please try with another id.`
    return recipeDbById;
}
}


module.exports = { getRecipeById }