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

const cleanArrayDatabase = (arr) => {
    const clean = arr.map(elem => {
        return {
            id: elem.id,
            name: elem.name,
            image: elem.image,
            summary: elem.summary,
            healthScore: elem.healthScore,
            diets: elem.Diets?.map(elem => elem.name),
            steps: elem.steps,
            created: true
        }
    })
    return clean;
}

const cleanObjectApi = (response) => {
    const clean = {
        id: response.id,
        name: response.title,
        image: response.image,
        summary: response.summary,
        healthScore: response.healthScore,
        diets: response.diets,
        steps: response.analyzedInstructions[0]?.steps.map(elem => elem.step),
        created: false
    }

    return clean;
}

const cleanObjectDatabase = (obj) => {
    const clean = {
        id: obj.id,
        name: obj.name,
        image: obj.image,
        summary: obj.summary,
        healthScore: obj.healthScore,
        diets: obj.Diets?.map(elem => elem.name),
        steps: obj.steps,
        created: true
    }

    return clean;
}




module.exports = {
    cleanArray,
    cleanArrayDatabase,
    cleanObjectApi,
    cleanObjectDatabase
}