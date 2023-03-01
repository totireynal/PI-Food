import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getDetail, cleanDetail } from '../../redux/actions';
import style from './Detail.module.css';

const Detail = () => {

    const { detailId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(getDetail(detailId))

        return () => dispatch(cleanDetail())
    }, [dispatch, detailId]);
    
    const detail = useSelector(state => state.recipeDetail);
    
    const handlerClick = () => {
        navigate('/home');
    };

    
    return (
        <div className={style.container}>
        <div className={style.left}>
            <div className={style.image}>
            <img src={detail?.image ? detail?.image : "https://media.istockphoto.com/id/1161153224/photo/vintage-cookbook-with-spices-and-herbs-on-rustic-wooden-background.jpg?s=612x612&w=0&k=20&c=5IEYo7Ad-OetMkhjBUJtkrcsAKX606EHYKbhjiUHNQo=" } alt={detail?.name}/>
            </div>
            <div className={style.text}>
            <h1>{detail?.name}</h1>
            <h3>Id: {detail?.id}</h3>
                
            <h3>Diets: {detail?.diets?.join(', ')}</h3>
            <h3>HealthScore: {detail?.healthScore}</h3>
            </div>
        </div>
        <div className={style.right}>

          <div className={style.texts}>

             <p dangerouslySetInnerHTML={{ __html: detail?.summary }}></p>
            <h3>Steps: {detail?.steps}</h3>
          </div>
            <button onClick={handlerClick}>Back</button>
        </div>
        </div>
    )
}

export default Detail;