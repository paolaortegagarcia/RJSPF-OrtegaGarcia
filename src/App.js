import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting="Bienvenid@" />
            <ItemDetailContainer />
        </div>
    );
}

export default App;
