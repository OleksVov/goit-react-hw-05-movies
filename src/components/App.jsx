import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { Movie } from "pages/Movie/Movie";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { NotFound } from "pages/NotFound";
import { SharedLayout } from "./SharedLayout/SharedLayout";



export const App = () => {
  return (
   
      <Routes>
       <Route path="/" element={<SharedLayout/>}>
       <Route index element={<Home />}/>
        <Route path="movie" element={<Movie />}/>
        <Route path="movie/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
       </Route>
      </Routes>
  
  );
};
