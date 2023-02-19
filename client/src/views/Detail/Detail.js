import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../redux/actions';

const Detail = () => {

    const { detailId } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getDetail(detailId))
    }, [dispatch, detailId]);
    
    const detail = useSelector(state => state.recipeDetail);
  
    return (
        <div>
            <h1>{detail?.name}</h1>
            <img src={detail?.image} alt={detail?.name}/>
            <h3>Id: {detail?.id}</h3>
            <h3>Summary: {detail?.summary}</h3>
            <h3>HealthScore: {detail?.healthScore}</h3>
            <h3>Diets: {detail?.diets}</h3>
            <h3>Steps: {detail?.steps}</h3>
        </div>
    )
};

export default Detail;