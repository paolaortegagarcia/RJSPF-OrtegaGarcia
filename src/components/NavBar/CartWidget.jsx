import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/cartwidget.css";
function CartWidget() {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-icon" style={{ display: cantidadTotal() > 0 ? "block" : "none" }}>
      <i className="bi bi-bag-heart-fill" style={{ color: 'white' }} />
      <span className="total">{cantidadTotal()}</span>
    </Link>
  );
}

export default CartWidget;
