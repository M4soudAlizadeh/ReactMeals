import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartContext = { items: [], totalAmount: 0 };

const cartContextReducer = (state, action) => {
  if (action.type === "add") {
    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existCartItem = state.items[existCartItemIndex];
    let updateItems;

    if (existCartItem) {
      const updateItem = {
        ...existCartItem,
        amount: existCartItem.amount + 1,
      };
      updateItems = [...state.items];
      updateItems[existCartItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }
    return {
      items: updateItems,
      totalAmount: totalAmount,
    };
  }
  if (action.type === "remove") {
    const existCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existCartItem = state.items[existCartItemIndex];
    const totalAmount = state.totalAmount - existCartItem.price;
    let updateItems;

    console.log(action.id);
    if (existCartItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = {
        ...existCartItem,
        amount: existCartItem.amount - 1,
      };
      updateItems = [...state.items];
      updateItems[existCartItemIndex] = updateItem;
    }
    return {
      items: updateItems,
      totalAmount: totalAmount,
    };
  }
  return defaultCartContext;
};

const CartContextProvider = (props) => {
  const [stateCartContext, dispatchCartContextAction] = useReducer(
    cartContextReducer,
    defaultCartContext
  );
  const updateAmout = (item) => {
    dispatchCartContextAction({ type: "add", item: item });
  };
  const removeAmout = (id) => {
    dispatchCartContextAction({ type: "remove", id: id });
  };

  const cartContext = {
    items: stateCartContext.items,
    totalAmount: stateCartContext.totalAmount.toFixed(2),
    addItem: updateAmout,
    removeAmountItem: removeAmout,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
