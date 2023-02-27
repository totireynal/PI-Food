import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesByName } from "../../../redux/actions";
import style from './SearchBar.module.css';





const SearchBar = () => {
    
    const [nameRecipe, setNameRecipe] = useState('');
    const dispatch = useDispatch();
   

    const handleChange = (event) => {
        setNameRecipe(event.target.value);
    }

    const onSearch = () => {
    dispatch(getRecipesByName(nameRecipe));
    setNameRecipe('');
}

    return (
        <div className={style.all}>
         
            <input className={style.input} type='text' placeholder='Search your recipe here...' value={nameRecipe} onChange={handleChange}/>
            <button className={style.button} onClick={() => onSearch(nameRecipe)}> Search </button>
            <br/>
           
        </div>
    )
}


export default SearchBar;