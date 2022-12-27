import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { NotFound } from './components/NotFound'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App
