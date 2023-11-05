import Card from "../Card/Card";
import styles from "./DescribePage.module.css";

const DescribePage = () => {
  return (
    <Card className={styles.describ}>
      <h4>Delicious food, Delivered to you</h4>
      <p>
        Choose you favorite meal from our broad selection of available meals and
        enjoy and Delicious lunch or dinner at home
      </p>
      <p>
        All our meal are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Card>
  );
};
export default DescribePage;
