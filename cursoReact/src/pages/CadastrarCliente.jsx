import CampoCadastro from "../components/CampoCadastro";
import Menu from "../components/Menu";

import './cadastrarStyles.css'
const CadastrarCliente = () => {
    return (
      <div className="cadastrar-container">
          <Menu />
          <CampoCadastro />
      </div>
    )
  };
  export default CadastrarCliente;