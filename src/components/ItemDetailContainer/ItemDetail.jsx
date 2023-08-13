import ItemCount from "./ItemCount";
import "./css/itemdetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import useCart from "../../Context/useCart";

function ItemDetail({ product }) {
  const { addItem } = useCart();
  const [quantityAdded, setQuantityAdded] = useState(0);

  const onAdd = (quantity) => {
    addItem({
      id: product.id,
      category: product.category,
      name: product.name,
      price: product.price,
    }, quantity);
    setQuantityAdded(quantity);
  }

  return (
    <div>
      <h3>Detalle de: {product.name}</h3>
      <div className="item-detail-container">
        <div className="item-image">
          <img src={product.img} alt={product.name} className="productImg" />
        </div>
        <div className="item-details">
          <p>{product.description}</p>
          <p>${product.price}</p>
          <div className="actualizarCarrito">
            {
              quantityAdded > 0 ? (
                <div className="botonesOpciones">
                  <Button as={Link} to="/" variant="dark">Seguir Comprando</Button>
                  <Button as={Link} to="/cart" variant="dark">Ir al Carrito</Button>
                </div>
              ) : (
                <ItemCount stock={product.stock} onAdd={onAdd} />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;
