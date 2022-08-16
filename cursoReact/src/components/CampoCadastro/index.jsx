import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import Lista from "../Lista";

import "./styles.css";

const API = "http://localhost:5000";

const CampoCadastro = () => {
  const [nomeCliente, setNomeCliente] = useState("");
  const [cpfCnpjCliente, setCpfCnpjCliente] = useState("");
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const res = await fetch(API + "/clientes")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

      setLoading(false);
      setClientes(res);
    };
    loadData();
  }, []);

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

    setClientes((prevState) => [...prevState, nomes]);
    console.log(clientes);
    setNomeCliente("");
    setCpfCnpjCliente("");
  };

  const handleDelete = async (id) => {
    await fetch(API + "/clientes/" + id, {
      method: "DELETE",
    });
    setClientes((prevState) => prevState.filter((nomes) => nomes.id !== id));
  };

  if (loading) {
    return <p>Atualizando lista de clientes...</p>;
  }

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
          <InputMask
            mask="999.999.999-99"
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
      <Lista nomes={clientes} delete={handleDelete} />
    </div>
  );
};

export default CampoCadastro;
