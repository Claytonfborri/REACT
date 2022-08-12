import Campos from "../components/CampoCadastro";
import CampoConsulta from "../components/CampoConsulta";
import Menu from "../components/Menu";

import "./consultarStyles.css";

const ConsultarClientes = () => {
  return (
    <div className="consultar-container">
      <Menu />
      <CampoConsulta />
    </div>
  );
};
export default ConsultarClientes;
