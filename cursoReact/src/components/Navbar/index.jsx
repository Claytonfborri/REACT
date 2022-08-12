
import { AiOutlineMenu } from "react-icons/ai";


import './styles.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="buttonMenu">
      <button>
        <AiOutlineMenu size={48}/> Menu
      </button>
      </div>
       <h2>VacinePet</h2> 
  
      
    </div>
  );
};

export default Navbar;
