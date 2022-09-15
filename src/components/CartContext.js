import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]); //Estado local

  /*--addItem--*/

  const addItem = (data, qty) => {
    let itemForCart;
    let sum = cartList.find((sum) => sum.id === data.id);
    if (sum) {
      sum.qty += qty;
      itemForCart = [...cartList];
    } else {
      sum = { ...data, qty: qty };
      itemForCart = [...cartList, sum];
    }
    setCartList(itemForCart);
  };

  /*--removeItem--*/

  const removeItem = (id) =>
    setCartList(cartList.filter((data) => data.id !== id));

  /*--clear--*/
  const clear = () => {
    setCartList([]);
  };

  /*--isInCart--*/

  const isInCart = (id) =>
    cartList.find((data) => data.id === id) ? true : false;

  /*--total--*/

  const total = () => {
    return cartList.reduce(
      (prev, current) => prev + current.qty * current.price,
      0
    );
  };

  /*--productsCart--*/

  const productsCart = () =>
    cartList.reduce((accumulated, selection) => accumulated + selection.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clear,
        isInCart,
        total,
        productsCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
