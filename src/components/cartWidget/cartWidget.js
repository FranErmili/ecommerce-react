import CartIcon from './cart-icon.svg';
import './cartWidget.css';

const CartWidget = () => {
    return (
        <div>
            <button className='cartButtom'>
                <img className='cartIcon' src={CartIcon} />
                2
            </button>
        </div>
    )
}

export default CartWidget