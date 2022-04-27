import './style.css';
import { delMovie } from '../../utils';

export function CardItem({ cardData }) {
    console.log('---->', cardData);

    const handleDelete = (id) => {
        delMovie(id).then(() => {
            window.location.reload(false);
        });
    }

    return(
        <div className='carditem' key={cardData.id}>
            <button onClick={() => handleDelete(cardData.id)}>Elimina Card</button>
            <h2>{cardData?.title}</h2>
            <p>{cardData?.year}</p>
            <img src={cardData?.poster} alt={cardData?.title}></img>
            <p>{cardData?.description}</p>

            <div className='genres'>
                <ul>
                    {   
                        cardData.genres &&
                        cardData.genres.map((genre, index) => 
                            (<li key={index}>{genre}</li>)) 
                    } 
                </ul>
            </div>
        </div>
    )
}
//


//MODO ALTERNATIVO DI CONTROLLARE SE I GENERI CI SONO E SE CI SONO VANNO MAPPATI
//                    {   
//     cardData?.genres?.map((genre, index) => 
//         (<li key={index}>{genre}</li>)) 
// } 