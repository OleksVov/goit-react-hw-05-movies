import { useEffect, useState } from "react";
import { fetchTrending } from "service/api";
import { MoviesList } from "components/MoviesList/MoviesList";


export const Home = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
    async function getMovies() {
        const result = await fetchTrending();
        setMovies(result);
       
    }
    getMovies();
},[]);

    return (
       <div>
         <h1>Home</h1>
        <MoviesList movies = {movies}/>
       </div>
    )
}