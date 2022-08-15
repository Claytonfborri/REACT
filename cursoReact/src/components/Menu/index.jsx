import { IconContext } from "react-icons";
import { BiHome } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

import "./styles.css";

const Menu = () => {
  const handleButtonClick = () => {
    console.log("olá");
  };

  return (
    <div className="menuList">
      <IconContext.Provider value={{ className: "react-icons" }}>
        <p>
          <Link to="/">
            <BiHome />
            Inicio
          </Link>
        </p>
        <div className="conteinerButton">
          <button
            type="button"
            className="buttonClientes"
            onClick={handleButtonClick}
          >
            <BsPeopleFill />
            Clientes
            <RiArrowDownSLine />
          </button>
          <div className="dropdown">
            <ul>
              <Link to="/consultarCliente">
                <li>Consultar Clientes </li>
              </Link>

              <Link to="/cadastrarCliente">
                <li>Cadastrar Clientes</li>
              </Link>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Menu;
