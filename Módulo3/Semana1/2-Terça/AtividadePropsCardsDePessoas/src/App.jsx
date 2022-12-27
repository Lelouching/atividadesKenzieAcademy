import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Person } from './components/Person'

function App() {
  const [count, setCount] = useState(0)
  const people = [
    {
      name: "Gabriel",
      age: 19,
      country: "Brasil"
    },
    {
      name: "Felipe",
      age: 28,
      country: "Brasil"
    },
    {
      name: "Mariana",
      age: 24,
      country: "Itália"
    }
  ]

  return (
    <div className="App">
      {
        people.map((person) => <Person name={person.name} age={person.age} country={person.country}/>)
      }
    </div>
  )
}

export default App
