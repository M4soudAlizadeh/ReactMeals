import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import styles from "./YourCart.module.css";

const YourCart = (props) => {
  const ctx = useContext(CartContext);
  const cheakYourCartHandler = () => {
    props.cheakClickCart();
  };

  const numberOfCartItems = ctx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <section className={styles.section} onClick={cheakYourCartHandler}>
      <label>
        Your Cart<span>{numberOfCartItems}</span>
      </label>
    </section>
  );
};
export default YourCart;
