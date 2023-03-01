import React from "react";
import Card from "../Card/Card";
import style from './CardsContainer.module.css';

const CardsContainer = ({currentRecipes}) => {
    console.log(currentRecipes)
    return(
        <div className={style.cards}>
            {currentRecipes && currentRecipes.map((recipe, index)=>{
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