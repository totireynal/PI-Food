import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

const NavBar = () => {

    const location = useLocation();
    return (
        <nav>
            <Link to='/home'>Home</Link>
        
            <SearchBar/>
            { location.pathname !== '/form' && <Link to='/form'>
                <button>Create your Recipe</button>
            </Link>}
        </nav>
    )
}

export default NavBar;

