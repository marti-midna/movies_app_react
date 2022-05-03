import styles from "./styles.module.scss";
import { useState } from "react";
import { addMovie, PUT } from "../../utils";
import { useLocation} from "react-router-dom";

export function Input({ completeCallback, dicoadAddMoviechehofattounaput, callType }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genres, setGenres] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");


  const location = useLocation('');
  const movieId = location.pathname.split('/').reverse()[0];


  const unStringifyGenres = (genres) => genres.split(",");

  const addNewMovie = async (e) => {
    e.preventDefault();
    console.log("-->>>>POST TUO QUI", {
      title,
      year,
      genres: unStringifyGenres(genres),
      poster,
      description,
    });

    if (callType === "addMovie") {
      await addMovie({
        title,
        year,
        genres: unStringifyGenres(genres),
        poster,
        description,
      });
      completeCallback();

    } else {
      await PUT(movieId, {
        title,
        year,
        genres: unStringifyGenres(genres),
        poster,
        description,
      });

      dicoadAddMoviechehofattounaput();
    }
  };

  return (
    <div className={styles.Form}>
      <form onSubmit={addNewMovie}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          name="title"
          placeholder="titolo film"
          required
        />

        <input
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          type="text"
          id="poster"
          name="poster"
          placeholder="poster"
          required
        />

        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="text"
          id="year"
          name="year"
          placeholder="year"
          required
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          id="description"
          name="description"
          placeholder="description"
          required
        />

        <input
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          type="text"
          id="genre"
          name="genre"
          placeholder="genere"
          required
        />

        <input type="submit" value="Conferma" />
      </form>
    </div>
  );
}
