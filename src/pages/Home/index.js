import styles from "./styles.module.scss";
import CardList from "../../components/CardList";
import { useState } from "react";
import Credits from "../../components/Credits";
// import { getMovies } from '../../utils';

function Home({parloadApp, viewCardinApp}) {
  const [searchInput, setSearchInput] = useState("");
  // const [moviesData, setMoviesData] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    console.log(searchValue);
  };

  // useEffect(() => {
  //     getMovies().then((data) => setMoviesData(data));
  // })

  const hounvaluechevaacardlist = (id) => {
    parloadApp(id); 
    console.log('sei su home e questo è l id della card:', id);
  }

  const viewCardinHome = (cardData) => {
    console.log('sei dentro home e questo è il tuo id: ', cardData)
    viewCardinApp(cardData);
  }

  return (
    <div className={styles.Home}>
      <div className={styles.Search}>
        <label htmlFor="search"></label>
        <input
          onChange={(e) => searchItems(e.target.value)}
          type="text"
          id="search"
          name="search"
          placeholder="search by title or categories"
          value={searchInput}
        />
      </div>
      <CardList  searchInput={searchInput} parloadHome={hounvaluechevaacardlist} viewCardinHome={viewCardinHome}/>
      <Credits/>
    </div>
  );
}

export default Home
