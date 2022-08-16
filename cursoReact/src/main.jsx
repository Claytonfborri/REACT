import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import CadastrarCliente from "./pages/CadastrarCliente";
import ConsultarClientes from "./pages/ConsultarClientes";


import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <Routes>
          <Route element={<App />}>
            <Route path="/" element= {<Home />} />
            <Route path="/consultarCliente" element= {<ConsultarClientes />} />
            <Route path="/cadastrarCliente" element= {<CadastrarCliente />} />
          </Route>
      </Routes>
    </BrowserRouter>
 
);
