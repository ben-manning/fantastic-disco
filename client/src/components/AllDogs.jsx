import { useNavigate } from "react-router-dom"

const AllDogs = (props) => {
  let navigate = useNavigate()

  const showDog = (dog) => {
    navigate(`${dog._id}`)
  }

  return (
    <div>
      <h1>These are all of the dogs</h1>
      { props.dogs.map((dog) => (
        <div key={dog._id} onClick={ () => showDog(dog) }>
          <h3>{ dog.name }</h3>
        </div>
      ))}
    </div>
  )
}

export default AllDogs