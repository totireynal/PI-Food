import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css'

const Card = (props) => {
    return (
        <div className={style.container}>
            <img className={style.img} src={props.image ? props.image : "https://media.istockphoto.com/id/1161153224/photo/vintage-cookbook-with-spices-and-herbs-on-rustic-wooden-background.jpg?s=612x612&w=0&k=20&c=5IEYo7Ad-OetMkhjBUJtkrcsAKX606EHYKbhjiUHNQo=" } alt={props.name}/>
            <p className={style.text}><b>Name:</b> {props.name}</p>
            <p className={style.text}><b>Diets: </b>{props.diets.join(', ')}</p>
            <div >

            <Link to= {`/detail/${props.id}`}> 
            <button className={style.btn} >View Recipe</button>
            </Link>
            </div>

        </div>
    )
}

export default Card;