import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchTrending } from "service/api";
import { MoviesList } from "components/MoviesList/MoviesList";


const Home = () => {
const [movies, setMovies] = useState([]);
const location = useLocation();

useEffect(() => {
    async function getMovies() {
        const result = await fetchTrending();
        setMovies(result);
       
    }
    getMovies();
},[]);

    return (
       <div>
        <MoviesList movies = {movies} location={location}/>
       </div>
    )
};


export default Home;