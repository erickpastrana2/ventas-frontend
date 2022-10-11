import React from "react";
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Articulos from "./pages/Articulos";
import Modelos from "./pages/Modelos";
import Axios from "axios";
import Test from "./pages/Test";


Axios.interceptors.request.use(function(config){
  config.url=`${process.env.REACT_APP_API_BASE_URL}${config.url}`;
  return config;
})

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/articulos" element={<Articulos/>} />
          <Route exact path="/modelos" element={<Modelos/>} />
          <Route exact path="/test" element={<Test/>} />
        </Routes>
      </Router>
    
  );
}

export default App;
