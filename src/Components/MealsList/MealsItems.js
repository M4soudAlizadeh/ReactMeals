import React, { useContext } from "react";
import AuthContext from "../store/auth-context";
import Card from "../Card/Card";
import MealItem from "./MealItem";
import styles from "./MealsItems.module.css";

const MealsItems = () => {
  const ctx = useContext(AuthContext);
  console.log(ctx);
  return (
    <Card className={styles["meal-items"]}>
      {ctx.map((e) => (
        <MealItem
          key={e.key}
          id={e.key}
          title={e.title}
          describ={e.describ}
          price={e.price}
        />
      ))}
    </Card>
  );
};
export default MealsItems;
