import Clientes from "../../components/Clientes";
import "./styles.css";

const handleAddMenu = () => {};

const Home = () => {
  return (
    <div className="container">
      <header className="header-azul">
        <button onClick={handleAddMenu} className="button-hamburguer">
          <img src="../src/images/menu_hamburger.png" alt="menu hamburguer" />
        </button>
        <p>Vacine Pet</p>
        <div>
          <strong>Fabio Caetano</strong>
          <img
            className="usuario"
            src="../src/images/usuario.png"
            alt="imagem do usuario"
          ></img>
          <img
            className="vetorDown"
            src="../src/images/VectorDown.png"
            alt="vetor"
          />
          <img className="search" src="../src/images/search.png" alt="vetor" />
          <img className="info" src="../src/images/info.png" alt="info" />
        </div>
      </header>
      <h2 className="clientes">Clientes</h2>
      <button className="consultarClientes">Consultar Clientes</button>
      <button className="cadastraClientes">Cadastrar Clientes</button>
      <h2 className="consulta">Consulta</h2>
      <button className="agenda">Agenda</button>
      <button className="novaCosulta">Nova Consulta</button>
    </div>
  );
};

export default Home;
