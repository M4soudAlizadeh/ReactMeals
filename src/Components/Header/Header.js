import React from "react";
import styles from "./Header.module.css";
import YourCart from "./YourCart";
const Header = (props) => {
  const cheakClickCartHandler = () => {
    props.cheakClickCart();
  };
  return (
    <header className={styles.header}>
      <label>ReactMeals</label>
      <YourCart cheakClickCart={cheakClickCartHandler} />
    </header>
  );
};
export default Header;
