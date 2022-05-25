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
              <Link className={styles.hover_underline_animation} to="/">HOME</Link>
            </li>
            <li>
              <Link className={styles.hover_underline_animation} to="/add-movie">ADD MOVIE</Link>
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
