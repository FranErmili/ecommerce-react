import "./itemDetailContainer.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firestoreService/firebaseConfig';

import ItemDetail from "../itemDetail/itemDetail";


const ItemDetailContainer = ({ greeting }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, "products", itemId)
    
        getDoc(docRef)
          .then(response => {
            const data = response.data();
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted);
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      }, [itemId]);

    return (
    <div className="container-father">
      {loading ? (
        <div className="loader-container">
          <span className="text-loader">Cargando...</span>
          <div className="loader"></div>
        </div>
      ) : (
        <div className="item-detail-container">
          <h1>{greeting}</h1>
          <ItemDetail {...product } />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;