import "./styles.css";

import { useState, useEffect } from "react";
import Lista from "../Lista";

const Mensalistas = (props) => {
  const [mensalistas, setMensalista] = useState("");
  const [nomesMensalista, setNomesMensalista] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const res = await fetch(props.nomeAPI + "/jogadores")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

      setLoading(false);
      setNomesMensalista(res);
    };
    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nomesChecked = {
      id: Math.random(),
      mensalistas,
      done: false,
    };

    await fetch(props.nomeAPI + "/jogadores", {
      method: "POST",
      body: JSON.stringify(nomesChecked),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setNomesMensalista((prevState) => [...prevState, nomesChecked]);

    setMensalista("");
  };

  const handleDelete = async (id) => {
    await fetch(props.nomeAPI + "/jogadores/" + id, {
      method: "DELETE",
    });
    setNomesMensalista((prevState) =>
      prevState.filter((nomesChecked) => nomesChecked.id !== id)
    );
  };

  const handleEdit = async (nomesChecked) => {
    nomesChecked.done = !nomesChecked.done;

    const data = await fetch(props.nomeAPI + "/jogadores/" + nomesChecked.id, {
      method: "PUT",
      body: JSON.stringify(nomesChecked),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setNomesMensalista((prevState) =>
      prevState.filter((t) => (t.id === data.id ? (t = data) : t))
    );
  };

  if (loading) {
    return <p>Atualizando lista de jogadores mensalistas...</p>;
  }
  console.log(nomesMensalista);

  return (
    <div className="form-mensalistas">
      <h2>Insira o nome do jogador:</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="nomeJogador">Nome do Jogador:</label>
          <input
            type="text"
            name="nomeJogador"
            placeholder="Nomes dos confirmados"
            onChange={(e) => setMensalista(e.target.value)}
            value={mensalistas || ""}
            required
          />
        </div>
        <input type="submit" value="Enviar" />
      </form>
      <Lista 
        nomes={nomesMensalista} 
        edit={handleEdit} 
        delete={handleDelete}
      />
    </div>
  );
};

export default Mensalistas;
