import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import style from './NavBar.module.css';

const NavBar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const refreshPage = () => {
        if(location.pathname !== '/home') {
            navigate('/home');
        } else {
            navigate(0);
        }
    }
    return (
        <nav className={style.bigContainer}>
            <div className={style.container}>
                <button onClick={refreshPage}  className={style.button}>Home PI Foods</button>
            <div className={style.search}>
                <SearchBar/>
            </div>
            <div className={style.create}>
                <Link to='/form'>
                <button className={style.button}>Create your Recipe</button>
                </Link>
            </div>
            </div>
        </nav>
    )
}

export default NavBar;

