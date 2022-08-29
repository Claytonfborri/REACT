import React, { useState } from "react";

const RenderLista = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Clayton",
      age: 26,
    },
    {
      id: 2,
      name: "Pedro",
      age: 36,
    },
    {
      id: 3,
      name: "Matheus",
      age: 28,
    },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  const returnLista = () => {
    setUsers([
        {
            id: 1,
            name: "Clayton",
            age: 26,
          },
          {
            id: 2,
            name: "Pedro",
            age: 36,
          },
          {
            id: 3,
            name: "Matheus",
            age: 28,
          }
    ])
  }

  return (
    <div>
      <ul>
        {users.length === 0 && <p>Não há itens na lista</p>}
        {users.length > 0 &&
          users.map((user) => (
            <li key={user.id}>
              {user.name} tem: {user.age} anos
            </li>
          ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random usuário</button>
      <button onClick={returnLista}>Retorne Lista</button>
    </div>
  );
};

export default RenderLista;
