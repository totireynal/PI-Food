import React from "react";
import Card from "../Card/Card";



const CardsContainer = ({currentRecipes}) => {
    
    return(
        <div>
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
            })}
        </div>
    )
};


export default CardsContainer;