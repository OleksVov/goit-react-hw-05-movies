import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { Movie } from "pages/Movie/Movie";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { NotFound } from "pages/NotFound";



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie" element={<Movie />}/>
        <Route path="/movieDetails" element={<MovieDetails />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
};
