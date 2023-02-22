import { GET_RECIPES, GET_DETAIL, GET_DIETS, ORDER_NAME, ORDER_HEALTHSCORE, FILTER_SOURCE, FILTER_DIET } from "./actionsTypes";

const initialState = { // este es mi estado global
    recipes: [],
    recipesCopy : [],
    recipeDetail: {},
    diets: []
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RECIPES: 
            return {...state, 
                recipes: action.payload,
                recipesCopy: action.payload};

        case GET_DETAIL:
            return {...state, recipeDetail: action.payload};

        case GET_DIETS:
            return {...state, diets: action.payload};

        case ORDER_NAME:
            let sortedRecipesbyName = action.payload === 'asc' ?
            state.recipes.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                return -1;
                }
                return 0;
            }) :
            state.recipes.sort((a, b) => {
                if(a.name > b.name) {
                    return -1;
                }
                if(b.name > a.name) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                recipes: sortedRecipesbyName
            }
            

        case ORDER_HEALTHSCORE:
            return {...state, 
                recipes: 
                action.payload === 'asc'
                ? state.recipes.sort((a, b) => a.healthScore - b.healthScore)
                : state.recipes.sort((a, b) => b.healthScore - a.healthScore) 
            };
                
        case FILTER_SOURCE:  
            const filteredRecipesBySource = action.payload === 'true' ? state.recipesCopy.filter((recipe) => recipe.created) : state.recipesCopy.filter((recipe) => !recipe.created)
            return {
                ...state,
                recipes: action.payload === 'all' ? state.recipesCopy : filteredRecipesBySource    
            };
            
            case FILTER_DIET:
            const filteredRecipesByDiet = action.payload === 'all' ? state.recipesCopy : state.recipesCopy.filter(recipe => recipe.diets.includes(action.payload))
            return {
                ...state,
                recipes: filteredRecipesByDiet
            };
            
            default:
            return {...state};
    }
};

export default reducer;