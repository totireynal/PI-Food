import { GET_RECIPES, GET_DETAIL } from "./actionsTypes";

const initialState = { // este es mi estado global
    recipes: [],
    recipeDetail: {}
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RECIPES: 
            return {...state, recipes: action.payload};

        case GET_DETAIL:
            return {...state, recipeDetail: action.payload};

        default:
            return {...state};
    }
};

export default reducer;