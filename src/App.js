import styles from "./App.module.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddMovie } from "./pages/AddMovie";
import { FilterCategory } from "./pages/FilterCategory";
import { EditMovie } from "./pages/EditMovie";
import { Header } from "./components/Header";
import { Alert } from "./components/Alert";
import { useState } from "react";

function App() {

  const [alert, setAlert] = useState({
    visible: false,
    content: '',
  });

  const editSuccess = (value) => {
    setAlert(value);
  }

  const hideAlert = () => setAlert({
    visible:false,
    content:'',
  })

  const speaktoalertstate = (value) => {
    setAlert(value);
  }

  return (
    <Router>
      <div className="App">
        <Header/>
        <Alert alert={alert} hideCallback={hideAlert} />
        <Routes>
          <Route path="/edit-movie/:id" element={<EditMovie/>} />
          <Route path="/filterwithcategory" element={<FilterCategory />} />
          <Route path="/add-movie" element={<AddMovie editSuccess={editSuccess} speaktoalertstate={speaktoalertstate}/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
