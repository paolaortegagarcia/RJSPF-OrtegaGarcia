import Item from "./Item.jsx"
function Itemlist({ productos }) {
  return (
    <div className="d-flex align-items-center flex-wrap">
      {productos.map((producto) => <Item key={producto.key} producto={producto} />)}
    </div>
  )
}

export default Itemlist;