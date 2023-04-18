import './itemDetail.css';
import ItemCount from '../itemCount/itemCount';

const ItemDetail = ({ nombre, precio, ingredientes, imgUrl}) => {
    return ( 
        <div className="card-item-detail-container"> 
            <div>
                <h2 className='item-detal-tittle'>{nombre}</h2>
            </div>
            <picture>
                <img className="item-detail-img" src={imgUrl} alt={nombre}/>
            </picture>
             
            <div>
                <p className='item-detail-description'>{ingredientes}</p>
            </div>

            <div>
                <h3 className='item-detail-price'>Precio: $ {precio}</h3>
            </div>

            <ItemCount initialStock={15}/>
        </div>
    )
}

export default ItemDetail