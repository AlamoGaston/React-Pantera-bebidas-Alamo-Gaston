import React, { useEffect, useState } from "react";
import drinks from "../utils/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(drinks);
      }, 500);
    });
    getData.then((res) =>
      setData(res.find((drink) => drink.id === parseInt(itemId)))
    );
  }, [itemId]);

  return (
    <>
      <ItemDetail data={data} />;
    </>
  );
};

export default ItemDetailContainer;
