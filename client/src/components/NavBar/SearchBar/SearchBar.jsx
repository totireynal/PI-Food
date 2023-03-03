import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRecipesByName } from "../../../redux/actions";
import style from './SearchBar.module.css';





const SearchBar = ({setCurrentPage, setLoading, setIsActive}) => {
    
    const [nameRecipe, setNameRecipe] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

   

    const handleChange = (event) => {
        setNameRecipe(event.target.value);
    }

    const onSearch = () => {
        navigate('/home')
        setLoading(true)
        dispatch(getRecipesByName(nameRecipe))
        .then(res => setLoading(false))
        .then(res => setIsActive(1))
        .catch(err => err)
        
        setNameRecipe('');
        setCurrentPage(1);
        
    }

    return (
        <div className={style.all}>
            
            <input className={style.input} type='text' placeholder='Search your recipe here...' value={nameRecipe} onChange={handleChange}/>
            {nameRecipe === '' ? <button className={style.button} disabled >Search</button> : <button className={style.button} onClick={() => onSearch(nameRecipe)}> Search </button>}
            <br/>
           
        </div>
    )
}


export default SearchBar;