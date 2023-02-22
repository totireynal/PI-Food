import { GET_RECIPES,GET_RECIPES_BY_NAME, GET_DETAIL, GET_DIETS,ORDER_NAME, ORDER_HEALTHSCORE, FILTER_SOURCE, FILTER_DIET } from "./actionsTypes";
import axios from 'axios';


export const getRecipes = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/recipes');
        const data = response.data;
        return dispatch({
            type: GET_RECIPES,
            payload: data
        })
    }
}

export const getRecipesByName = (name) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/recipes?name=${name}`);
        const data = response.data;
        return dispatch({
            type: GET_RECIPES_BY_NAME,
            payload: data
        })
    }
}

export const getDetail = (detailId) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/recipes/${detailId}`);
        const data = response.data;
        return dispatch({
            type: GET_DETAIL,
            payload: data 
        })
    }
}

export const getDiets = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/diets');
        const data = response.data;
        return dispatch({
            type: GET_DIETS,
            payload: data
        })
    }
}

export const orderByName = (value) => {
    return {
        type:ORDER_NAME,
        payload:value
    }
}

export const orderHealthScore = (value) => {
    return {
        type: ORDER_HEALTHSCORE,
        payload: value
    }
}

export const filterBySource = (value) => {
    return {
        type: FILTER_SOURCE,
        payload: value
    }
}

export const filterByDiet = (diet) => {
    return {
        type: FILTER_DIET,
        payload: diet
    }
}