import { IconContext } from "react-icons";
import { BiHome } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";


import "./styles.css";


const Menu = () => {


   const handleButtonClick = () => {
        console.log('olá');
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
            <button type="button" className="buttonClientes" onClick={handleButtonClick}>
            <BsPeopleFill />
              Clientes
              <RiArrowDownSLine />
            </button>
            <div className="dropdown">
              <ul>
                <li>
                  <Link to="/consultarCliente">Consultar Clientes</Link>
                </li>
                <li>
                  <Link to="/cadastrarCliente">Cadastrar Clientes</Link>
                </li>
              </ul>
            </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Menu;
