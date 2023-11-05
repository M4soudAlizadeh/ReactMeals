import React from "react";
import styles from "./ModalShopItem.module.css";

const ModalShopItem = (props) => {
  return (
    <div className={styles["modal-shop__item"]}>
      <section className={styles["modal-shop__item-part1"]}>
        <label>{props.name}</label>
        <p>
          ${props.price}
          <span>x{props.amount}</span>
        </p>
      </section>
      <section className={styles["modal-shop__item-part2"]}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </section>
    </div>
  );
};
export default ModalShopItem;
