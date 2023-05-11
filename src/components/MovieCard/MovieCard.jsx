import NoImagePlaceholder from '../../image/NoImagePlaceholder.png';
import PropTypes from 'prop-types';
import css from "./MovieCard.module.css"


const MovieCard = ({movie,genres}) => {
    const {title, release_date, poster_path, overview, vote_average} = movie;

    return (
        <div className={css.cardBox}>
            <img src={(poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`) ||  NoImagePlaceholder} alt={title} />
            <div className={css.infoBox}>
            <h2>{title}</h2>
            <p>Release date: {release_date}</p>
            <p>Vote average: {vote_average}</p>
            <h3>Genres:</h3>
            <ul className={css.genresList}>
                {genres && genres.map(item => (
                    <li key={item.id}>
                        <p>{item.name}</p>
                    </li>
                ))}

            </ul>
            <h3>Overview:</h3>
            <p>{overview}</p>
            </div>
            
        </div>
    )
};

export default MovieCard;

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
    genres: PropTypes.array.isRequired,
}