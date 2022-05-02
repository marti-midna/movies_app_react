import styles from "./styles.module.scss";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function AddMovie(props) {
  const [isModalVisible, setModalVisibility] = useState('');

  const navigate = useNavigate();

  const newModal = isModalVisible;
  addSuccess(newModal);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setModalVisibility(false);
  //   }, 6000);
  // }, [isModalVisible]);
  console.log("questi sono i valori", newModal);

  function addSuccess(value) {
    props.editSuccess(value);
    navigate("/");
  }

  return (
    <>
      {/* <Modal
        isVisible={isModalVisible}
        text="Fantastico! Hai aggiunto correttamente un film alla tua lista! Torna alla Home"
      /> */}

      <div className={styles.AddMovie}>
        <h2>Compila tutti i campi per aggiungere un film alla tua lista</h2>
        <Input setModalVisibility={setModalVisibility} callType="addMovie" />
      </div>
    </>
  );
}
