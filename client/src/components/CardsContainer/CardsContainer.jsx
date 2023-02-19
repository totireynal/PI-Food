// import data from "../../data";
import Card from "../Card/Card";
import { useSelector } from 'react-redux';


const CardsContainer = () => {
    let data = useSelector(state => state.recipes)
    return(
        <div>
            {data.map((recipe, index)=>{
                return (
                    <Card
                        key={index}
                        id={recipe.id}
                        name={recipe.name}
                        image={recipe.image}
                        summary={recipe.summary}
                        healthScore={recipe.healthScore}
                        diets={recipe.diets}
                        steps={recipe.steps}
                        
                    />
                )
            })}
        </div>
    )
};


export default CardsContainer;