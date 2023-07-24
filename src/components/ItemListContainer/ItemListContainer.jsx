import ItemList from "./ItemList.jsx";
import { getProducts } from "../../mock/data.js";
import "../styles/itemlistcontainer.css";
import { useEffect, useState } from "react";

//usar postimage para las imagenes en un futuro

function ItemListContainer({ greeting }) {

  const [productos, setProductos] = useState([]);


  useEffect(() => {
    getProducts()
      .then((res) => setProductos(res))
      .catch((error) => console.log(error))
  }, [])


  return (
    <div className="contenedor">
      <h2>{greeting}</h2>
      <ItemList
        productos={productos} />


    </div>
  )
}

export default ItemListContainer;