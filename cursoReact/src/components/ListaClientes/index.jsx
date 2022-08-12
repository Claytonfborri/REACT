import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./styles.css";

const ListaClientes = () => {
  const [searchParams] = useSearchParams(); //destruturar a primeira pesquisa para pegar no get.
  const [clientes, setClientes] = useState([]);
  const query = searchParams.get("q");

  const clienteConsultado = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setClientes(data);
  };

//   useEffect(() => {
//     const procurando = `${searchURL}?${apiKey}&query=${query}`;
//     getSearchedMovies(searchWithQueryURL);
//   }, [query]);


  return (
    <div className="clienteConsultado">
      <h3>Resultado da Consulta:</h3>
      <p>Ola</p>
    </div>
  );
};

export default ListaClientes;
