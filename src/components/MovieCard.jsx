// mostrar solo algunos detalles de la película
// añadir los botones "Ver detalles" y "Eliminar"

const MovieCard = ({ movie, onViewDetails, onOpenModal }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />

      <h3>{movie.title}</h3>

      <p>
        <strong>Director:</strong> {movie.director}
      </p>
      <p>
        <strong>Cine:</strong> {movie.cinemas[0]}...
      </p>

      <div className="card-buttons">
        <button onClick={onViewDetails}>Ver detalles</button>
        <button className="btn-delete" onClick={onOpenModal}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
