import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { CardItem } from "../CardItem";
import { getMovies } from "../../utils";

export default function CardList({ searchInput, parloadHome }) {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    getMovies().then((data) => setMoviesData(data));
  }, []);

  const sonoincardlist = (id) => {
    console.log('sei in cardlist bitch', id);
    parloadHome(id)
  }

  return (
    <div className={styles.Cardlist}>
      {moviesData.length &&
        moviesData
        .filter((movie) =>
          movie.title
            .trim()
            .toLowerCase()
            .includes(
              searchInput.trim().toLowerCase()) 
              ||
                movie.genres
                  .toString()
                  .trim()
                  .toLowerCase()
                  .includes(searchInput.trim().toLowerCase())
            )
            .map((movie) => <CardItem cardData={movie} key={movie.id} sonoincarditemelodicoacardlist={sonoincardlist}/>)
        
        }
    </div>
  );
}
