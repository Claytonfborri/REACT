
import './App.css'
import Jogadores from './components/Jogadores'
import Lista from './components/Lista'

function App() {
  return (
    <div className="App">
      <div className="list-header">
        <h3>Lista de confirmados:</h3>
      </div>
      <Jogadores />
      <Lista  onClick=''/>
    </div>
  )
}

export default App
