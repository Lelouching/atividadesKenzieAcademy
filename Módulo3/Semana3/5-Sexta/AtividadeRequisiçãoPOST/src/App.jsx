import { useState } from 'react'
import './App.css'
import { Display } from './components/Display'
import { Login } from './components/Login'

function App() {

  const [authentication, setAuthentication] = useState("")

  return (
    <div className="App">
      <Login setAuthentication={setAuthentication}>
        <Display authentication={authentication}/>
      </Login>
    </div>
  )
}

export default App
