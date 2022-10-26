import { Link } from "react-router-dom"

const Home = () => {

  return (
    <div>
      <h1>This is the home of the App.</h1>
      <Link to='/dogs'>All dogs</Link>
    </div>
  )
}

export default Home