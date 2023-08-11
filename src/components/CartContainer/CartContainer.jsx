import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { Button } from "react-bootstrap";
import "./css/cartcontainer.css"

function CartContainer() {
  const { cart, removeItem, clear, precioTotal } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h3>Carrito de Compras</h3>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Oh no! ... Tu carrito está vacío!</p>
          <Button as={Link} to="/" variant="dark">
            Ver Productos
          </Button>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.key}>
              <div className="item-details">
                <p>{item.name}</p>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio por Unidad: ${item.price}</p>
                <Button
                  variant="dark"
                  onClick={() => removeItem(item.key)}
                >
                  Eliminar
                </Button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p>Precio Total: ${precioTotal()}</p>
            <Button variant="dark" onClick={clear}>
              Vaciar Carrito
            </Button>
            <Button as={Link} to="/" variant="dark">
              Seguir Comprando
            </Button>
            <Button as={Link} to="/" variant="outline-dark">
              Terminar mi Compra
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
