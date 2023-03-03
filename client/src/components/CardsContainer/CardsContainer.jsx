import React from "react";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import style from './CardsContainer.module.css';

const CardsContainer = ({currentRecipes, loading}) => {

    return(
        <div className={style.cards}>
            {loading ? <Loader/> :
            currentRecipes && currentRecipes.map((recipe, index)=>{
                return (
                    <Card
                        key={index}
                        id={recipe.id}
                        name={recipe.name}
                        image={recipe.image}
                        diets={recipe.diets}
                    />
                ) 
    
            })
            
        }
            
        </div>
    )
        };


export default CardsContainer;