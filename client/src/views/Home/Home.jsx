import React from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, orderByName, orderHealthScore, filterBySource, getDiets, filterByDiet } from "../../redux/actions";
import Pagination from "../../components/Pagination/Pagination";



const Home = () => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState('');
    const recipesPerPage =  9;
    const allRecipes = useSelector(state=> state.recipes)
    const diets = useSelector(state => state.diets)
    
    const lastRecipeIndex = currentPage * recipesPerPage; // 9
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage; // 0
    const currentRecipes = allRecipes.slice(firstRecipeIndex, lastRecipeIndex);

    const paginado = (pageNumbers) => {
        setCurrentPage(pageNumbers)
    }
 
    useEffect(() => {
        dispatch(getRecipes());
    },[dispatch])

    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])

    const handlerOrderByName = (event) => {
        dispatch(orderByName(event.target.value));
        setCurrentPage(1);
        setOrder(`Order: ${event.target.value}`);
    }

    const handlerOrderByHealthScore = (event) => {
        dispatch(orderHealthScore(event.target.value))
        setCurrentPage(1);
        setOrder(`Order: ${event.target.value}`);
    }

    const handlerFilterSource = (event) => {
        dispatch(filterBySource(event.target.value))
    }

    const handlerFilterDiets = (event) => {
        dispatch(filterByDiet(event.target.value))
    }

    const handlerReset = () => {
        dispatch(getRecipes())
    }



    return (
        <div>
            <h1>Este es el home</h1>
            <select onChange={handlerOrderByHealthScore}>
                <option value='all'>Sort by HealthScore</option>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </select>
            <select onChange={handlerOrderByName}>
                <option value='all'>Sort by Name</option>
                <option value='asc'>A-Z</option>
                <option value='desc'>Z-A</option>
            </select>
            <select onChange={handlerFilterSource}>
                <option value='all'>Filter By Source</option>
                <option value='false'>API</option>
                <option value='true'>DB</option>
            </select>
            <select onChange={handlerFilterDiets}>
                <option value='all'>Filter By Diet</option>
                {diets.map((diet, index) => {
                    return (
                        <option key={index} value={diet.name}>{diet.name}</option>   
                    )
                })}
               
            </select>
            <button onClick={handlerReset}>Show All Recipes</button>
            <CardsContainer currentRecipes={currentRecipes}/>
            <Pagination 
                allRecipes={allRecipes.length} 
                recipesPerPage={recipesPerPage}
                paginado={paginado}/>
        </div>
    )
};

export default Home;
