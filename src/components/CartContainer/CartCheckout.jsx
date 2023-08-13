import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import "./css/cartcheckout.css";
import useCart from '../../Context/useCart';

function CartCheckout() {
  const { clear } = useCart();
  const { orderId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="cart-checkout-container">
      <h3>Gracias por Comprar en Memini!!</h3>
      <h5>Tu pedido está siendo preparado con este ID:</h5>
      <div className="center-content">
        {loading ? (
          <p>Cargando el ID de envío...</p>
        ) : (
          <div>
            <p>{orderId}</p>
            <div>
              <Button as={Link} to="/" variant="dark" onClick={clear}>Volver al Inicio</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartCheckout;
