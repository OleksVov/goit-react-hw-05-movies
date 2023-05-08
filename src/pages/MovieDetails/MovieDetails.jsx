import { Outlet, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "service/api";
import { MovieCard } from "components/MovieCard/MovieCard";

export const MovieDetails = () => {

    const [movie, setMovie] = useState({});
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const getMovie = async() => {
            const result = await fetchMovieById(758323);
            setMovie(result);
           
        }
        getMovie();
    },[id]);

    
    return (
        <div>
            <h2>Detail</h2>
            <MovieCard movie= {movie}/>
           
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}