import styles from "./BackgroundImage.module.css";
import img from "../Images/meals.jpg";
const BackgroundImage = () => {
  return <img className={styles.img} src={img} alt={"background-img"} />;
};
export default BackgroundImage;
