// import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
// import { Searchbar } from "components/Searchbar/Searchbar";
import { MoviesList } from "components/MoviesList/MoviesList";
import { searchMovie }  from "service/api";
import css from '../../components/Searchbar/Searchbar.module.css'


const Movie = () => {
const[searchMovies, setSearchMovies] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();
const location = useLocation();
const nameMovie = searchParams.get("query") ?? '';
const[searchForm, setSearchForm] = useState(nameMovie);


// const updateQueryString = (query) => {
//     if (!query) {
//         return;
//     }
//     const nextParams = query !== "" ? { query } : {};
//     setSearchParams(nextParams);
//   };


useEffect(() => {
    if (!searchForm) {
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
},[searchForm]);


const updateQueryString = evt => {
    if (evt.target.value === "") {
        return setSearchParams({});
    }
    setSearchParams({query: evt.target.value });

}

const handleSubmit = evt => {
evt.preventDefault();
setSearchForm(nameMovie);
}


    return (
       <div>
{/* <Searchbar onChange = {updateQueryString} value={nameMovie} onSubmit={handleSubmit}/> */}

<form className={css.form} onSubmit={handleSubmit} >
       <input
         className={css.input}
         type="text"
         value={nameMovie}
         onChange={updateQueryString}
         name="query"
         autoComplete="off"
         autoFocus
         placeholder="Search movie"
       />
        <button type="submit" className={css.button}>
<span className={css.buttonLabel}>Search</span>
</button>
     </form>

<MoviesList movies={searchMovies} location={location}/>
</div>
    )
       
};

export default Movie;