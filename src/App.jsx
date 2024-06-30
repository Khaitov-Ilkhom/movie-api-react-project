import './App.css'
import Movie from "./components/movies/Movie.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import NotFound from "./components/404/Not-found.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import SinglePage from "./components/singlePage/SinglePage.jsx";


function App() {
// const {pathName} = useLocation();
  return (
    <div className="container">
        {/*{*/}
        {/*    !pathName.includes("/notFound") && <Navbar/>*/}
        {/*}*/}
        <Navbar/>
      <Routes>
          <Route path="/" element={<Movie/>}/>
          <Route path="/singlePage/:id" element={<SinglePage/>} />
          <Route path="/notFound" element={<NotFound/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
