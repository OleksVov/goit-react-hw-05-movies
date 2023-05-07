import { useEffect, useState } from "react";
import { fetchTrending } from "service/api";
export const Home = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
    async function getMovies() {
        const result = await fetchTrending();
        setMovies(result);
        console.log(result);
    }
    getMovies();
},[]);

    return (
        <h1>Home</h1>
    )
}