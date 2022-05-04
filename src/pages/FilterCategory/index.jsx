import styles from "./styles.module.scss";
import CardList from "../../components/CardList";
import { useState } from "react";

function FilterCategory() {
  const [category, setCategory] = useState([]);
  // const [isActive, setActive] = useState();

  const selectedCategory = (event) => {
    setCategory([...category, event.target.value]);
    console.log(event.target.value);
    
  };

  return (
    <>
      <div className={styles.title}>
        <h2>Scegli film per categoria</h2>
      </div>
      <div className={styles.Allcategories}>
        <button
          className={styles.btn_category}
          onClick={selectedCategory}
          value="Sci-fi"
        >
          Sci-fi
        </button>
        <button
          className={styles.btn_category}
          onClick={selectedCategory}
          value="Azione"
        >
          Azione
        </button>
        <button
          className={styles.btn_category}
          onClick={selectedCategory}
          value="Avventura"
        >
          Avventura
        </button>
      </div>
      <CardList searchInput={category.toString()} />
    </>
  );
}

export default FilterCategory