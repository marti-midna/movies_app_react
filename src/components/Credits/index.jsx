import styles from "./styles.module.scss";
import { GiElectric } from "react-icons/gi";

const Credits = () => {
  return (
    <a target="_blank" href="https://www.linkedin.com/in/martinaaruta/">
      <div className={styles.credits_container}>
        <span>©MartinaAruta</span>
        <GiElectric />
      </div>
    </a>
  );
};

export default Credits;
