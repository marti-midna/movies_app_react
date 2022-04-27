import './style.css';
import { useState, useEffect } from 'react';
import { CardItem } from '../CardItem';
import { getMovies } from '../../utils';

export default function CardList() {

    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        getMovies().then((data) => setMoviesData(data));
    }, []);


    return(
        <div className='cardlist'>
            
            {moviesData.length && 
            moviesData.map((movie) => <CardItem cardData={movie} key={movie.id}/>)}
        </div>
    );
}