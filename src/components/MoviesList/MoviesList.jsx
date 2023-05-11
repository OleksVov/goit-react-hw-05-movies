import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';
import NoImagePlaceholder from '../../image/NoImagePlaceholder.png'
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

export const MoviesList = ({movies, location}) => {
    return (
      
        <div className={css.imageBox}>
            <ul className={css.imageGallery}>
            {movies.map(movie => (
               
                    <li className={css.imageItem} key={movie.id}>
              <Link to={`/movie/${movie.id}`} state = {{ from: location}}>
              <img className={css.image} src={(movie.poster_path && `${IMAGES_BASE_URL}${movie.poster_path}`)|| NoImagePlaceholder} alt={movie.title} />
              <p className={css.imageTitle}>{movie.title}</p>

              </Link>
                </li>
                            
           ) )}
        </ul>
        </div>
    )
};
MoviesList.propTypes = {
    location: PropTypes.object.isRequired,
    movies: PropTypes.array.isRequired,
}