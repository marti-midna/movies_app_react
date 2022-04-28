import './style.css'
import CardList from "../../components/CardList";

export function Home() {

    return(
        <div className="Home">
            <label htmlFor="search">Search by title or categories:</label>
            <input type="text" id="search" name="search" />
            <CardList/>
        </div>
    )
};