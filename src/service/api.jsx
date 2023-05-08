import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '8d83f7efdfaf711afea4c7df39bd5119';

// https://api.themoviedb.org/3/movie/550?api_key=8d83f7efdfaf711afea4c7df39bd5119
// /trending/get-trending 
// /search/search-movies
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма

export const fetchTrending = async() => {
const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
return response.data.results;
}

export const fetchMovieById = async(id) => {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    console.log(response.data);
    return response.data;
}