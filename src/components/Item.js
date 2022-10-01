import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Item({ info }) {
  return (
    <Card style={{ width: "20rem" }} className="list">
      <Card.Img variant="top" src={info.image} />
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Card.Text>${info.price}</Card.Text>
        <Link to={`/detail/${info.id}`}>
          <Button variant="primary">Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
