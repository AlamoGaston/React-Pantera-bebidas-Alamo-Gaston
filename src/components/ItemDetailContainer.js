import React, { useEffect, useState } from "react";
//import ItemCount from "./ItemCount";
import drinks from "../utils/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(drinks);
      }, 2000);
    });
    getData.then((res) =>
      setData(res.find((drink) => drink.id === parseInt(id)))
    );
  }, []);

  return (
    <>
      <ItemDetail data={data} />;
    </>
  );
};

export default ItemDetailContainer;
