import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreDetail } from "../utils/firebaseConfig";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    firestoreDetail(itemId).then((res) => setData(res));
  }, [itemId]);

  return (
    <>
      <ItemDetail data={data} />;
    </>
  );
};

export default ItemDetailContainer;
