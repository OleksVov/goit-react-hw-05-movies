

export const MovieCard = ({movie}) => {
    const {title, release_date, poster_path, overview, vote_average} = movie;

    return (
        <div>
            <h2>{title}</h2>
            <p>Release date: {release_date}</p>
            <p>Vote average: {vote_average}</p>
            <h3>Overview:</h3>
            <p>{overview}</p>
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />

        </div>
    )
}