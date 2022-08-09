import "./styles.css";
import { BsFillCheckSquareFill, BsTrash } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Lista = (props) => {
    
  return (
    <div className="lista-mensalista">
      <h2>Lista de Mensalistas:</h2>
      {props.nomes.length === 0 && <p>Não há nomes!</p>}
      {props.nomes.map((nome) => (
        <div className="todo" key={nome.id}>
          <h3 className={nome.done ? "confirmado" : ""}>{nome.mensalistas}</h3>
          <div className="actions">
            <span onClick={() => props.edit(nome)}>
              {!nome.done ? (
                <AiOutlineLoading3Quarters />
              ) : (
                <BsFillCheckSquareFill color="rgb(42, 231, 42)" />
              )}
            </span>
            <BsTrash onClick={() => props.delete(nome.id)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lista;
