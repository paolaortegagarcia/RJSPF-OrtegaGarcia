import ItemList from "./ItemList.jsx";
import { getProducts } from "../../mock/data.js";
import "./css/itemlistcontainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//usar postimage para las imagenes en un futuro

function ItemListContainer({ greeting }) {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryKey } = useParams();

  useEffect(() => {
    setLoading(true)
    getProducts()
      .then((res) => {
        if (categoryKey) {
          setProductos(res.filter((item) => item.category === categoryKey))
        } else {
          setProductos(res)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [categoryKey])


  return (
    <div>
      {
        loading ?
          <p>Cargando...</p> :
          <div className="contenedor">
            <h2>{greeting} <span>{categoryKey && categoryKey}</span></h2>
            <ItemList
              productos={productos} />
          </div>
      }
    </div>
  )
}

export default ItemListContainer;