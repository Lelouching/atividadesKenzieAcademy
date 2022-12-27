import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Buttons.jsx'
import Text from './components/Texts.jsx'

function App() {
  const [count, setCount] = useState(0)

  const message = {
    message1: "teste1",
    message2: "teste2",
    message3: "teste3"
  }

  return (
    <div className="App">
      <Button message={message.message1}/>
      <Button message={message.message2}/>
      <Button message={message.message3}/>
    </div>
  )
}

export default App
