import './reset.css';
import NavBar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido"}/>
    </div>
  );
}

export default App;
