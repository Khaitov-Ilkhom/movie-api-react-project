import "./Movie.css"
import axios from "../../api/index.js"
import {useEffect, useState} from "react";


const Movie = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("/shows")
            .then(res => setMovies(res.data))
            .catch(error => console.log(error))
    }, []);

    console.log(movies)

    return (
        <div className="movie">
            <h2 className="h2">Movies</h2>
            <div className="cards">
                {
                    movies.map(movie =>
                        <div key={movie.id} className="card">
                            <div className="poster">
                                <img src={movie.image.original} alt="Location Unknown"/>
                            </div>
                            <div className="details">
                                <h1>{movie.name}</h1>
                                <h2>{movie.ended} • {movie.language} • {movie.weight} min</h2>
                                <div className="rating">
                                    <span>{movie.rating.average}/10 </span>
                                    <span><b>{movie.genres[0]}</b></span>
                                </div>
                                <div className="tags">
                                    <span className="tag">{movie.schedule.days[0]} {movie.schedule.time}</span>
                                </div>
                                <div className="desc">{movie.summary}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Movie
