import { useState } from "react";
import InputMask from 'react-input-mask'
import { useNavigate } from "react-router-dom";
import ListaClientes from "../ListaClientes";
import "./styles.css";

const API = "http://localhost:5000";

const CampoConsulta = () => {
  const navigate = useNavigate(); //função de redirecionamento no componente


  const [cpfCnpjCliente, setCpfCnpjCliente] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!cpfCnpjCliente) return

    navigate(`/consultarCliente?q=${cpfCnpjCliente}`)
    setCpfCnpjCliente('')
  };

  return (
    <div className="campos">
      <h2>Consultar Clientes</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
         
          <label htmlFor="cpfCnpjCliente">CPF/CNPJ:</label>
          <InputMask mask='999.999.999-99'
            type="text"
            name="cpfCnpjCliente"
            placeholder="CPF/CNPJ do cliente"
            onChange={(e) => setCpfCnpjCliente(e.target.value)}
            value={cpfCnpjCliente || ""}
            required
          />
          <input type="submit" value="Consultar" />
        </div>
      </form>
      <ListaClientes />
    </div>
  );
};

export default CampoConsulta;
