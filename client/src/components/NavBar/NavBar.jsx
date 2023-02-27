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
                <Link onClick={refreshPage} to='/home'>
                    <button className={style.button}>Home PI Foods</button></Link>
            <div className={style.search}>
                {location.pathname === '/home' &&  <SearchBar/>}
            </div>
            <div className={style.create}>
                { location.pathname !== '/form' && <Link to='/form'>
                <button className={style.button}>Create your Recipe</button>
                </Link>}
            </div>
            </div>
        </nav>
    )
}

export default NavBar;

