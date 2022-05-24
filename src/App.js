import React from "react";
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/clientes" element={<Clientes/>} />
      </Routes>
        
      
    </Router>
  );
}

export default App;
