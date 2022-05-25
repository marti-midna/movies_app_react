import styles from "./styles.module.scss";
import { TiDelete } from "react-icons/ti";

const CardFullInfo = ({
  idCardView,
  viewCardFullInfo,
  abortViewCardAllInfo,
}) => {

  const visible = viewCardFullInfo.visible || false;
  const overlay = viewCardFullInfo.overlay || false;

  const classes = [
    styles.thisComponent,
    visible ? styles.visible : "",
    overlay ? styles.overlay : "",
  ];

  const abortViewCardInfo = () => {
    console.log("stai chiudendo la modale view card info");
    abortViewCardAllInfo({
      visible: false,
      overlay: false,
    });
  };
{console.log(idCardView)}
  return (
    <div className={classes.join(" ")}>
      <div onClick={() => abortViewCardInfo()} className={styles.closebtn}>
        <TiDelete size="1.5rem" />
      </div>
      <div key={idCardView?.id} className={styles.modal}>
        <div className={styles.img_container}>
          <img src={idCardView?.poster} alt={idCardView?.title}></img>
        </div>
        <div className={styles.info}>
          <h2>{idCardView?.title}</h2>
          <p>{idCardView?.year}</p>
          <p>{idCardView?.description}</p>
          <p className={styles.genres}>{idCardView?.genres.join(" - ")}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFullInfo;
