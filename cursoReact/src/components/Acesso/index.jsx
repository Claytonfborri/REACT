import { Link } from "react-router-dom";
import Menu from "../Menu";
import "./styles.css";

const Acesso = () => {
  return (
    <div className="acesso">
      <Menu />
      <div className="acessoItens">
        <h2>Clientes</h2>
        <button>
          <Link to="cadastrarCliente">Cadastrar Clientes</Link>
        </button>
        <button>
          <Link to="/consultarCliente/:cpf">Consultar Clientes</Link>
        </button>
      </div>
    </div>
  );
};

export default Acesso;
