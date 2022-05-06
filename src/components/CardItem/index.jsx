import styles from "./styles.module.scss";
// import { delMovie } from "../../utils";
import { Link } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";

export function CardItem({ cardData, sonoincarditemelodicoacardlist }) {
  // console.log('---->', cardData);

  const handleDelete = (id) => {
    sonoincarditemelodicoacardlist(id);
    console.log('id della carta', id);
    // delMovie(id).then(() => {
    //   window.location.reload(false);
    // });
  };

  return (
    <div className={styles.Carditem} key={cardData.id}>
      <div className={styles.Btns}>        
        <Link
          to={`/edit-movie/${cardData.id}`}
          style={{ textDecoration: "none" }}
        >
          <button><BsPencilFill color="#444444"/></button>
        </Link>
        <button onClick={() => handleDelete(cardData.id)}>✖️</button>
      </div>
        

      <div className={styles.TitleYearFilm}>
        <h2>{cardData?.title}</h2>
        <p>({cardData?.year})</p>
      </div>
      <div className={styles.ImgFilm}>
        <img src={cardData?.poster} alt={cardData?.title}></img>
      </div>
      <div className={styles.DescriptionTitle}>
        <p>{cardData?.description}</p>
      </div>
      <div className={styles.Genres}>
        <ul>
          {cardData.genres &&
            cardData.genres.map((genre, index) => <li key={index}>{genre}</li>)}
        </ul>
      </div>
    </div>
  );
}
//

//MODO ALTERNATIVO DI CONTROLLARE SE I GENERI CI SONO E SE CI SONO VANNO MAPPATI
//                    {
//     cardData?.genres?.map((genre, index) =>
//         (<li key={index}>{genre}</li>))
// }
