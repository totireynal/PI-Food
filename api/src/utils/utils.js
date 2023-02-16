const cleanArray = (arr) => {
    const clean = arr.map(elem => {
        return {
            id: elem.id,
            name: elem.title,
            image: elem.image,
            summary: elem.summary,
            healthScore: elem.healthScore,
            diets: elem.diets,
            steps: elem.analyzedInstructions,
            created: false

        }
    })
    return clean;
}




module.exports = {
    cleanArray
}