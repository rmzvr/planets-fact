import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../AppRouter";
import Header from "../UI/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
