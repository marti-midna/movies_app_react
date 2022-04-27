import './style.css';

export function Input (desc, img, years, title) {
    return(
        <div className="form">
            <input type="text" id="title" placeholder="titolo film"/>
            <input type="text" id="img" placeholder="image"/>
            <input type="text" id="year" placeholder="year"/>
            <input type="text" id="description" placeholder="description"/>
            <input type="text" id="genre" placeholder="genere"/>


            <button>Aggiungi</button>
        </div>
    )
}