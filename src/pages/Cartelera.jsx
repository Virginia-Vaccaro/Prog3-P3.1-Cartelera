import React from "react";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router";
import { useState } from "react";

const Cartelera = ({ movies, onDelete, onSelect }) => {
  const [movieToDelete, setMovieToDelete] = useState(null);
  const navigate = useNavigate();

  const confirmDelete = () => {
    onDelete(movieToDelete);
    setMovieToDelete(null); //cierro el modal
  };

  const handleViewDetails = (movie) => {
    onSelect(movie);
    navigate("/details");
  };

  return (
    <div className="cartelera-container">
      <h2>Películas en Rosario</h2>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onOpenModal={() => setMovieToDelete(movie.id)}
            onViewDetails={() => handleViewDetails(movie)}
          />
        ))}

        {movieToDelete && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>¿Estás seguro de eliminar la película?</h3>
              <div className="modal-actions">
                <button className="btn-confirm" onClick={confirmDelete}>
                  SI
                </button>
                <button
                  className="btn-cancel"
                  onClick={() => setMovieToDelete(null)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartelera;
