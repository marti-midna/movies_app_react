import "./style.css";
import { useState, useEffect } from "react";
import { CardItem } from "../CardItem";
import { getMovies } from "../../utils";

export default function CardList({ searchInput }) {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    getMovies().then((data) => setMoviesData(data));
  }, []);

  return (
    <div className="cardlist">
      {moviesData.length &&
        moviesData
        .filter((movie) =>
          movie.title
            .trim()
            .toLowerCase()
            .includes(
              searchInput.trim().toLowerCase() ||
                movie.genres
                  .toString()
                  .trim()
                  .toLowerCase()
                  .includes(searchInput.trim().toLowerCase())
            )
            .map((movie) => <CardItem cardData={movie} key={movie.id} />)
        )}
    </div>
  );
}
