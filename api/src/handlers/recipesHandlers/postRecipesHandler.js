const { Recipe, Diet } = require('../../db')


const postRecipesHandler = async (req, res) => {

    const {name, image, summary, healthScore, steps, diets, created} = req.body

    try {
        let recipeCreated = await Recipe.create({
            name, 
            image, 
            summary, 
            healthScore, 
            steps,
        })

      
        let dietsDb = await Diet.findAll({
            where: { 
                name : diets,
            },
        });

        await recipeCreated.addDiet(dietsDb)


        res.status(200).json(`The recipe ${name} has been created correctly`); 

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {postRecipesHandler};