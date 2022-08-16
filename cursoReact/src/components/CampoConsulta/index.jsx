import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import ListaClientes from "../ListaClientes";

import "./styles.css";

const API = "http://localhost:5000";

const CampoConsulta = () => {
  const [cpfCnpjCliente, setCpfCnpjCliente] = useState("");
  const [resultado, setResultado] = useState([]);
  const [consulta, setConsulta] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(API + "/clientes")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

      setResultado(res);
    };
    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cpfCnpjCliente) return;

    await fetch(API + "/clientes/?cpfCnpjCliente=" + cpfCnpjCliente, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setConsulta(data))
      .catch((err) => console.log(err));

    setCpfCnpjCliente("");
  };

  return (
    <div className="campos">
      <h2>Consultar Clientes</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="cpfCnpjCliente">CPF/CNPJ:</label>
          <InputMask
            mask="999.999.999-99"
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
      <ListaClientes aoConsultar={consulta} />
    </div>
  );
};

export default CampoConsulta;
