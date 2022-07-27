import React from "react";
import { Route, Routes } from "react-router-dom";

import "./assets/styles/index.scss";
import Layout from "./layouts/Layout";
import Home from "./pages/home/Home";
import Pokedex from "./pages/pokedex/Pokedex";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element = {<Home/>}/>
            <Route path="/pokedex" element = {<Pokedex/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
