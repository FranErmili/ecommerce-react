import "./itemDetailContainer.css";
import { getProductById } from '../../asyncMock'
import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams ()

    useEffect (() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })

            .catch(error => {
                console.error(error)
            })
    }, [itemId])
    
    return (
        <div className="item-detail-container">
            {product ? <ItemDetail {...product} /> : <p>Cargando...</p>}
        </div>
    )
}

export default ItemDetailContainer

