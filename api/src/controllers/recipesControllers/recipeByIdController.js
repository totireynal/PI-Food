const { Recipe } = require('../../db');
require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');

const getRecipeById = async (idRecipe, source) => {

    const recipe = 
    source === 'api'
    ? (await axios(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`)).data
    : await Recipe.findByPk(idRecipe)

    return recipe;
}


module.exports = { getRecipeById }