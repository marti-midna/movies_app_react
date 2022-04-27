import './style.css';
import { useState } from 'react';
import { POST } from '../../utils';

export function Input() {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [genres, setGenres] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');

    const unStringifyGenres = (genres) => genres.split(",");

    const addNewMovie = (e) => {
        // e.prevendtDefault();
        console.log('-->>>>POST TUO QUI', {
            title,
            year,
            genres: unStringifyGenres(genres),
            poster,
            description,
        });

        POST({
            title,
            year,
            genres: unStringifyGenres(genres),
            poster,
            description,
        });
    };

    return(
        <div className="form">
            <h2>crea una nuova cardfilm!</h2>
            <form >
                <label htmlFor='title'>Title: </label>
                <input 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    type="text" 
                    id="title" 
                    name="title" 
                    placeholder="titolo film"
                    required/>

                <label htmlFor='img'>Poster: </label>
                <input value={poster} 
                    onChange={(e) => setPoster(e.target.value)} 
                    type="text" id="poster" name="poster" placeholder="poster" required/>

                <label htmlFor='year'>Year: </label>
                <input value={year} 
                    onChange={(e) => setYear(e.target.value)} 
                    type="text" id="year" name="year"  placeholder="year" required/>

                <label htmlFor='description'>Description: </label>
                <input value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    type="text" id="description" name="description" placeholder="description" required/>

                <label htmlFor='genre'>Genre: </label>
                <input value={genres} 
                    onChange={(e) => setGenres(e.target.value)} 
                    type="text" id="genre" name="genre" placeholder="genere" required/>
                
                <button onClick={() => addNewMovie()}>Manda</button>
            </form>
        </div>
    )
}