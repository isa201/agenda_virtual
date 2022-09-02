const eliminarTarea = (event) => {
  alert("Tarea eliminada");

  //ELEMENTO PADRE DE LA TAREA SOBRE LA QUE SE EJECUTA EL EVENTO
  const tareaActual = event.target.parentNode;  

  //ID DE LA TAREA ACTUAL, ACCEDIENDO POR EL PRIMER ELEMENTO HIJO
  //PARA PODER ELIMNAR POR ID SE ACCEDE AL VALOR DEL ELEMENTO CON INNERHTML
  const idActual = tareaActual.firstElementChild;
  localStorage.removeItem(idActual.innerHTML);

//ELIMINA EL ELEMENTO DE LA TABLA EN LA PANTALLA
  tareaActual.remove();
};

export default eliminarTarea;
