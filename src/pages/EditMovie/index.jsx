import style from "./style.module.scss";
import { Input } from "../../components/Input";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovies } from "../../utils";
import { CardItem } from "../../components/CardItem";
import { Modal } from "../../components/Modal";

export const EditMovie = ({ isVisible, setModalVisibility }) => {

  let location = useLocation();
    
  const [movieData, setMovieData] = useState({});
  const movieId = location.pathname.split("/").reverse()[0];

  useEffect(() => {
    getMovies(movieId).then((data) => setMovieData(data));
  }, [movieId]);
  return (
    <>
      <Modal
        isVisible={true}
        text="Fantastico! La tua Card è stata modificata! Torna alla Home"
      />

      <div className={style.EditMovie}>
        {console.log(movieData)}
        <CardItem cardData={movieData} />
        <div className={style.ModifySection}>
          <h2>Modifica i campi della card</h2>
          <Input setModalVisibility={setModalVisibility} callType="PUT" />
        </div>
      </div>
    </>
  );
};
