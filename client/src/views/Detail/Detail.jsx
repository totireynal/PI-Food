import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail, cleanDetail } from '../../redux/actions';

const Detail = () => {

    const { detailId } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getDetail(detailId))

        return () => dispatch(cleanDetail())
    }, [dispatch, detailId]);
    
    const detail = useSelector(state => state.recipeDetail);
  
    return (
        <div>
            <h1>{detail?.name}</h1>
            <img src={detail?.image ? detail.image : "https://media.istockphoto.com/id/1161153224/photo/vintage-cookbook-with-spices-and-herbs-on-rustic-wooden-background.jpg?s=612x612&w=0&k=20&c=5IEYo7Ad-OetMkhjBUJtkrcsAKX606EHYKbhjiUHNQo=" } alt={detail?.name}/>
            <h3>Id: {detail?.id}</h3>
            <h3>Summary: {detail?.summary}</h3>
            <h3>HealthScore: {detail?.healthScore}</h3>
            <h3>Diets: {detail?.diets}</h3>
            <h3>Steps: {detail?.steps}</h3>
        </div>
    )
};

export default Detail;