
import "./styles.css";

const ListaClientes = (props) => {
 
  return (
    <div className="lista-clientes">
       {props.aoConsultar.length === 0 && <h4>Não há clientes consultados!</h4>}
        {props.aoConsultar.map((nome) => (
          <div className="todo" key={nome.id}>
            <p>
              Nome :<strong> {nome.nomeCliente}</strong>{" "}
            </p>
            <p>
              CPF/CNPJ: <strong>{nome.cpfCnpjCliente}</strong>
            </p>
          </div>
        ))}
    </div>
    
  )
};

export default ListaClientes;
