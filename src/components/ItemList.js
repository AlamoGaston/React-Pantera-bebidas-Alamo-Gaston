import React from "react";
import Item from "./Item";
import { Spinner } from "react-bootstrap";
const ItemList = ({ data = [] }) => {
  return (
    <>
      {data.length > 0 ? (
        data.map((drink) => (
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
        ))
      ) : (
        <Spinner animation="border" role="status" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default ItemList;
