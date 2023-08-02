// Este es el map para hacer la cantidad de cards necesarias segun mis items

import Item from "./Item";


function Itemlist({ productos }) {
  return (
    <div className="d-flex align-items-center flex-wrap">
      {productos.map((producto) => <Item key={producto.key} producto={producto} />)}
    </div>
  )
}

export default Itemlist;