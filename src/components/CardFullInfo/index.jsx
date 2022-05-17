import styles from "./styles.module.scss";
import { getMovies } from "../../utils";
import { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";

const CardFullInfo = ({ idCardView, viewCardFullInfo, abortViewCardAllInfo }) => {
  const [movieData, setMovieData] = useState([]);

  const visible = viewCardFullInfo.visible || false;
  const overlay = viewCardFullInfo.overlay || false;

  const classes = [
    styles.thisComponent,
    visible ? styles.visible : "",
    overlay ? styles.overlay : "",
  ];

  useEffect(() => {
    getMovies(idCardView).then((data) => setMovieData(data));
  }, []);

  const abortViewCardInfo = () => {
    console.log("stai chiudendo la modale view card info");
    abortViewCardAllInfo({
        visible: false,
        overlay: false,
    })
  };

  return (
    <div className={classes.join(" ")}>
      <div onClick={() => abortViewCardInfo()} className={styles.closebtn}>
        <TiDelete size="1.5rem" />
      </div>
      {movieData &&
        movieData.map((movie) => (
          <div key={movie.id} className={styles.modal}>
            <div className={styles.img_container}>
              <img src={movie.poster} alt={movie.title}></img>
            </div>
            <div className={styles.info}>
              <h2>{movie.title}</h2>
              <p>{movie.year}</p>
              <p>{movie.description}</p>
              <p>{movie.genres}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardFullInfo;
