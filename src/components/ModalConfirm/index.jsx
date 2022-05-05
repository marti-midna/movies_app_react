import styles from "./styles.module.scss";
import { AiFillDelete } from "react-icons/ai";

export const ModalConfirm = ({
  modalConfirmDelete,
  abortModal,
  setdelCard,
}) => {
  const visible = modalConfirmDelete.visible || false;
  const overlay = modalConfirmDelete.overlay || false;
  const classes = [
    styles.thisComponent,
    visible ? styles.visible : "",
    overlay ? styles.overlay : "",
  ];

  const delCard = (value) => {
    console.log("sei dentro la modale vai in app");
    setdelCard(true);
  };

  const abortdelCard = () => {
    console.log("togli questa modale");
    abortModal({
      visible: false,
      overlay: false,
    });
  };

  return (
    <div className={classes.join(" ")}>
      <div className={styles.modal}>
        <div className={styles.all}>
          <div className={styles.textmodal}>
            <div className={styles.cestino}>
              <AiFillDelete size="4rem" />
            </div>
            <p>Vuoi eliminare questa Card?</p>
            <div className={styles.Btns}>
              <button onClick={() => delCard()} className={styles.yesbtn}>
                sì
              </button>
              <button onClick={() => abortdelCard()} className={styles.nobtn}>
                no
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
