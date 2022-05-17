

export async function getMovies(id = "") {
    console.log('id in utils',id);
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