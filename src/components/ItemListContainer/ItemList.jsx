import Item from "./Item";


function Itemlist({ products }) {
  if (!products) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="d-flex align-items-center flex-wrap">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Itemlist;