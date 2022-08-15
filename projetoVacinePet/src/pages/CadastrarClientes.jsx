import { useEffect, useState } from "react";
import "./cadastroStyles.css";
import InputMask from 'react-input-mask'
import Lista from "../components/Lista";


const CadastrarClientes = (props) => {
  const [nomeCliente, setNomeCliente] = useState("");
  const [cpfCnpjCliente, setCpfCnpjCliente] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nomeCliente && !cpfCnpjCliente) return;

    const nomes = {
      id: Math.random(),
      nomeCliente,
      cpfCnpjCliente,
    };

    await fetch(API + "/clientes", {
      method: "POST",
      body: JSON.stringify(nomes),
      headers: {
        "Content-Type": "application/json",
      },
    });

    props.setarClientes((prevState) => [...prevState, nomes]);

    setNomeCliente("");
    setCpfCnpjCliente("");
  };
  
  const handleDelete = async (id) => {
    await fetch(API + "/clientes/" + id, {
      method: "DELETE",
    });
    props.setarClientes((prevState) =>
      prevState.filter((nomes) => nomes.id !== id)
    );
  };

  return (
    <div className="campos">
      <h2>Cadastro de Clientes</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="nomeCliente">Nome: </label>
          <input
            type="text"
            name="nomeCliente"
            placeholder="Nomes do cliente"
            onChange={(e) => setNomeCliente(e.target.value)}
            value={nomeCliente || ""}
            required
          />
          <label htmlFor="cpfCnpjCliente">CPF/CNPJ:</label>
          <InputMask mask='999.999.999-99'
            type="text"
            name="cpfCnpjCliente"
            placeholder="CPF/CNPJ do cliente"
            onChange={(e) => setCpfCnpjCliente(e.target.value)}
            value={cpfCnpjCliente || ""}
            required
          />
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
      <Lista  delete={handleDelete}/>
    </div>
  );
};
export default CadastrarClientes;
