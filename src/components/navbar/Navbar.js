import './Navbar.css';

import CartWidget from '../cartWidget/cartWidget.js';
import logo from './assets/logo-mcdelivery.svg'
import MenuIcon from './assets/menu-icon.svg'

import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';


const NavBar = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    const [classname, setClassname] = useState('menuContainer');
    
    const openMenu = () => {
        setClassname(classname === 'menuContainer' ? 'menuContainer openMenu' : 'menuContainer');
    }

    return (
        <nav className="navbarContainer">
            <div className='header'>
                <button onClick={openMenu} className='menu-icon'>
                    <img src={MenuIcon} ></img>
                </button>
                <Link to="/">
                    <img src={logo} alt="logo Fran burguers" />
                </Link>
                <div>
                    <h3>Hacé tu pedido aquí</h3>
                </div>
                <CartWidget />
            </div>

            <div className={classname}>
                <div className="listContainer">
                    <div className={currentPath === '/category/Promociones' ? 'listItemContainer active' : 'listItemContainer'} >
                        <NavLink exact className='listItem' to={`/category/Promociones`} >Promociones</NavLink>
                    </div>
                    <div className={currentPath === '/category/Combos' ? 'listItemContainer active' : 'listItemContainer'}>
                        <NavLink exact className='listItem' to={`/category/Combos`}  >Combos</NavLink>
                    </div>
                    <div className={currentPath === '/category/Hamburguesas' ? 'listItemContainer active' : 'listItemContainer'}>
                        <NavLink exact className='listItem' to={`/category/Hamburguesas`} >Hamburguesas</NavLink>
                    </div>
                    <div className={currentPath === '/category/Bebidas' ? 'listItemContainer active' : 'listItemContainer'}>
                        <NavLink exact className='listItem' to={`/category/Bebidas`} >Bebidas</NavLink>
                    </div>
                    <div className={currentPath === '/category/Acompañamientos' ? 'listItemContainer active' : 'listItemContainer'}>
                        <NavLink exact className='listItem' to={`/category/Acompañamientos`} >Acompañamientos</NavLink>
                    </div>
                    <div className={currentPath === '/category/Helados' ? 'listItemContainer active' : 'listItemContainer'}>
                        <NavLink exact className='listItem' to={`/category/Helados`} >Helados</NavLink>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default NavBar