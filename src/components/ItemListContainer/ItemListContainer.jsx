import ItemList from "./ItemList.jsx";
import "./css/itemlistcontainer.css";
import { useParams } from "react-router-dom";
import useGetCollectionById from "../../hooks/useGetCollectionById.jsx";


function ItemListContainer({ greeting }) {
  const { categoryKey } = useParams();
  const { collectionData } = useGetCollectionById(categoryKey);


  return (
    <div>
      {
        !collectionData ?
          <p>Cargando...</p> :
          <div>
            <h2>{greeting} <span>{categoryKey && categoryKey}</span></h2>
            <div className="contenedor">
              <ItemList
                products={collectionData} />
            </div>
          </div>

      }
    </div>
  )
}

export default ItemListContainer;