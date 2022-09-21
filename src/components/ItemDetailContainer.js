import React, { useEffect, useState } from "react";
//import drinks from "../utils/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
//import { doc, getDoc } from "firebase/firestore";
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
