import { useState } from 'react'
import './App.css'
import { CardPerson } from './components/CardPerson'
import { Form } from './components/Form'

const App = () => {

  const [data, setData] = useState([])

  return (
    <div className="App">
      {
        data.length == 0 ?
        <Form setData={setData}/> :
        <CardPerson data={data}/>
      }
    </div>
  )
}

export default App
