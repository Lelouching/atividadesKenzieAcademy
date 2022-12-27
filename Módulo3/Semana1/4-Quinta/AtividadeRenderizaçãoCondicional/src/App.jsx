import { useState } from 'react'
import './App.css'
import { RestrictedPage } from './components/RestrictedPage'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const user = "Lelouching"

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="App">
      <RestrictedPage user={user} Login={login} Logout={logout} isLoggedIn={isLoggedIn}/>
    </div>
  )
}

export default App