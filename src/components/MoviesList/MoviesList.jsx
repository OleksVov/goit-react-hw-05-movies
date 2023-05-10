import { Link } from 'react-router-dom';
import css from './MoviesList.module.css'
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

export const MoviesList = ({movies, location}) => {
    return (
      
        <div className={css.imageBox}>
            <ul className={css.imageGallery}>
            {movies.map(movie => (
               
                    <li className={css.imageItem} key={movie.id}>
              <Link to={`/movie/${movie.id}`} state = {{ from: location}}>
              <img className={css.image} src={(movie.poster_path && `${IMAGES_BASE_URL}${movie.poster_path}`)|| "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg?w=1060"} alt={movie.title} />
              <p className={css.imageTitle}>{movie.title}</p>

              </Link>
                </li>
                            
           ) )}
        </ul>
        </div>
    )
}