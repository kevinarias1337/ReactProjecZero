import React from 'react';
import { BrowserRouter, Link, useNavigate } from 'react-router-dom';

export const Header = () => {
    return (
            <header className='Header'>
                <img className='Logo' src={require('../assets/PizzaLogo.png')} alt='Logo' />
                <ul className='nav-menu'>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/menu'>Menu</Link>
                    </li>
                    <li>
                        <Link to='/pokemon'>Pokemon</Link>
                    </li>
                    <li>
                        <Link to='/workwithus'>¡Trabaja con nosotros!</Link>
                    </li>
                </ul>
                <div className='clearfix'></div>
            </header>
    );
}

export default Header;
