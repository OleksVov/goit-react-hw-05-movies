import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Suspense } from "react";
import { fetchMovieById } from "service/api";
import  MovieCard  from "components/MovieCard/MovieCard";
import { BackLink } from "components/BackLink/BackLink";
import { Loader } from "components/Loader/Loader";
import css from "./MovieDetails.module.css"
import { NotFound } from "pages/NotFound";


const MovieDetails = () => {

    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    const {movieId} = useParams();
    const location = useLocation();
    // const backLinkHref = location.state?.from ?? {pathname: '/'};
const backLinkLocationRef = useRef(location.state?.from ?? '/');


    useEffect(() => {
        try {
            const getMovie = async() => {
                const result = await fetchMovieById(movieId);
               
                if (result.status === 404) {
                    console.log("Sorry, we couldn't find that page");;
                    return;
                } else {setMovie(result);}
                
               
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


    return (
       <div>
  {movie.id ? (
     <div>
     <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
     <MovieCard movie= {movie} genres= {genres}/>
      <h3>Additional information</h3>
      <ul>
          <li className={css.ItemSubPage}>
              <Link to="cast" state={{ from: backLinkLocationRef}}>Cast</Link>
          </li>
          <li className={css.ItemSubPage}>
              <Link to="reviews" state={{ from: backLinkLocationRef}}>Reviews</Link>
          </li>
      </ul>
      <Suspense fallback={<Loader/>}>
      <Outlet />
    </Suspense>
     </div>
  ) : (
    <NotFound/>
  )}
       </div>
            
    );
}

export default MovieDetails;