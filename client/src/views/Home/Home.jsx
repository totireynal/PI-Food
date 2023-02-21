import React from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
import Pagination from "../../components/Pagination/Pagination";



const Home = () => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage, setRecipesPerPage] = useState(9);
    const allRecipes = useSelector(state=> state.recipes)
    
    const lastRecipeIndex = currentPage * recipesPerPage; // 9
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage; // 0
    const currentRecipes = allRecipes.slice(firstRecipeIndex, lastRecipeIndex);

    const paginado = (pageNumbers) => {
        setCurrentPage(pageNumbers)
    }
 
    useEffect(() => {
        dispatch(getRecipes());
    },[dispatch])



    return (
        <div>
            <h1>Este es el home</h1>
            <select>
                <option value='asc'>Ascending</option>
                <option value='descendente'>Descending</option>
            </select>
            <select>
                <option value='alphAsc'>A-Z</option>
                <option value='alph Desc'>Z-A</option>
            </select>
            <select>
                <option value='all'>All</option>
                <option value='api'>API</option>
                <option value='db'>DB</option>
            </select>
            <CardsContainer currentRecipes={currentRecipes}/>
            <Pagination 
                allRecipes={allRecipes.length} 
                recipesPerPage={recipesPerPage}
                paginado={paginado}/>
        </div>
    )
};

export default Home;
