import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div>
            <Link to= {`/detail/${props.id}`}> Name: {props.name}</Link>
            <img src={props.image ? props.image : "https://media.istockphoto.com/id/1161153224/photo/vintage-cookbook-with-spices-and-herbs-on-rustic-wooden-background.jpg?s=612x612&w=0&k=20&c=5IEYo7Ad-OetMkhjBUJtkrcsAKX606EHYKbhjiUHNQo=" } alt={props.name}/>
            <p>Diets: {props.diets}</p>
        </div>
    )
}

export default Card;