import { useContext } from 'react';
import CartIcon from './cart-icon.svg';
import './cartWidget.css';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='cartButtom' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='cartIcon' src={CartIcon} />{totalQuantity}
        </Link>
    )
}

export default CartWidget