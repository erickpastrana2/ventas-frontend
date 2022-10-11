import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (  
        <nav className="panel">
            <p className='panel-heading'>Menu</p>
            <div className="panel-block">
                <Link to="/" className='button is-fullwidth'>
                    <span className='icon'>
                        <i className='fas fa-home'></i>
                    </span>
                    <span>
                        Inicio   
                    </span>
                </Link>
            </div>
            <div className="panel-block">
                <Link to="/articulos" className='button is-fullwidth'>
                    <span className='icon'>
                        <i className='fas fa-users'></i>
                    </span>
                    <span>
                        Articulos   
                    </span>
                </Link>
            </div>
            <div className="panel-block">
                <Link to="/modelos" className='button is-fullwidth'>
                    <span className='icon'>
                        <i className='fas fa-users'></i>
                    </span>
                    <span>
                        Modelos   
                    </span>
                </Link>
            </div>
            <div className="panel-block">
                <Link to="/test" className='button is-fullwidth'>
                    <span className='icon'>
                        <i className='fas fa-users'></i>
                    </span>
                    <span>
                        Test   
                    </span>
                </Link>
            </div>
        </nav>
    );
}
 
export default Menu;