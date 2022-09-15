import React, { useEffect } from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Cart = () => {
  const test = useContext(CartContext);
  // console.log(test);

  useEffect(() => {});

  return (
    <>
      <div className="container">
        <h1 className="cart__tittle">Tu Compra</h1>
        <div className="row">
          <div className="col col1">
            <div>
              <Link to="/">
                <Button variant="primary" size="lg" active>
                  Continuar comprando
                </Button>
              </Link>
            </div>
            <br />
            <div>
              {test.cartList.length > 0 ? (
                <Button variant="outline-danger" size="lg" onClick={test.clear}>
                  Quitar todo
                </Button>
              ) : (
                <h3 className="emptyCart">Tu carrito esta vacio</h3>
              )}
            </div>
          </div>
          <div className="col col2">
            {test.cartList.map((item) => (
              <div key={item.id}>
                <img className="cart2" src={item.image} alt="" />
                <h1>
                  {item.name}: {item.qty}{" "}
                  <Button
                    variant="danger"
                    onClick={() => test.removeItem(item.id)}
                  >
                    X
                  </Button>
                </h1>
                <p>Precio por unidad: ${item.price}</p>
                <p>Subtotal: ${item.qty * item.price}</p>
              </div>
            ))}
          </div>
          <div className="col col3">
            <Card className="text-center">
              <Card.Header>Total a abonar</Card.Header>
              <Card.Body>
                <Card.Title>Total: ${test.total()}</Card.Title>

                <Button variant="outline-success" size="lg">
                  Abonar
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
