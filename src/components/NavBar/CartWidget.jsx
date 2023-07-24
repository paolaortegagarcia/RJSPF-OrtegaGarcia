
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/cartwidget.css";


function CartWidget() {
  return (
    <i className="bi bi-bag-heart-fill" style={{ color: 'white' }}>
      <span>0</span>
    </i>
  );
}

export default CartWidget;
