import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Text } from './components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Text message="hahahaha"/>
      <Text message="vai tomar no cu"/>
    </div>
  )
}

export default App
