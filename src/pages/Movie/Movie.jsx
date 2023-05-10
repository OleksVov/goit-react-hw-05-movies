// import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { Searchbar } from "components/Searchbar/Searchbar";
import { MoviesList } from "components/MoviesList/MoviesList";
import { searchMovie }  from "service/api";


export const Movie = () => {
const[searchMovies, setSearchMovies] = useState([]);
const [searchParams, setSearchParams] = useSearchParams('');
const location = useLocation();
const query = searchParams.get("query") ?? '';

console.log(searchMovies);

const updateQueryString = (query) => {
    if (!query) {
        return;
    }
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

useEffect(() => {
    if (!searchParams.get("query")) {
        return
    }
   try {
    const getSearchMovie = async() => {
        const result = await searchMovie(searchParams);
        setSearchMovies(result);
        
    };
    getSearchMovie();
   } catch (error) {
    console.log(error);
   }
},[searchParams]);

 
    return (
       <div>
<Searchbar onChange = {updateQueryString} value={searchMovie}/>
<MoviesList movies={searchMovies} location={location}/>
</div>
    )
       
}