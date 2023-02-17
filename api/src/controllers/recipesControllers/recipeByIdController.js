const { Recipe, Diet } = require('../../db');
require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');

const getRecipeById = async (idRecipe, source) => {

if (source === 'api'){
    const response = (await axios(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`)).data
    let recipeByIdApi = {
       id: response.id,
       name: response.title,
       image: response.image,
       summary: response.summary,
       healthScore: response.healthScore,
       diets: response.diets,
       steps: response.analyzedInstructions[0]?.steps.map(elem => elem.step),
       created: false
    };
    return recipeByIdApi;
} else {
    const recipeDbById = await Recipe.findByPk(idRecipe, {
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],  
            },
        },
    });
    if (!recipeDbById) return `Coudn't find the recipe with id: ${idRecipe}. Please try with another id.`
    return recipeDbById;
}
}


module.exports = { getRecipeById }