const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Diet } = require('../../db');

const getDietsHandler = async (req, res) => {


    try{
        
        const response = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data.results;
        
        let diets = [];

        response.forEach(element => {
            if (element.vegetarian === true) diets = [...diets, Object.keys(element).shift()];
            diets = [...diets, ...element.diets];
        });
        
        diets = [...new Set(diets)];

       const resultsFunction = async (diets) => {
        for (let diet of diets) {
             await Diet.findOrCreate({ where: {name: diet}})
        }};
        
        await resultsFunction(diets);
        const results = await Diet.findAll();
        
        res.status(200).json(results)

}
catch (error) {
    res.status(400).json({error: error.message});
}
}


module.exports = {
    getDietsHandler
}
