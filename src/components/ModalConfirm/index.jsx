import styles from "./styles.module.scss";

export const ModalConfirm = () => {
  return (
    <div className={styles.thisComponent}>
      <div className={styles.delbtn}>
        <button className={styles.deletebtn}>✖️</button>
      </div>
        <div className={styles.textmodal}>
          <p>Vuoi eliminare questa Card?</p>
          <div className={styles.Btns}>
            <button className={styles.yesbtn}>sì</button>
            <button className={styles.nobtn}>no</button>
          </div>
        </div>
    </div>
  );
};
