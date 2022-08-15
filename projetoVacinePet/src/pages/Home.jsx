
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

import './homeStyles.css'

const API = "http://localhost:5001";


const Home = () => {

  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(false);

  
  
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const res = await fetch(API + "/clientes")
        .then((res) => res.json())
        .then((data) => (data))
        .catch((err) => console.log(err));


      setLoading(false);
      setClientes(res);
    };
    loadData();
  }, []);


  if (loading) {
    return <p>Atualizando lista de clientes...</p>;
  }

  console.log(clientes);



  return (
    <div className="container">
      <Menu />
      <div className="container-home">
        <h2>Clientes</h2>
        <button>
          <Link setarClientes = {setClientes} clientes ={clientes}to="/cadastrarCliente" >Cadastrar Clientes</Link>
        </button>
        <button>
          <Link to="/consultarCliente">Consultar Clientes</Link>
        </button>
      </div>
    </div>
  );
};
export default Home;
