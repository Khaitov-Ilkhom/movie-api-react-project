import './App.css'
import Movie from "./components/movies/Movie.jsx";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Movie/>}/>
      </Routes>
    </div>
  )
}

export default App
