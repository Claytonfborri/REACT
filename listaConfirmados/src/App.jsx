
import './App.css'

import Mensalistas from './components/Mensalistas';
import Header from './components/Header';


const API = 'http://localhost:5000';

function App() {

  return (
    <div className="App">
     <Header />
      <Mensalistas nomeAPI = {API}/>
    </div>
  )
}

export default App
