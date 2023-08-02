import ItemCount from "./ItemCount";
import "../styles/itemdetail.css"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
function ItemDetail({ producto }) {
  const { addItem } = useContext(CartContext);

  const [cantidadAgregada, setCantidadAgregada] = useState(0);

  const onAdd = (cantidad) => {

    addItem({
      key: producto.key,
      category: producto.category,
      name: producto.name,
      price: producto.price,
    }, cantidad);
    setCantidadAgregada(cantidad);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h3>Detalle de: {producto.name}</h3>
      <img src={producto.img} alt={producto.name} className="productoImg" />
      <p>{producto.description}</p>
      <p>${producto.price}</p>
      <div className="actualizarCarrito">
        {
          cantidadAgregada > 0 ? (
            <div className="botonesOpciones">
              <Button as={Link} to="/" variant="dark">Seguir Comprando</Button>
              <Button as={Link} to="/cart" variant="dark">Ir al Carrito</Button>
            </div>
          ) : (
            <ItemCount
              stock={producto.stock}
              onAdd={onAdd} />
          )

        }
      </div>
    </div>
  )
}

export default ItemDetail;