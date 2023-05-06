import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
API_KEY = '8d83f7efdfaf711afea4c7df39bd5119';

// https://api.themoviedb.org/3/movie/550?api_key=8d83f7efdfaf711afea4c7df39bd5119
// /trending/get-trending 
// /search/search-movies
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма

export const fetchTrending = async() => {
const response = await axios.get(`/trending/get-trending?api_key=${API_KEY}`);
return response;
}