import { GET_RECIPES, GET_DETAIL, GET_DIETS } from "./actionsTypes";

const initialState = { // este es mi estado global
    recipes: [],
    recipeDetail: {},
    diets: []
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RECIPES: 
            return {...state, recipes: action.payload};

        case GET_DETAIL:
            return {...state, recipeDetail: action.payload};

        case GET_DIETS:
            return {...state, diets: action.payload};

        default:
            return {...state};
    }
};

export default reducer;