import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { firestoreList } from "../utils/firebaseConfig";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { drinkId } = useParams();

  useEffect(() => {
    firestoreList(drinkId).then((res) => setData(res));
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
