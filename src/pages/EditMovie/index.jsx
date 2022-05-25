import styles from "./styles.module.scss";
import { Input } from "../../components/Input";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovies } from "../../utils";
import { CardItem } from "../../components/CardItem";
// import { Modal } from "../../components/Modal";

const EditMovie = ({ isVisible, setModalVisibility, speaktoalertstate }) => {

  let location = useLocation();
  const navigate = useNavigate();
    
  const [movieData, setMovieData] = useState({});
  const movieId = location.pathname.split("/").reverse()[0];

  useEffect(() => {
    getMovies(movieId).then((data) => setMovieData(data));
  }, [movieId]);

  const facciounaPut = () => {
    console.log("hai fatto una put, ssei su editmovie, vai a parlare con app");
    speaktoalertstate({
      visible: true,
      content: "La Card è stata modificata",
    });
    navigate("/");
  };

  return (
    <>
      {/* <Modal
        isVisible={true}
        text="Fantastico! La tua Card è stata modificata! Torna alla Home"
      /> */}

      <div className={styles.EditMovie}>
        {console.log(movieData)}
        <CardItem cardData={movieData} />
        <div className={styles.ModifySection}>
          <h2>Modifica i campi della card</h2>
          <Input setModalVisibility={setModalVisibility} dicoadAddMoviechehofattounaput={facciounaPut} callType="PUT" />
        </div>
      </div>
    </>
  );
};

export default EditMovie