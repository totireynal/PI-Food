import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesByName } from "../../redux/actions";




const SearchBar = () => {
    
    const [nameRecipe, setNameRecipe] = useState('');
    const dispatch = useDispatch();
    console.log(nameRecipe)

    const handleChange = (event) => {
        setNameRecipe(event.target.value);
    }

    const onSearch = () => {
    dispatch(getRecipesByName(nameRecipe));
    setNameRecipe('');
}

    return (
        <div>
            <input type='text' placeholder='Search your recipe here...' value={nameRecipe} onChange={handleChange}/>
            <button onClick={() => onSearch(nameRecipe)}> Search </button>
            <br/>
           
        </div>
    )
}


export default SearchBar;