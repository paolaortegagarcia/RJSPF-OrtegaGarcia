import { useState } from "react";
import { Button } from "react-bootstrap";
function ItemCount({ stock, onAdd }) {

  const [count, setCount] = useState(0);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <div className="botonesSumarRestar d-flex align-items-center justify-content-center">
        <i
          className="bi bi-dash-lg"
          onClick={restar}></i>

        <span className="btn">{count}</span>

        <i
          className="bi bi-plus-lg"
          onClick={sumar}></i>
      </div>
      <Button
        variant="dark"
        onClick={() => onAdd(count)}
        disabled={count === 0}>Comprar</Button>
    </div>
  )
}

export default ItemCount;