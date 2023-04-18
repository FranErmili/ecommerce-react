import { useEffect, useState } from 'react'
import './itemListContainer.css'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../itemList/itemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {
        const asyncFunc = categoryName ? getProductsByCategory : getProducts;
        
        asyncFunc(categoryName)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.log(error);
            });
    }, [categoryName]);

    return (
        <div>
            <h1 className="h1">{greeting}</h1>
            <ItemList products={products}></ItemList>
        </div>
    );
};

export default ItemListContainer;