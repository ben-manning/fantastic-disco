import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'



let Dog = (props) => {
  
  let { id } = useParams()

  const [dog, setDog] = useState({})



  useEffect(() => {
    console.log(id)
    let selectedDog = props.dogs.find(
      (dog) => dog._id === id
    )
    setDog(selectedDog)
  })

  return (
    <div>
      <h3>Here is your dog</h3>
      <h4>Name: { dog.name }</h4>
      <h4>Breed: { dog.breed }</h4>
      <h4>Age: { dog.age }</h4>

    </div>
  )
}

export default Dog