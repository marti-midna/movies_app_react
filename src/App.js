import styles from "./App.module.scss";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddMovie } from "./pages/AddMovie";
import { FilterCategory } from "./pages/FilterCategory";
import { EditMovie } from "./pages/EditMovie";
import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/edit-movie/:id" element={<EditMovie />} />
          <Route path="/filterwithcategory" element={<FilterCategory />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
