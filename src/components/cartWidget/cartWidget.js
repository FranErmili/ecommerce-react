import './cartWidget.css';
import CartIcon from './cart-icon.svg';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../context/cartContext';


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
  
    return (
      <Link to="/cart" className="cartButton">
        <img className="cartIcon" src={CartIcon} />
        <strong>{totalQuantity}</strong>
        
      </Link>
    );
  };
  
  export default CartWidget;
// style={{display: totalQuantity > 0 ? 'block' : 'none'}}