import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";
import "../App.css";

const ItemDetail = ({ data }) => {
  const [itemCount, setItemCount] = useState(0);
  const buy = useContext(CartContext);

  const onAdd = (qty) => {
    Swal.fire(`Agregaste ${qty} productos a tu compra`, "Continuar", "success");
    setItemCount(qty);
    buy.addItem(data, qty);
  };

  return (
    <>
      {data && data.image ? (
        <div className="container1">
          <div className="row">
            <div className="detail">
              <div className="col">
                <img className="detail__image" src={data.image} alt="" />
              </div>
              <div className="col">
                <div className="content">
                  <h1>{data.name}</h1>
                  <h2>${data.price}</h2>
                  <br />
                  <h2>{data.description}</h2>
                  <br />
                  <h4>{data.stock} unidades disponibles</h4>
                  <br />
                  {itemCount === 0 ? (
                    <ItemCount
                      initial={itemCount}
                      stock={data.stock}
                      onAdd={onAdd}
                    />
                  ) : (
                    <div>
                      <div>
                        <Link to="/cart">
                          <Button variant="success" size="lg">
                            Ir al carrito
                          </Button>
                        </Link>
                      </div>
                      <br />
                      <div>
                        <Link to="/">
                          <Button variant="primary" size="lg">
                            Continuar comprando
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner animation="border" role="status" variant="light">
          <span className="visually-hidden">Loading...</span>{" "}
        </Spinner>
      )}
    </>
  );
};

export default ItemDetail;
