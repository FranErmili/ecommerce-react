import './checkout.css'
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { db } from '../../firestoreService/firebaseConfig';
import { Timestamp, addDoc, collection, where, getDocs, query, writeBatch, doc, getDoc } from "firebase/firestore";
import CheckOutForm from '../checkoutForm/checktoutForm.js';


const Checkout = ({ greeting }) => {
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [showForm, setShowForm] = useState(true)

  const { cartList, clearCart, } = useContext(CartContext)

  const createOrder = async ({ fullName, phone, email }) => {
    setLoading(true)

    try {
      const total = cartList.reduce((acc, item) => acc + (item.price * item.quantity), 0);

      const objOrder = {
        userData: {
          fullName,
          phone,
          email,

        },
        items: cartList,
        total: total,
        date: Timestamp.fromDate(new Date()),

      }

      const batch = writeBatch(db)
      const outOfStock = []

      const ids = cartList.map((prod) => prod.id)
      const productsRef = collection(db, 'products')
      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where('id', 'in', ids))
      )

      const { docs } = productsAddedFromFirestore

      docs.forEach((doc) => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cartList.find((prod) => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity })
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc })
        }
      })

      if (outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, 'orders')
        const orderAdded = await addDoc(orderRef, objOrder)

        setOrderId(orderAdded.id)
        clearCart()
        setShowForm(false);
      }
    } catch (error) {
      console.error('Error al crear la orden:', error)
    } finally {
      setLoading(false)
    }


    return (
      <div>
        <h2>Muchas gracias por tu pedido</h2>
        <p>El ID de su compra es: <strong>{orderId}</strong></p>
      </div>
    )
  }

  return (
    <main className="container-father">
      <div className="checkout-container">
        <h1>{greeting}</h1>
        {showForm && <CheckOutForm onConfirm={createOrder} />}
        {!showForm && orderId && <div>
        <h2>Muchas gracias por tu pedido</h2>
        <p>El ID de su compra es: <strong>{orderId}</strong></p>
      </div>}
        {loading && (
          <div className="loader-container">
            <span className="text-loader">Procesando orden</span>
            <div className="loader"></div>
          </div>
        )}
      </div>
    </main>
  )

}
export default Checkout;
