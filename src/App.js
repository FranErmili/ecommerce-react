import './reset.css';
import NavBar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer.js';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/context/cartContext';
import Cart from './components/cart/cart';

function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Todos nuestros productos"}/>}/>
            <Route path='/category/:category' element={<ItemListContainer greeting={"Todos nuestros productos"}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer greeting={"Agregue al carrito"}/>} />
            <Route path='/cart'element={<Cart greeting={"Estás muy cerca"}/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}


export default App;
