import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__wrapper'>
                <h1 className='nav__logo'>Eyekup</h1>
                <ul className='nav__menu'>
                    <Link className='link' to={'/'}>
                        <li>Home</li>
                    </Link>
                    <li>About</li>
                    <li>Product</li>
                    <li>Contacts</li>
                </ul>
                <div className='nav__mbMenu'>Eyekup</div>
            </div>
        </nav>
    );
};

export default Navbar;
