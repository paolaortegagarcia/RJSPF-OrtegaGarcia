import './css/itemlistcontainer.css'

function ItemListContainer({greeting}){
  return (
    <div className="contenedor">
    <h2>Bienvenid@!</h2>
    <p>{greeting}</p>
    </div>
  )
}

export default ItemListContainer;