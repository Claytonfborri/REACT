import "./styles.css";

const handleLista = () => {
    console.log('ola');
}

const Jogadores = () => {
  return (

    <div className="inputJogadores">
      <label htmlFor="nomeJogadores">Digite o nome dos mensalistas:</label>
      <input type="text" className="nomes" placeholder="Nomes" required />
      <input type="submit" value="Adicionar na lista" onClick={handleLista} />
    </div>

  );
};

export default Jogadores;
