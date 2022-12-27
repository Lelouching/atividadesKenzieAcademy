import { useContext } from 'react'
import { CounterContext } from '../context'
import './App.css'

function App() {
  
  const { counter, increase, decrease } = useContext(CounterContext)

  return (
    <div className="App">
      <h1>{counter}</h1>
      <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  )
}

export default App
