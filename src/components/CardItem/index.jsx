import styles from "./styles.module.scss";
// import { delMovie } from "../../utils";
import { Link } from "react-router-dom";
import { TiDelete, TiCog } from "react-icons/ti";

export function CardItem({ cardData, sonoincarditemelodicoacardlist, viewCardincardlist }) {
  // console.log('---->', cardData);

  const handleDelete = (id) => {
    sonoincarditemelodicoacardlist(id);
    console.log('id della carta', id);
    // delMovie(id).then(() => {
    //   window.location.reload(false);
    // });
  };

  const viewCard = (cardData) => {
    console.log('sei dentro la tua futura modale', cardData);
    viewCardincardlist(cardData);
  }

  return (
    <div className={styles.Carditem} key={cardData.id}>
      <div className={styles.Btns}>        
        <Link
          to={`/edit-movie/${cardData.id}`}
          style={{ textDecoration: "none" }}
        >
          <button><TiCog size="1.5rem" /></button>
        </Link>
        <button onClick={() => handleDelete(cardData.id)}><TiDelete size="1.5rem"/></button>
      </div>
        

      <div className={styles.TitleYearFilm}>
        <h2>{cardData?.title}</h2>
        <p>({cardData?.year})</p>
      </div>
      <div className={styles.ImgFilm} onClick={() => viewCard(cardData)}>
        <img src={cardData?.poster} alt={cardData?.title}></img>
      </div>
      {/* <div className={styles.DescriptionTitle}>
        <p>{cardData?.description}</p>
      </div> */}
      <div className={styles.Genres}>
        <ul>
          {cardData.genres &&
            cardData.genres.map((genre, index) => <li key={index}>{genre}</li>)}
        </ul>
      </div>
    </div>
  );
}
