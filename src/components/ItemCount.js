import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <Button variant="danger" onClick={decrement}>
        -
      </Button>
      {"  "}
      <span className="itemCount"> {count} </span>
      <Button variant="success" onClick={increment}>
        +
      </Button>{" "}
      <div>
        {stock && count ? (
          <Button variant="danger" onClick={() => onAdd(count)}>
            Agregar al carrito
          </Button>
        ) : (
          <Button variant="outline-info" disabled>
            Agregar al carrito
          </Button>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
