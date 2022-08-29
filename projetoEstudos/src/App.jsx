import { useState } from "react";
import "./App.css";
import Car from "./components/Car";
import Challenge from "./components/Challenge";
import ChangeMessageState from "./components/ChangeMessageState";
import Events from "./components/Events";
import FirstComponent from "./components/FirstComponent";
import ManageData from "./components/ManageData";
import Message from "./components/Message";
import MyForm from "./components/MyForm";
import RenderLista from "./components/RenderLista";
import UserDetails from "./components/UserDetails";

function App() {
  const users = [
    {
      id: 1,
      name: "Clayton",
      idade: 26,
      profissao: "Desenvolvedor de Software",
    },
    {
      id: 2,
      name: "Matheus",
      idade: 16,
      profissao: "Professor",
    },
    {
      id: 3,
      name: "Lucas",
      idade: 26,
      profissao: "Analista de TI",
    },
  ];

  const myCars = [
    {
      id: 1,
      name: 'Fusca',
      km: 1000,
      color: 'Branco'
    },
    {
      id: 2,
      name: 'Polo',
      km: 32000,
      color: 'Cinza'
    },
    {
      id: 3,
      name: 'Onix',
      km: 0,
      color: 'Preto'
    },

]


  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <Events />
      <Challenge />
      <ManageData />
      <RenderLista />
      {/* State Lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          job={user.profissao}
          age={user.idade}
        />
      ))}
      <h1>ShowRoom de Carros</h1>
      <div className="car_container">
        {myCars.map((car) => (
          <Car car ={car} key={car.id}/>
        ))}
      </div>
      <h1>Forms</h1>
      <MyForm />
    </div>
  );
}

export default App;
