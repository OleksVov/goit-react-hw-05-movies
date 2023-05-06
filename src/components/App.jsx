import { Route, Routes, Link } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { Movie } from "pages/Movie/Movie";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { NotFound } from "pages/NotFound";



export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movie">Movie</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie" element={<Movie />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
};
