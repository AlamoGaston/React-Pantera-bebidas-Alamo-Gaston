import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="counter">
      <Button variant="danger" onClick={decrement}>
        -
      </Button>{" "}
      <span className="itemCount">
        {count > stock ? "No disponible " : count}
      </span>
      <Button variant="success" onClick={increment}>
        +
      </Button>{" "}
      <div>
        <Button
          variant="outline-success"
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </Button>
        <div>
          <p className="itemDescription">Disponibles: {stock}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
