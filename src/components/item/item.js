import "./item.css"
import {Link} from 'react-router-dom';

const Item = ({id, nombre, precio, imgUrl, tipo}) => {
    return (
        <div className="card-container">
            <div>
                <h2 className="card-tittle">{nombre}</h2>
            </div>
            <picture>
                <img className="card-img" src={imgUrl} alt={nombre}/>
            </picture>
            <div>
                <p className="card-price">
                    Precio: $ {precio}
                </p>
            </div>
            <div>
                <Link className="btn-item-detail" to={`/item/${id}`}>Ver Detalle</Link>
            </div>
        </div>
    )
}

export default Item