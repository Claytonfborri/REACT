import "./styles.css";

const Lista = () => {
  return (
    <div className="mostrarLista">
      <input type="submit" value="Mostrar lista" />
      <div>
        <ul>
          <li>Primeiro item da lista</li>
          <li>
            Segundo item da lista:
            <ul>
              <li>Primeiro item da lista aninhada</li>
              <li>Segundo item da lista aninhada</li>
            </ul>
          </li>
          <li>Terceiro item da lista</li>
        </ul>
      </div>
    </div>
  );
};

export default Lista;
