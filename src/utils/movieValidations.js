export const validateForm = (formData, movies) => {
  const errores = {};

  if (!formData.title?.trim()) errores.title = "El título es obligatorio"; //aca mismo se crea al objeto errores la prop title con lo igualado.
  if (!formData.director?.trim())
    errores.director = "El director es obligatorio";
  if (!formData.poster?.trim()) errores.poster = "El poster es obligatorio";
  if (!formData.duration?.trim())
    errores.duration = "La duración es obligatoria";
  if (!formData.rating) errores.rating = "El rating es obligatorio";
  if (!formData.sinopsis?.trim())
    errores.sinopsis = "La sinopsis es obligatoria";
  if (formData.cinemas == [])
    errores.rating = "Debés seleccionar al menos un cine";
  if (!formData.date) errores.date = "La fecha es obligatoria";
  if (!formData.time?.trim()) errores.time = "El time es obligatorio";

  //const titleFiltered = movies.filter(m => m.title.tolowerCase().include(formData.title.toLowerCase()))

  const titleFiltered = movies.find((m) =>
    m.title.toLowerCase().includes(formData.title.toLowerCase()),
  );

  if (titleFiltered) {
    errores.title = "La película ingresada ya está registrada";
  }

  return {
    isValid: Object.values(errores).length === 0,
    errors: errores,
  };
};
