import { useState } from 'react'
import './App.css'

function App() {

  const [number, setNumber] = useState("Clique no botão")

  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1)
  }

  const [number2, setNumber2] = useState(0)

  const numberPlus = () => {
    setNumber2(number2 + 1)
  }

  const numberSub = () => {
    setNumber2(number2 - 1)
  }

  return (
    <div className="App">
      <div className='div-number'>
        <span className='number'>{number}</span>
        <button type='button' onClick={randomNumber}>Número aleatório</button>
      </div>
      <div className='div-number'>
        <span className='number'>{number2}</span>
        <div>
          <button type='button' onClick={numberPlus}>Adicionar 1</button>
          <button type='button' onClick={numberSub}>Remover 1</button>
        </div>
      </div>
    </div>
  )
}

export default App