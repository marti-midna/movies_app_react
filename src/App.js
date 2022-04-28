import './App.css';

import { Input } from './components/Input';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home';

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
            <Route path="/add-movie" element={<Input/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
