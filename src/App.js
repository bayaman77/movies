import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideosСontextProvider from "./contexts/videosContext";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import "./App.css";
import Details from "./components/Details/Details";
import Add from "./components/Add/Add";
import Edit from "./components/Edit/Edit";

const App = () => {
  return (
    <VideosСontextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/movies" element={<List />} />
          <Route path="/movies/:id" element={<Details />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </VideosСontextProvider>
  );
};

export default App;
