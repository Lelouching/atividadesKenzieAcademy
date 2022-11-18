import './App.css'
import { ChildrenTest } from './components/Children'

function App() {
  return (
    <div className="App">
      <ChildrenTest>
        <h1>Children1</h1>
        <h1>Children2</h1>
        <h1>Children3</h1>
      </ChildrenTest>
    </div>
  )
}

export default App
