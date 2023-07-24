import ItemCount from "./ItemCount";
function ItemDetail({ producto }) {

  const onAdd = (cantidad) => {
    console.log(`agregaste al carrito ${cantidad} producto(s)`);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h3>Detalle de: {producto.name}</h3>
      <img src={producto.img} alt={producto.name} />
      <p>{producto.description}</p>
      <p>${producto.price}</p>
      <ItemCount
        stock={producto.stock}
        onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail;