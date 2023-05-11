import NoImagePlaceholder from '../../image/NoImagePlaceholder.png'

export const MovieCard = ({movie,genres}) => {
    const {title, release_date, poster_path, overview, vote_average} = movie;

    return (
        <div>
            <img src={(poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`) ||  NoImagePlaceholder} alt={title} />
            <div>
            <h2>{title}</h2>
            <p>Release date: {release_date}</p>
            <p>Vote average: {vote_average}</p>
            <h2>Genres</h2>
            <ul>
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
}