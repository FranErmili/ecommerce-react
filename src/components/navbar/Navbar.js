import './Navbar.css';
import CartWidget from '../cartWidget/cartWidget.js';
import logo from './assets/logo-mcdelivery.svg'
import { NavLink, Link, useLocation } from 'react-router-dom';


const NavBar = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className="navbarContainer">
            <div className='header'>
                <Link to="/">
                    <img src={logo} alt="logo Fran burguers" />
                </Link>
                <div>
                    <h3>Hacé tu pedido aquí</h3>
                </div>
                <CartWidget />
            </div>

            <div className='menuContainer'>
                <div className="listContainer">
                    <div className={currentPath === '/category/Promociones' ? 'listItemContainer active' : 'listItemContainer'} >
                        <NavLink exact className='listItem' to={`/category/Promociones`} >Promociones</NavLink>
                    </div>
                    <div className={currentPath === '/category/Combos' ? 'listItemContainer active' : 'listItemContainer'}>
                        <NavLink exact className='listItem' to={`/category/Combos`}  >Combos</NavLink>
                    </div>
                    <div className={currentPath === '/category/Sandwiches%20y%20Snacks' ? 'listItemContainer active' : 'listItemContainer'}>
                        <NavLink exact className='listItem' to={`/category/Sandwiches y Snacks`} >Hamburguesas</NavLink>
                    </div>
                    <div className={currentPath === '/category/Bebidas' ? 'listItemContainer active' : 'listItemContainer'}>
                        <NavLink exact className='listItem' to={`/category/Bebidas`} >Bebidas</NavLink>
                    </div>
                    <div className={currentPath === '/category/Acompañamientos' ? 'listItemContainer active' : 'listItemContainer'}>
                        <NavLink exact className='listItem' to={`/category/Acompañamientos`} >Acompañamiento</NavLink>
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