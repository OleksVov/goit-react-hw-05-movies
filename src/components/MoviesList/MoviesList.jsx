
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

export const MoviesList = ({movies}) => {
    console.log(movies);
    return (
      
        <ul>
            {movies.map(movie => (
               
                    <li key={movie.id}>
                <img src={`${IMAGES_BASE_URL} ${movie.poster_path}`} alt={movie.title} />
                </li>
                            
           ) )}
        </ul>
    )
}