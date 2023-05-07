import "./item.css"
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, imgUrl }) => {
    return (
        <div className="card-container">
            <img className="card-img" src={imgUrl} alt={name} />
            <h3 className="card-tittle">{name}</h3>
            <p className="card-price">
                Precio: $ {price}
            </p>
            <Link className="btn-item-detail" to={`/item/${id}`}>Ver Detalle</Link>
        </div>
    )
}

export default Item