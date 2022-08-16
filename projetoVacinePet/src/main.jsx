import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";



import "./index.css";
import ConsultarClientes from "./pages/ConsultarClientes";
import CadastrarClientes from "./pages/CadastrarClientes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route element={<App />}>
            <Route path="/" element= {<Home />} />
            <Route path="/consultarCliente" element= {<ConsultarClientes/>} />
            <Route path="/cadastrarCliente" element= {<CadastrarClientes />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
