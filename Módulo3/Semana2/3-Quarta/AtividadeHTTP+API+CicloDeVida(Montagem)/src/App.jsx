import { useState, useEffect } from 'react'
import { api } from './services/api.js'
import './App.css'
import { Characters } from './components/Characters/index.jsx'
import { CharCard } from './components/CharCard/index.jsx'

function App() {

  const [dataApi, setDataApi] = useState([])
  const [page, setPage] = useState(1)
  const [buttonNextPage, setButtonNextPage] = useState(false)
  const [buttonPreviousPage, setButtonPreviousPage] = useState(true)

  useEffect(() => {
    
    const getApiData = async () => {
      try{
        const response = await api.get("character/", {
          params: {
            page: page
          }
        })
        setButtonNextPage(!response.data.info.next)
        setButtonPreviousPage(!response.data.info.prev)
        setDataApi(response.data.results)
      } catch (err) {
        console.log(err)
      }
    }

    getApiData()
  }, [page])

  const nextPage = () => {
    setPage(page + 1)
  }

  const previousPage = () => {
    setPage(page - 1)
  }

  return (
    <div className="App">
      <Characters CharCard={CharCard} listCharacters={dataApi}> 
        <button disabled={buttonPreviousPage} onClick={previousPage} type="button">Anterior</button>
        <button disabled={buttonNextPage} onClick={nextPage} type="button">Próxima</button>
      </Characters>
    </div>
  )
}

export default App
