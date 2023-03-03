import React from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Message from "../../components/Message/Message";
import { getRecipes, orderByName, orderHealthScore, filterBySource, getDiets, filterByDiet } from "../../redux/actions";
import Pagination from "../../components/Pagination/Pagination";
import style from './Home.module.css';




const Home = ({currentPage, setCurrentPage, isActive, setIsActive, loading, setLoading, refresh, setRefresh }) => {
    

  
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allRecipes = useSelector(state=> state.recipes);
    const diets = useSelector(state => state.diets);

    const [order, setOrder] = useState('');
    
    const recipesPerPage =  9;
    const lastRecipeIndex = currentPage * recipesPerPage; // 9
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage; // 0
    const currentRecipes = (!allRecipes.error) && allRecipes.slice(firstRecipeIndex, lastRecipeIndex);

    const paginado = (pageNumbers) => {
        setCurrentPage(pageNumbers)
        setIsActive(pageNumbers)
    }

    useEffect(() => {

        if (refresh){
        setLoading(true)
        dispatch(getRecipes())
        .then(res => setLoading(false))
        .catch(err => err);
        }

        dispatch(getDiets());
        
    },[dispatch, refresh, setLoading])

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
      dispatch(filterBySource(event.target.value));
      setCurrentPage(1);
  }

  const handlerFilterDiets = (event) => {
      dispatch(filterByDiet(event.target.value));
      setCurrentPage(1);
  }

  const handlerReset = () => {
      setLoading(true)
      navigate(0)
      setLoading(false)
     

      setCurrentPage(1);
      setIsActive(1);
      setRefresh(true);
  }


    return (
        <div className={style.bigContainer}>

            <div className={style.container}>
           
                <select onChange={handlerOrderByName}>
                    <option value='all'>Sort by Name</option>
                    <option value='asc'>A-Z</option>
                    <option value='desc'>Z-A</option>
                </select>
                <select onChange={handlerOrderByHealthScore}>
                    <option value='all'>Sort by HealthScore</option>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
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
                <button className={style.btn} onClick={handlerReset}>Reset filters</button>
               
               
                {allRecipes.error ? <Message message={allRecipes.error} /> : <CardsContainer currentRecipes={currentRecipes} loading={loading} setLoading={setLoading}/>}
                {!loading  && <Pagination 
                        allRecipes={allRecipes.length} 
                        recipesPerPage={recipesPerPage}
                        paginado={paginado}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        isActive={isActive}
                        setIsActive={setIsActive}/>
                        
                }
                        </div>    
        </div>
    )
};

export default Home;
