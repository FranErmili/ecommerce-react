import './reset.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/context/cartContext';

import NavBar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import ItemListContainer from './components/itemListContainer/itemListContainer.js';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Checkout from './components/checkout/checkout.js'
import Cart from './components/cart/cart';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Todos nuestros productos"}/>}/>
            <Route path='/category/:category' element={<ItemListContainer greeting={'Seleccioná tus '} />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer greeting={"Agregue al carrito"}/>} />
            <Route path='/cart'element={<Cart greeting={"Tu pedido guardado"}/>}/>
            <Route path='/checkout'element={<Checkout greeting={"Estás cerca de disfrutar"}/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}


export default App;
