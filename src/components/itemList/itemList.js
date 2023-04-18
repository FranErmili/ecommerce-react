import Item from "../item/item"
import "./itemList.css"

const ItemList = ({ products }) => {
    return(
        <div className="products-container">
            {Array.isArray(products) && products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;