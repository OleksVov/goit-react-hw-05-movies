

export const MovieCard = ({movie}) => {
    const {title, release_date, poster_path} = movie;

    return (
        <div>
            <h2>{title}</h2>
            <p>{release_date}</p>
            <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={title} />

        </div>
    )
}