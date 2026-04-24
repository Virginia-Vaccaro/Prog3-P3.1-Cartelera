import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { initialMovies } from "./data/movies";
import Cartelera from "./pages/Cartelera";
import MovieDetail from "./pages/MovieDetail";
import NewMovie from "./pages/NewMovie";
import Navbar from "./components/Navbar";

function App() {
  const [movies, setMovies] = useState(initialMovies);
  // const [selectedMovie, setSelectedMovie] = useState(null); (esto ya no sirve porque ahora trabajamos con rutas dinámicas)

  const deleteMovie = (id) => setMovies(movies.filter((m) => m.id !== id));
  const addMovie = (newMovie) => setMovies([...movies, newMovie]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Cartelera
              movies={movies}
              onDelete={deleteMovie}
              // onSelect={setSelectedMovie}  (se elimina por usar ahora rutas dinámicas)
            />
          }
        />
        <Route
          path="/movies/:movieId"
          element={<MovieDetail movies={movies} />}
        />
        <Route
          path="/newMovie"
          element={<NewMovie movies={movies} onAdd={addMovie} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
