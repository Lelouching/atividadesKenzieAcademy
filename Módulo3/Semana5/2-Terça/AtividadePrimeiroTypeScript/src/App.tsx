import { useContext, useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import { Input } from './components/Input'
import { UserContext } from './context'

function App() {

  const [user, setUser] = useState(false)

  const [name, setName] = useState<null | string>(null)

  const [age, setAge] = useState<null | number>(null)

  const [hobby, setHobby] = useState<string | null>(null)

  const { userTest } = useContext(UserContext)

  const formHandle = () => {
    setUser(true)
  }

  return (
    <div className="App">
      {
        user && <Card name={name} age={age} hobby={hobby} />
      }

      {
        user == false && ( 
          <form onSubmit={formHandle}>
            <Input placeholder="Insira seu nome" label="Nome" state={(e) => setName(e.target.value)} />
            <Input placeholder="Insira sua idade" label="Idade" state={(e) => setAge(Number(e.target.value))} />
            <Input placeholder="Insira seu hobby" label="Hobby" state={(e) => setHobby(e.target.value)} />
            <button>Enviar</button>
          </form>
        )
      }
    </div>
  )
}

export default App
