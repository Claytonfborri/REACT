

const UserDetails = ({name, job, age}) => {
    
  return (
    <>
       <h2>Nome: {name}</h2>
       <p>Idade: {age}</p>
       <p>Profissão: {job}</p>
       {age >= 18 ? (
        <p>Pode dirigir! Maior de idade</p>
       ) : (
        <p>Não pode dirigir! Menor de idade</p>
       ) }
    </>
  )
}

export default UserDetails