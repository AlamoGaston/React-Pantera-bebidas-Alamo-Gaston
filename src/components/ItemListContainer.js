import React, { useEffect, useState } from "react";
import drinks from "../utils/data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { drinkId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(drinks);
      }, 500);
    });
    if (drinkId) {
      getData.then((res) =>
        setData(res.filter((drink) => drink.category === drinkId))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [drinkId]);

  return (
    <>
      <div className="ItemListCon">
        <Container>
          <Row md={4}>
            <ItemList data={data} />
            <Col></Col>
            <Col xs={6}></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ItemListContainer;
