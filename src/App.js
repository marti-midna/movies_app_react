import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home';
import {AddMovie} from './pages/AddMovie'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-movie">Add Movie</Link>
            </li>
          </ul>
        </nav>
          
          <Routes>
            <Route path="/add-movie" element={<AddMovie/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
