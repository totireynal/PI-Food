const { Recipe, Diet } = require('../../db')


const postRecipe = async (name, image, summary, healthScore, steps, diets) => {
    let recipeCreated = await Recipe.create({
        name, 
        image, 
        summary, 
        healthScore, 
        steps,
    });

    let dietsDb = await Diet.findAll({
        where: { 
            name : diets,
        },
    });

    await recipeCreated.addDiet(dietsDb);

    // const results = await recipeCreated.addDiet(dietsDb);

    // const newRecipeId = results[0].RecipeId;

    // const findRecipe = await Recipe.findByPk(newRecipeId, {
    //     include: {
    //         model: Diet,
    //         attributes: ['name'],
    //         through: {
    //             attributes: [],  
    //         },
    //     },
    // });

    // return findRecipe;

    return recipeCreated;

};

module.exports = {
    postRecipe
};