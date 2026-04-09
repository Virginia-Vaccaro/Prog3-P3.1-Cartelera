import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { initialMovies } from "./data/movies";
import Cartelera from "./pages/Cartelera";
import MovieDetail from "./pages/MovieDetail";

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const deleteMovie = (id) => setMovies(movies.filter((m) => m.id !== id));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Cartelera
              movies={movies}
              onDelete={deleteMovie}
              onSelect={setSelectedMovie}
            />
          }
        />
        <Route
          path="/details"
          element={<MovieDetail movie={selectedMovie} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
