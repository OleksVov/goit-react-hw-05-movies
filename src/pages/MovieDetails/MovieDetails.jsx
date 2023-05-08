import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "service/api";
import { MovieCard } from "components/MovieCard/MovieCard";
import { BackLink } from "components/BackLink/BackLink";

export const MovieDetails = () => {

    const [movie, setMovie] = useState({});
    const {movieId} = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? {pathname: '/'};


    useEffect(() => {
        const getMovie = async() => {
            const result = await fetchMovieById(movieId);
            setMovie(result);
           
        }
        getMovie();
    },[movieId]);


    return (
        <div>
            <BackLink to={backLinkHref}> Back to movies</BackLink>
            <MovieCard movie= {movie}/>
            <h2>Additional information</h2>
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