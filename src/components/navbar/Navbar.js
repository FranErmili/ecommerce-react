import './Navbar.css';
import CartWidget from '../cartWidget/cartWidget.js';
import logo from './assets/logo-mcdelivery.svg'

const NavBar = () => {
    return (
        <nav className="navbarContainer">
            <div className='header'>
                <div>
                    <img src={logo} alt="logo Fran burguers"/>
                </div>
                <div>
                    <h3>Hacé tu pedido aquí</h3>
                </div>
                <CartWidget/>
            </div>

            <div className='menuContainer'>
                <ul className="listContainer">
                    <li className="listItemContainer">
                        <a href='' className='listItem'>Promociones</a>
                    </li>
                    <li className="listItemContainer">
                    <a href='' className='listItem'>Combos</a>
                    </li>
                    <li className="listItemContainer">
                    <a href='' className='listItem'>Hamburguesas</a>
                    </li>
                    <li className="listItemContainer">
                    <a href='' className='listItem'>Bebidas</a>
                    </li>
                    <li className="listItemContainer">
                    <a href='' className='listItem'>Acompañamiento</a>
                    </li>
                    <li className="listItemContainer">
                    <a href='' className='listItem'>Helados</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export default NavBar