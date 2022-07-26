import './Colaborador.css'

const Colaborador = ({ imagem, nome, cargo }) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho'>
                <img className='img' src={imagem} alt='imagem GITHUB'></img>

            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>

        </div>
    )

}

export default Colaborador