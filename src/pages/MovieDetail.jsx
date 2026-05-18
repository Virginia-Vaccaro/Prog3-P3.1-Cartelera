// incluir un botón al final que diga "Volver a la cartelera" y navegue a esa vista
// utilizar el hook useNavigate
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const MovieDetail = ({ movies }) => {
  const navigate = useNavigate();
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === Number(movieId));

  if (!movie) {
    return (
      <div>
        <p>No seleccionaste ninguna película.</p>
        <button onClick={() => navigate("/")}>Volver a cartelera</button>
      </div>
    );
  }

  useEffect(() => {
    if (movie) {
      document.title = `${movie.title}`;
    }

    // Opcional: Limpiar el título al salir del componente
    return () => {
      document.title = "Cine Rosario - Cartelera";
    };
  }, [movie]);

  return (
    <div className="detail-container">
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p>
        <strong>Sinopsis:</strong> {movie.synopsis}
      </p>
      <p>
        <strong>Horario:</strong> {movie.date} a las {movie.time}
      </p>
      <p>
        <strong>Cines:</strong> {movie.cinemas.join(", ")}
      </p>
      <button onClick={() => navigate("/")}>Volver</button>
    </div>
  );
};

export default MovieDetail;
