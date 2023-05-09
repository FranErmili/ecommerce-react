import './itemListContainer.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../firestoreService/firebaseConfig';

import ItemList from '../itemList/itemList';


const ItemListContainer = ({ greeting }) => {

    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([true])


    useEffect(() => {
        setLoading(true)

        const collectionRef = category
            ? query(collection(db, 'products'), where('category', '==', category))
            : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [category])

    return (
        <div className='container-father'>
            {loading ? (
                <div className='loader-container'>
                    <span className='text-loader'>Cargando...</span>
                    <div className='loader'></div>
                </div>
            ) : (
                <div className='itemList-container'>
                    <h1>{greeting} {category}</h1>
                    <ItemList products={products}></ItemList>
                </div>
            )}
        </div>
    );
};
export default ItemListContainer;