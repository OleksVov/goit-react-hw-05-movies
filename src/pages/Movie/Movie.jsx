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
// const nameMovie = searchParams.get("query") ?? '';


const updateQueryString = (query) => {
    if (!query) {
        return;
    }
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

// const updateQueryString = evt => {
//     if (evt.target.value === "") {
//         return setSearchParams({});
//     }
//     setSearchParams({query: evt.target.value })
// }

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
<Searchbar onSubmit = {updateQueryString}/>

<MoviesList movies={searchMovies} location={location}/>
</div>
    )
       
}