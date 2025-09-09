import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./mainPage.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <div id="main" className="container-fluid p-0">
      <div id="contMain" className="container">
        <section className="inicioApp p-3 text-left align-items-center col-12 col-md-12 col-lg-12">
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </section>
      </div>
    </div>
  </BrowserRouter>
);