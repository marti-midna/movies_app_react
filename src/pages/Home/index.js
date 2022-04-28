import styles from "./styles.module.scss";
import CardList from "../../components/CardList";
import { useState } from "react";
// import { getMovies } from '../../utils';

export function Home() {
  const [searchInput, setSearchInput] = useState("");
  // const [moviesData, setMoviesData] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    console.log(searchValue);
  };

  // useEffect(() => {
  //     getMovies().then((data) => setMoviesData(data));
  // })

  return (
    <div className={styles.Home}>
      <label htmlFor="search">Search by title or categories:</label>
      <input
        onChange={(e) => searchItems(e.target.value)}
        type="text"
        id="search"
        name="search"
        placeholder="title or categories"
      />
      <CardList searchInput={searchInput} />
    </div>
  );
}
