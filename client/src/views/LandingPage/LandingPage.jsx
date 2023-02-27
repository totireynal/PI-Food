import React from "react";
import { Link } from "react-router-dom";
import style from './LandingPage.module.css'

const LandingPage = () => {
    return (
        <div className={style.landing}>
            <h1>PI FOODS  2023</h1>
            <h3>By Sofía Reynal</h3>
  
            <Link to='/home'>
                <button className={style.button}>START</button>
            </Link>
        </div>
    )
}

export default LandingPage;