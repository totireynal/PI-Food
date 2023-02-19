import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to='/home'>Home</Link>
            <Link to='/form'>Form</Link>
        </nav>
    )
}

export default NavBar;

