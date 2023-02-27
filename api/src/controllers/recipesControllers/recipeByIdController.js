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

    if (recipeDbByIdRaw) {
        return cleanObjectDatabase(recipeDbByIdRaw);
        
    } else {
        return `Coudn't find the recipe with id: ${idRecipe}. Please try with another id.`

    }
}
}


module.exports = { getRecipeById }