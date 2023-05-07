import "./itemList.css"
import Item from "../item/item"

const ItemList = ({ products }) => {
    return(
        <div className="products-container">
            {Array.isArray(products) && products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;