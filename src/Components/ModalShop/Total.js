import { useContext } from "react";
import CartContext from "../store/cart-context";
import styles from "./Total.module.css";
const Total = (props) => {
  const ctx = useContext(CartContext);
  const closeModalShopHandler = () => {
    props.closeModalShop();
  };
  const clickOrderHandler = () => {
    console.log("Ordering...!");
  };
  const valid = ctx.items.length > 0;
  return (
    <>
      <section className={styles.total}>
        <label>Total Amount</label>
        <span>${ctx.totalAmount}</span>
      </section>
      {valid && (
        <button onClick={clickOrderHandler} className={styles.order}>
          Order
        </button>
      )}
      <button onClick={closeModalShopHandler}>Close</button>
    </>
  );
};
export default Total;
