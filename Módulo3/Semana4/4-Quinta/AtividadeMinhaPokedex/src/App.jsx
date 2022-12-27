import './App.css'
import { ListPokemons } from './components/ListPokemons'
import { MyPokemons } from './components/MyPokemons'
import { SearchPokemons } from './components/SearchPokemons'

function App() {

  return (
    <div className="App">
      <ListPokemons/>
      <MyPokemons/>
      <SearchPokemons/>
    </div>
  )
}

export default App
