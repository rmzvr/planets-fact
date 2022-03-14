import React from "react";
import { HashRouter } from "react-router-dom";
import AppRouter from "../AppRouter";
import Header from "../UI/Header/Header";

function App() {
  return (
    <HashRouter>
      <Header />
      <AppRouter />
    </HashRouter>
  );
}

export default App;
