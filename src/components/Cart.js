import React, { useEffect } from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {
  const test = useContext(CartContext);
  // console.log(test);

  useEffect(() => {});

  return (
    <>
      <div className="container">
        <h1 className="cart__tittle">Tu Compra</h1>
        <div className="row">
          <div className="col">
            <Link to="/">
              <Button variant="primary" size="lg" active>
                Continuar comprando
              </Button>
            </Link>
          </div>
          <div className="col">
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
              </div>
            ))}
            {test.cartList.length > 0 ? (
              <Button variant="outline-danger" onClick={test.clear}>
                Quitar todo
              </Button>
            ) : (
              <h3 className="emptyCart px-5">Tu carrito esta vacio</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
