import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router";

const NewMovie = ({ movies, onAdd }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    director: "",
    poster: "",
    duration: "",
    rating: "",
    sinopsis: "",
    cinemas: [],
    date: "",
    time: "",
  });

  const [error, setError] = useState({});

  const cinesValidos = [
    "Nuevo Monumental",
    "Showcase Rosario",
    "Cinemark Hoyts",
    "Cines del centro",
    "Cine “El Cairo”",
    "Las Tipas",
  ];

  /*
const onChange = (e) => {
  setFormData({...formData, [e.target.name] : e.target.value})
}
*/
  const onChange = (e) => {
    const { name, value, options } = e.target;

    if (name === "cinemas") {
      const selected = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setFormData({ ...formData, cinemas: selected });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const errores = {};

    if (!formData.title.trim()) errores.title = "El título es obligatorio"; //aca mismo se crea al objeto errores la prop title con lo igualado.
    if (!formData.director.trim())
      errores.director = "El director es obligatorio";
    if (!formData.poster.trim()) errores.poster = "El poster es obligatorio";
    if (!formData.duration.trim())
      errores.duration = "La duración es obligatoria";
    if (!formData.rating) errores.rating = "El rating es obligatorio";
    if (!formData.sinopsis.trim())
      errores.sinopsis = "La sinopsis es obligatoria";
    if (formData.cinemas == [])
      errores.rating = "Debés seleccionar al menos un cine";
    if (!formData.date) errores.date = "La fecha es obligatoria";
    if (!formData.time.trim()) errores.time = "El time es obligatorio";

    //const titleFiltered = movies.filter(m => m.title.tolowerCase().include(formData.title.toLowerCase()))

    const titleFiltered = movies.find((m) =>
      m.title.toLowerCase().includes(formData.title.toLowerCase()),
    );

    if (titleFiltered) {
      errores.title = "La película ingresada ya está registrada";
    }

    setError(errores);

    return Object.values(errores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const newMovie = { id: Date.now(), ...formData }; //esto seria equivalente a escribir uno a uno lo que hay en el arreglo formData
      onAdd(newMovie);
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Carguemos una película!!!!!</h1>
      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input
          onChange={onChange}
          type="text"
          name="title"
          value={formData.title}
          placeholder="completar título"
        />
        {error.title && <p>{error.title}</p>}

        <label>Director:</label>
        <input
          onChange={onChange}
          type="text"
          name="director"
          value={formData.director}
          placeholder="completar director"
        />
        {error.director && <p>{error.director}</p>}

        <label>Póster:</label>
        <input
          onChange={onChange}
          type="text"
          name="poster"
          value={formData.poster}
          placeholder="url"
        />
        {error.poster && <p>{error.poster}</p>}

        <label>Duración:</label>
        <input
          onChange={onChange}
          type="number"
          name="duration"
          value={formData.duration}
          placeholder="completar duración"
        />
        {error.duration && <p>{error.duration}</p>}

        <label>Clasificación:</label>
        <select onChange={onChange} name="rating" value={formData.rating}>
          <option value="apt">Apta para todo público</option>
          <option value="apt+13">Apta para mayores de 13 años</option>
          <option value="apt+18">Apta para mayores de 18 años</option>
        </select>
        {error.rating && <p>{error.rating}</p>}

        <label>Sinopsis:</label>
        <input
          onChange={onChange}
          type="text"
          name="sinopsis"
          value={formData.sinopsis}
          placeholder="completar duración"
        />
        {error.sinopsis && <p>{error.sinopsis}</p>}

        <label>Cines:</label>
        <select
          onChange={onChange}
          name="cinemas"
          multiple
          value={formData.cinemas}
        >
          {cinesValidos.map((cinema) => (
            <option key={cinema} value={cinema}>
              {cinema}
            </option>
          ))}
        </select>
        {error.cinemas && <p>{error.cinemas}</p>}

        <label>Fecha:</label>
        <input
          onChange={onChange}
          type="date"
          name="date"
          value={formData.date}
          placeholder="completar la fecha"
        />
        {error.date && <p>{error.date}</p>}

        <label>Horario:</label>
        <input
          onChange={onChange}
          type="time"
          name="time"
          value={formData.time}
          placeholder="completar el horario"
        />
        {error.time && <p>{error.time}</p>}

        <button type="submit">Enviar formulario</button>
        <button onClick={() => navigate("/")}>volver</button>
      </form>
    </div>
  );
};

export default NewMovie;
