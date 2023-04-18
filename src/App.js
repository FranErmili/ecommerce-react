import './reset.css';
import NavBar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer.js';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Seleccione sus productos"}/>}/>
          <Route path='/category/:categoryName' element={<ItemListContainer greeting={"Seleccione sus productos"}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer greeting={"Seleccione sus productos"}/>} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
