import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(getRecipes());
    },[dispatch])

    return (
        <div>
            <h1>Este es el home</h1>
            <CardsContainer/>
        </div>
    )
};

export default Home;
