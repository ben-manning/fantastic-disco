const AllDogs = (props) => {

  return (
    <div>
      <h1>These are all of the dogs</h1>
      { props.dogs.map((dog) => (
        <div key={dog._id}>
          <h3>{ dog.name }</h3>
        </div>
      ))}
    </div>
  )
}

export default AllDogs