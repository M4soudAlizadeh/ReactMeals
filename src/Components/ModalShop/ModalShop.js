import React, { useContext } from "react";
import Card from "../Card/Card";
import ModalShopItem from "./ModalShopItem";
import styles from "./ModalShop.module.css";
import Total from "./Total";
import CartContext from "../store/cart-context";
const ModalShop = (props) => {
  const ctx = useContext(CartContext);

  const closeModalShopHandler = () => {
    props.closeModalShop();
  };
  const addAmountItem = (item) => {
    ctx.addItem(item);
  };
  const removeAmountItem = (id) => {
    ctx.removeAmountItem(id);
  };

  return (
    <>
      <div
        onClick={closeModalShopHandler}
        className={styles["modal-overlay"]}
      />
      <Card className={styles["modal-shop"]}>
        {ctx.items.map((e) => (
          <ModalShopItem
            key={e.id}
            id={e.id}
            name={e.name}
            amount={e.amount}
            price={e.price}
            onRemove={removeAmountItem.bind(null, e.id)}
            onAdd={addAmountItem.bind(null, e)}
          />
        ))}
        <Total closeModalShop={closeModalShopHandler}></Total>
      </Card>
    </>
  );
};
export default ModalShop;
