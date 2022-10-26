import { Routes, Route } from 'react-router-dom'
import AllDogs from './components/AllDogs';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <AllDogs /> } />
      </Routes>
    </div>
  );
}

export default App;
