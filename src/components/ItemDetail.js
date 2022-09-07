import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos a tu compra.`);
    setItemCount(qty);
  };

  return (
    <>
      {data && data.image ? (
        <div className="container">
          <div className="detail">
            <img className="detail__image" src={data.image} alt="" />
            <div className="content">
              <h1>{data.name}</h1>
              <h2>{data.description}</h2>
              {itemCount === 0 ? (
                <ItemCount initial={0} stock={data.stock} onAdd={onAdd} />
              ) : (
                <Link to="/cart">
                  <Button variant="success">CheckOut</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        // <p>cargando...</p>
      )}
    </>
  );
};

export default ItemDetail;
