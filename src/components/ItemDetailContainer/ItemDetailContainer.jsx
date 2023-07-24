import { useEffect, useState } from "react";
import { getItem } from "../../mock/data"
import ItemDetail from "./ItemDetail";
function ItemDetailContainer() {
  const [producto, setProducto] = useState({})

  useEffect(() => {
    getItem()
      .then((res) => setProducto(res))
      .catch((error) => console.log(error))
  }, [])

  return (

    <div>
      <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer;