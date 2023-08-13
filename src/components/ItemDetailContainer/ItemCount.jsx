import { useState } from "react";
import { Button } from "react-bootstrap";
function ItemCount({ stock, onAdd }) {

  const [count, setCount] = useState(0);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  const substract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="botonesSumarRestar d-flex align-items-center justify-content-center">
        <i
          className="bi bi-dash-lg"
          onClick={substract}></i>

        <span className="btn">{count}</span>

        <i
          className="bi bi-plus-lg"
          onClick={add}></i>
      </div>
      <Button

        variant="dark"
        onClick={() => onAdd(count)}
        disabled={count === 0}>Comprar</Button>
    </div>
  )
}

export default ItemCount;