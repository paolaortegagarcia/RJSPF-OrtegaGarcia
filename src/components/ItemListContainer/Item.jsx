// Esta es la card de los items

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Item({ producto }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>
          ${producto.price}
        </Card.Text>
        <Button as={Link} to={`/item/${producto.key}`} variant="dark">Ver más</Button>
      </Card.Body>
    </Card>
  )
}

export default Item;