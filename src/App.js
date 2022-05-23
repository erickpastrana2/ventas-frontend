import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu titulo="Eeste es el titulo" subtitulo="Subtitulo"/>
    </div>
  );
}

export default App;
