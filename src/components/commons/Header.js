import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (  
        <div className='navbar is-dark'>
            <div className='navbar-brand'>
                <Link to="/" className='navbar-item'>
                    <img src='logo512.png' alt='Logo'/>
                </Link>
            </div>
        </div>
    );
}
 
export default Header;