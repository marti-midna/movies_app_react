import styles from "./styles.module.scss";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function AddMovie(props) {
  const navigate = useNavigate();

  const submitComplete = () => {
    console.log("submit andato");
    props.editSuccess({
      visible: true,
      content: "Card creata!",
    });
    navigate("/");
  };

  const facciounaPut = () => {
    console.log("hai fatto una put, ssei su addmovie, vai a parlare con app");
    props.speaktoalertstate({
      visible: true,
      content: "La Card è stata modificata",
    });
    navigate("/");
  };

  return (
    <>
      {/* <Modal
        isVisible={isModalVisible}
        text="Fantastico! Hai aggiunto correttamente un film alla tua lista! Torna alla Home"
      /> */}

      <div className={styles.AddMovie}>
        <h2>Compila tutti i campi per aggiungere un film alla tua lista</h2>
        <Input
          completeCallback={submitComplete}
          dicoadAddMoviechehofattounaput={facciounaPut}
          callType="addMovie"
        />
      </div>
    </>
  );
}
