import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import useCart from "../../context/useCart";
import "./css/cartwidget.css"

function CartWidget() {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className="cart-icon">
      <i className="bi bi-bag-heart-fill" style={{ color: "white" }} />
      {totalQuantity() > 0 && <span className="total">{totalQuantity()}</span>}
    </Link>
  );
}

export default CartWidget;
