// import styles from "./App.module.scss";
import { useState } from "react";
import { Suspense } from "react";
import React, { lazy } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Alert } from "./components/Alert";
import { ModalConfirm } from "./components/ModalConfirm";
import { Loading } from "./components/Loading";
import CardFullInfo from "./components/CardFullInfo";

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"));
const AddMovie = lazy(() =>
  import(/* webpackChunkName: "addmovie" */ "./pages/AddMovie")
);
const EditMovie = lazy(() =>
  import(/* webpackChunkName: "editmovie" */ "./pages/EditMovie")
);
const FilterCategory = lazy(() =>
  import(/* webpackChunkName: "filtercategory" */ "./pages/FilterCategory")
);

function App() {
  const [alert, setAlert] = useState({
    visible: false,
    content: "",
  });

  const [idCard, setIdCard] = useState();

  const editSuccess = (value) => {
    setAlert(value);
  };

  const hideAlert = () =>
    setAlert({
      visible: false,
      content: "",
    });

  const speaktoalertstate = (value) => {
    setAlert(value);
  };

  //modalconfirmdelete
  const [modalConfirmDelete, setModalConfirmDelete] = useState({
    visible: false,
    overlay: false,
  });

  const parloadApp = (id) => {
    setModalConfirmDelete({
      visible: true,
      overlay: true,
    });
    setIdCard(id);
    console.log('qui ce il valore true di visible', id);
  }

  const abortModal = (value) => {
    console.log('hai chiuso la modale, brava')
    setModalConfirmDelete(value);
  }

  //modalcardfullifo
  const [viewCardFullInfo, setViewCardFullInfo] = useState({
    visible:false,
    overlay: false,
  })

  const [idCardView, setIdCardView] = useState();

  const viewCardinApp = (id) => {
    console.log('questo è il tuo id dentro app js:', id)
    setViewCardFullInfo({
      visible: true,
      overlay: true,
    });
    setIdCardView(id);
  }

  const abortViewCardAllInfo = (value) => {
    setViewCardFullInfo(value)
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Alert alert={alert} hideCallback={hideAlert} />
        <ModalConfirm modalConfirmDelete={modalConfirmDelete} abortModal={abortModal} idCard={idCard}/>
        <CardFullInfo viewCardFullInfo={viewCardFullInfo} idCardView={idCardView} abortViewCardAllInfo={abortViewCardAllInfo}/>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Home parloadApp={parloadApp} viewCardinApp={viewCardinApp}/>
              </Suspense>
            }
          />
        
        <Route
          path="/edit-movie/:id"
          element={
            <Suspense fallback={<Loading />}>
              <EditMovie speaktoalertstate={speaktoalertstate} />
            </Suspense>
          }
        />
        <Route
          path="/filterwithcategory"
          element={
            <Suspense fallback={<Loading />}>
              <FilterCategory />
            </Suspense>
          }
        />
        <Route
          path="/add-movie"
          element={
            <Suspense fallback={<Loading />}>
              <AddMovie editSuccess={editSuccess} />
            </Suspense>
          }
        />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
