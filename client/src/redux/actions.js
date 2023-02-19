import { GET_RECIPES, GET_DETAIL } from "./actionsTypes";
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