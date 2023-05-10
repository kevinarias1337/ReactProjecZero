import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <header className='Header'>
                    <img className='Logo' src={require('../assets/PizzaLogo.png')} alt='Logo' />
                    <ul className='nav-menu'>
                        <li>
                            Inicio
                        </li>
                        <li>
                            Menú
                        </li>
                        <li>
                            Contacto
                        </li>
                        <li>
                            ¡Trabaja con nosotros!
                        </li>
                    </ul>
                    <div className='clearfix'></div>
            </header>
        );
    }
}
export default Header;