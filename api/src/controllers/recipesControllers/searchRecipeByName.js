const { Recipe, Diet } = require('../../db');
require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const {Op} = require('sequelize');
const { cleanArray } = require('../../utils/utils')



const searchRecipeByName = async (name) => {
    const databaseRecipes = await Recipe.findAll({
        where: {
            name: {
                [Op.iLike] : `%${name}%`, 
            },
        },
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],  
            },
        },
    });

        const apiRecipesRaw = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data.results;
        const apiRecipes = cleanArray(apiRecipesRaw);

        const filterApiRecipes = apiRecipes.filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()));
                
        if([...databaseRecipes, ...filterApiRecipes].length) {
            return [...databaseRecipes, ...filterApiRecipes]
        } else {
            throw new Error(`Coudn't find a recipe with name: ${name}. Please try with another name`)
        }
};

module.exports = {
    searchRecipeByName
}