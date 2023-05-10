import "./itemDetailContainer.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getDoc, doc, getDocs, collection } from 'firebase/firestore';
import { db } from '../../firestoreService/firebaseConfig';

import ItemDetail from "../itemDetail/itemDetail";


const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId)
    const collectionRef = collection(db, 'products');

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

    getDocs(collectionRef).then((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        const product = { id: doc.id, ...doc.data() };
        return product;
      });
      const productById = products.find((product) => product.id === itemId);
      setProduct(productById);
      setLoading(false);
    });
  }, [itemId]);

  return (
    <main className="container-father">
      {loading ? (
        <div className="loader-container">
          <span className="text-loader">Cargando...</span>
          <div className="loader"></div>
        </div>
      ) : (
        <div className="item-detail-container">
          <h1>{greeting}</h1>
          {product ? <ItemDetail {...product} /> : <h2>Ese producto no existe.</h2>}
        </div>
      )}
    </main>
  );

};

export default ItemDetailContainer;
