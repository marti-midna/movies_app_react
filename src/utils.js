// "https://edgemony-backend.herokuapp.com/movies"

// Sulla base della lezione del giorno:

// Creare un file utils.js, all'interno della directory src che:

// includa una funzione per il metodo GET per l'indirizzo https://edgemony-backend.herokuapp.com/movies

// sostituire il fetch al componente <CardList /> con la nuova funzione creata in utils

// includa una funzione per il metodo POST, per l'aggiunta di nuovi movies all'array

// includa una funzione per il metodo DELETE, per la rimozione di un determnato movie

// includa una funzione per il metodo PUT, per modificare un determinato movie

export async function getMovies() {

    const response = await fetch("https://edgemony-backend.herokuapp.com/movies")
    const res = await response.json();
    console.log(response, res);
    
    return res;
}

export const delMovie = async (id) => {
    const del = await fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`, {
        method: 'DELETE' , 
        headers: {"content-type" : "application/JSON"},
    })

    const data = await del.json();
    return data;
}

export const addMovie = async () => {
    const post = await fetch("https://edgemony-backend.herokuapp.com/movies", {
        method: 'POST' , 
        headers: {"content-type" : "application/JSON"},
        body: JSON.stringify({
            // description: inputDescription.value,
            // genres: InputCategories.value,
            // poster: inputPoster.value,
            // title:inputTitle.value,
            // image: 
            // year: inputYear.value,
        })
        
    })
    const data = await post.json();
    return data;
}