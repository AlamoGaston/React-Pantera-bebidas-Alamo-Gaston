import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos a tu compra.`);
  };

  return (
    <div className="container">
      <div className="detail">
        <img className="detail__image" src={data.image} alt="" />
        <div className="content">
          <h1>{data.name}</h1>
          <h2>{data.description}</h2>
          <ItemCount initial={0} stock={data.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
