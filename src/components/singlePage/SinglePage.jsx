import "./SinglePage.css"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "../../api/index.js";

const SinglePage = () => {
    const [movie, setMovie] = useState(null)

    const data = useParams()

    useEffect(() => {
        axios(`/shows/${data.id}`)
            .then(res => setMovie(res.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="single">
            {
                movie ?
                   <div className="card-mov">
                       <div className="img-box">
                           <img src={movie.image.original} alt=""/>
                       </div>
                       <div className="info-box">
                           <h2>{movie.name}</h2>
                           <a href={movie.url}>Official Site</a>
                           <h3>{movie.premiered} • {movie.schedule.days[0]} • {movie.schedule.time} • {movie.averageRuntime} min</h3>
                           <span className="rating"><b>Rating:</b> {movie.rating.average}/10</span>
                           <br/>
                               <p className="genres"><b>Genres:</b> <span>{movie.genres[0]}</span></p>
                               <p>{movie.summary}</p>
                       </div>
                   </div>
                :
                <>
                </>
            }
        </div>
    )
}
export default SinglePage
