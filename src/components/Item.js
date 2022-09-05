import React from "react";
import ItemCount from "./ItemCount";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Item({ info }) {
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos a tu compra.`);
  };

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={info.image} />
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Card.Text>${info.price}</Card.Text>
        <ItemCount stock={info.stock} initial={0} onAdd={onAdd} />
        <Link to={`/detail/${info.id}`}>
          <Button variant="primary">Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
