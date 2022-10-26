import { useState, useEffect } from 'react'
import axios from 'axios'


const AllDogs = () => {
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
      <h1>These are all of the dogs</h1>
      { dogs.map((dog) => (
        <div key={dog._id}>
          <h3>{ dog.name }</h3>
        </div>
      ))}
    </div>
  )
}

export default AllDogs