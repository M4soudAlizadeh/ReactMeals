import React, { useState, useContext } from "react";
import Button from "../Button/Button";
import CartContext from "../store/cart-context";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const ctxCart = useContext(CartContext);
  const [amountInput, setAmountInput] = useState(1);
  const inputChangeAmountHandler = (e) => {
    setAmountInput(e.target.value);
  };
  const buttonAddAmountCartHandler = () => {
    const dataMealItem = {
      title: props.title,
      id: props.id,
      price: props.price,
      amount: +amountInput,
    };
    ctxCart.addItem(dataMealItem);
  };

  return (
    <li className={styles["meal-list"]}>
      <section className={styles["meal-list_part1"]}>
        <h5>{props.title}</h5>
        <p>{props.describ}</p>
        <h4>${props.price}</h4>
      </section>
      <section className={styles["meal-list_part2"]}>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amountInput}
            min={1}
            max={10}
            onChange={inputChangeAmountHandler}
          />
        </div>
        <Button onClick={buttonAddAmountCartHandler}>+Add</Button>
      </section>
    </li>
  );
};
export default MealItem;
