import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div>
            <Link to= {`/detail/${props.id}`}> Name: {props.name}</Link>
            <img src={props.image} alt={props.name}/>
            <p>Diets: {props.diets}</p>
        </div>
    )
}

export default Card;