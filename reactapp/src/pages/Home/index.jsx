import React, { useState, useEffect }from "react";
import Card from "../../components/Card";
import "./styles.css";

export default function Home() {
  const [studentsName, setStudentsName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState( { name: '', avatar: '' } )

  const handleAddStudent = () => {
    const newStudent = {
      name: studentsName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  };

  

  useEffect(() => {
    fetch('https://api.github.com/users/Claytonfborri')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })

    })
  }, [])

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>

        <div>
          <strong>{user.name}</strong>
          <img
            src={user.avatar}
            alt="imagem do github"
          ></img>
        </div>
      </header>

      <input
        type="text"
        placeholder="Digite o nome"
        onChange={(event) => setStudentsName(event.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}
