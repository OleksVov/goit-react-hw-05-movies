import { Link } from 'react-router-dom';
import css from './MoviesList.module.css'
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

export const MoviesList = ({movies}) => {
    console.log(movies);
    return (
      
        <ul className={css.imageGallery}>
            {movies.map(movie => (
               
                    <li key={movie.id}>
              <Link to={`movie/${movie.id}`}>
              <img src={IMAGES_BASE_URL + movie.poster_path} alt={movie.title} />
              </Link>
                </li>
                            
           ) )}
        </ul>
    )
}