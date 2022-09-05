import React from "react";
import Item from "./Item";
//import drinks from "../utils/data";

const ItemList = ({ data = [] }) => {
  return data.map((drink) => (
    <Item
      key={drink.id}
      info={drink}
      img={drink.image}
      id={drink.id}
      name={drink.name}
      price={drink.price}
      stock={drink.stock}
      initial={drink.cantidad}
    />
  ));
};

export default ItemList;
