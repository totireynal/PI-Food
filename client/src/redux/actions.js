import { GET_RECIPES, GET_DETAIL, GET_DIETS, ORDER_HEALTHSCORE } from "./actionsTypes";
import axios from 'axios';


export const getRecipes = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/recipes/complexSearch');
        const data = response.data;
        return dispatch({
            type: GET_RECIPES,
            payload: data
        })
    }
}

export const getDetail = (detailId) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/recipes/${detailId}/information`);
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

export const orderHealthScore = (healthScore) => {
    return {
        type: ORDER_HEALTHSCORE,
        payload: healthScore
    }
}