import { BsTrash } from "react-icons/bs";
import "./styles.css";


const Lista = (props) => {

  return (
    <div className="lista-clientes">
      {props.nomes.length === 0 && <h4>Não há clientes cadastrados!</h4>}
      {props.nomes.map((nome) => (
        <div className="todo" key={nome.id}>
          <p>Nome :<strong> {nome.nomeCliente}</strong> </p>
          <p>CPF/CNPJ: <strong>{nome.cpfCnpjCliente}</strong></p>
          <div className="actions">
          <BsTrash onClick={() => props.delete(nome.id)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lista;
