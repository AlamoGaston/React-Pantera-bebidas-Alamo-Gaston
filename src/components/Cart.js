import React, { useEffect } from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import {
  updateDoc,
  setDoc,
  doc,
  collection,
  serverTimestamp,
  increment,
} from "firebase/firestore";
import db from "../utils/firebaseConfig";

const Cart = () => {
  const buy = useContext(CartContext);
  // console.log(buy);

  const createOrder = () => {
    let itemsForDB = buy.cartList.map((item) => ({
      id: item.id,
      tittle: item.name,
      price: item.price,
      qty: item.qty,
    }));

    let order = {
      buyer: {
        name: "Gaston",
        email: "gaston@live.com",
        phone: "11223344",
      },
      date: serverTimestamp(),
      items: itemsForDB,

      total: buy.total(),
    };
    const createOrderInFirebasetore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };
    createOrderInFirebasetore()
      .then((res) => {
        alert("Tu order fue creada" + res.id);
        buy.cartList.forEach(async (item) => {
          const itemRef = doc(db, "drinks", item.id);

          await updateDoc(itemRef, {
            // stock: stock - item.qty
            stock: increment(-item.qty),
          });
        });
        buy.clear();
      })
      .catch((err) => console.log(err));
  };
  // let order = createOrder()

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
              {buy.cartList.length > 0 ? (
                <Button variant="outline-danger" size="lg" onClick={buy.clear}>
                  Quitar todo
                </Button>
              ) : (
                <h3 className="emptyCart">Tu carrito esta vacio</h3>
              )}
            </div>
          </div>
          <div className="col col2">
            {buy.cartList.map((item) => (
              <div key={item.id}>
                <img className="cart2" src={item.image} alt="" />
                <h1>
                  {item.name}: {item.qty}{" "}
                  <Button
                    variant="danger"
                    onClick={() => buy.removeItem(item.id)}
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
                <Card.Title>Total: ${buy.total()}</Card.Title>

                <Button
                  onClick={createOrder}
                  variant="outline-success"
                  size="lg"
                >
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
