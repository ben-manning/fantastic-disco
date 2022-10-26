import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AllDogs from './components/AllDogs'
import Dog from './components/Dog'

import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    const getDogs = async () => {
      let res = await axios.get('http://localhost:3001/dogs')

      setDogs(res.data)
    }

    getDogs()
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/dogs' element={ <AllDogs dogs={dogs} /> } />
        <Route path='/dogs/:id' element={ <Dog dogs={dogs} /> } />
      </Routes>
    </div>
  );
}

export default App;
