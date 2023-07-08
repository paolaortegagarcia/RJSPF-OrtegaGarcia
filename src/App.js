import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting="Tienes 0 Productos en el Carrito!" />
        </div>
    );
}

export default App;
