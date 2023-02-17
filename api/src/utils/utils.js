const cleanArray = (arr) => {
    const clean = arr.map(elem => {
        return {
            id: elem.id,
            name: elem.title,
            image: elem.image,
            summary: elem.summary,
            healthScore: elem.healthScore,
            diets: elem.diets,
            steps: elem.analyzedInstructions[0]?.steps.map(elem => elem.step),
            created: false

        }
    })
    return clean;
}




module.exports = {
    cleanArray
}