import styles from "./styles.module.scss";
import CardList from "../../components/CardList";
import { useState } from "react";
// import { getMovies } from '../../utils';

function Home({parloadApp}) {
  const [searchInput, setSearchInput] = useState("");
  // const [moviesData, setMoviesData] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    console.log(searchValue);
  };

  // useEffect(() => {
  //     getMovies().then((data) => setMoviesData(data));
  // })

  const hounvaluechevaacardlist = (value) => {
    parloadApp(value); 
    console.log('sei su home');
  }
  return (
    <div className={styles.Home}>
      <div className={styles.Search}>
        <label htmlFor="search">Search by title or categories:</label>
        <input
          onChange={(e) => searchItems(e.target.value)}
          type="text"
          id="search"
          name="search"
          placeholder="title or categories"
          value={searchInput}
        />
      </div>
      <CardList  searchInput={searchInput} parloadHome={hounvaluechevaacardlist}/>
    </div>
  );
}

export default Home
