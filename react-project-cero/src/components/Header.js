import React, { Component } from 'react';
import { BrowserRouter, Route, Router, Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <BrowserRouter>
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
                        <Link to='/contact'>Contacto</Link>
                        </li>
                        <li>
                        <Link to='/workwithus'>¡Trabaja con nosotros!</Link>
                        </li>
                    </ul>
                    <div className='clearfix'></div>
                </header>
            </BrowserRouter>
        );
    }
}
export default Header;