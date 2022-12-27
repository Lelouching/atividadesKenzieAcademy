import { useState } from 'react'
import './App.css'
import { Cart } from './components/Cart'
import { ProductsList } from './components/ProductsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ProductsList/>
      <Cart/>
    </div>
  )
}

export default App
