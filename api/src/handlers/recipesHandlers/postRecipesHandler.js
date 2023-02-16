const { Recipe } = require('../../db')


const postRecipesHandler = async (req, res) => {

    const {name, image, summary, healthScore, steps} = req.body

    try {
        let user = await Recipe.create({
            name, 
            image, 
            summary, 
            healthScore, 
            steps,
        })

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {postRecipesHandler};