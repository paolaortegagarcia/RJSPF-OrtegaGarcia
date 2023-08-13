import useGetDocumentById from "../../hooks/useGetDocumentById";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { id } = useParams();
  const { document } = useGetDocumentById(id);

  return (
    <div>
      {!document ? <p>Cargando...</p> : <ItemDetail product={document} />}
    </div>
  );
}

export default ItemDetailContainer;
