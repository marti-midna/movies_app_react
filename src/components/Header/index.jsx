import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.all}>
      <header>
        <h1>Movie.archive</h1>
        <nav className={styles.NavBar}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-movie">Add Movie</Link>
            </li>
            {/* <li>
              <Link to="/filterwithcategory">Filtra per Categoria</Link>
            </li> */}
          </ul>
        </nav>
      </header>
    </div>
  );
};
