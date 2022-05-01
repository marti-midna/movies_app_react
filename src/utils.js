// "https://edgemony-backend.herokuapp.com/movies"

// Sulla base della lezione del giorno:

// Creare un file utils.js, all'interno della directory src che:

// includa una funzione per il metodo GET per l'indirizzo https://edgemony-backend.herokuapp.com/movies

// sostituire il fetch al componente <CardList /> con la nuova funzione creata in utils

// includa una funzione per il metodo POST, per l'aggiunta di nuovi movies all'array

// includa una funzione per il metodo DELETE, per la rimozione di un determnato movie

// includa una funzione per il metodo PUT, per modificare un determinato movie

export async function getMovies(id = "") {

    const response = await fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`)
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

export const addMovie = async (body) => {
    await fetch("https://edgemony-backend.herokuapp.com/movies", {
        method: 'POST' , 
        headers: {"content-type" : "application/JSON"},
        body: JSON.stringify(body)
        
    })
}
//--------------------
const BASE_URL = "https://edgemony-backend.herokuapp.com/movies";

// GET

// const GET = () => fetch(BASE_URL).then((res) => res.json);

//POST
// const POST = (body) => 
//     fetch(BASE_URL, {
//     method: "POST",
//     headers: {
//         "Content-type" : "application/json",
//     },
//     body: JSON.stringify(body),
// });

//PUT

export const PUT = (id,body) =>
    fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
        "Content-type" : "application/json"
    },
    body: JSON.stringify(body),
});

// export { POST, PUT}