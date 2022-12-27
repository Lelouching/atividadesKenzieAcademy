import './App.css'
import { useState } from 'react';
import { Fruits } from './components/Fruits'

function App() {

  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const filterRedFruits = () => {
    const filter = fruits.filter((fruit) => fruit.color == "red")
    return setFruits(filter)
  }

  const totalPrice = () => {
    const price = fruits.reduce((a, b) => {
      return a + b.price
    }, 0)

    return price
  }

  return (
    <div className="App">
      <ul>
        <h3>Preço total = {totalPrice()}</h3>
        {
          fruits.map((fruit, index) => <Fruits name={fruit.name} key={index}/>)
        }
      <button type='button' onClick={filterRedFruits}>Mostrar frutas vermelhas</button>
      </ul>
    </div>
  )
}

export default App
