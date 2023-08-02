import { useEffect, useState } from "react";
import { getItem } from "../../mock/data"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
function ItemDetailContainer() {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(false);
  const { key } = useParams()

  useEffect(() => {
    setLoading(true)
    getItem(key)
      .then((res) => setProducto(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [key])

  return (

    <div>
      {loading ? <p>Cargando...</p> : <ItemDetail producto={producto} />}
    </div>
  )
}

export default ItemDetailContainer;