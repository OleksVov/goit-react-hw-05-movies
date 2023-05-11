import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Suspense } from "react";
import { fetchMovieById } from "service/api";
import { MovieCard } from "components/MovieCard/MovieCard";
import { BackLink } from "components/BackLink/BackLink";
// import { NotFound } from "pages/NotFound";


const MovieDetails = () => {

    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    // const [error, setError] = useState(false);
    const {movieId} = useParams();
    const location = useLocation();
    // const backLinkHref = location.state?.from ?? {pathname: '/'};
const backLinkLocationRef = useRef(location.state?.from ?? {pathname: '/'});

    useEffect(() => {
        try {
            const getMovie = async() => {
                const result = await fetchMovieById(movieId);
                // if (result === 404) {
                //     setError(true);
                //     return;
                // }
                setMovie(result);
               
            }
            getMovie();
        } catch (error) {
            console.log(error);
        }
    },[movieId]);

    useEffect(() => {
        if (!movie.genres) {
            return
        }
        setGenres(movie.genres)
    }, [movie])

// console.log(error);
    return (
        // (error && <NotFound/>) || (movie.movieId && (
            
        // ))

        <div>
        <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
        <MovieCard movie= {movie} genres= {genres}/>
        <h2>Additional information</h2>
        <ul>
            <li>
                <Link to="cast" state={{ from: backLinkLocationRef}}>Cast</Link>
            </li>
            <li>
                <Link to="reviews" state={{ from: backLinkLocationRef}}>Reviews</Link>
            </li>
        </ul>
        <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
       
    </div>
    );
}

export default MovieDetails;