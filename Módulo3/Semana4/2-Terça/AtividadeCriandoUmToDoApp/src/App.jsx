import './App.css'
import { SaveNewTodo } from './components/NewToDoForm'
import { ToDos } from './components/ToDo'

function App() {

  return (
    <div className="App">
      <ToDos/>
      <SaveNewTodo/>
    </div>
  )
}

export default App
