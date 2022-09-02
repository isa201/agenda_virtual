import eliminarTarea from "./EliminarTarea.js";
var id = 0;

const agregarTarea = (event) => {
  event.preventDefault();

  id++;
  //DESCRIPCION DE LA TAREA
  //ID PARA PODER BORRAR LA TAREA POR ID DESPUES (SE OCULTA MAS ADELANTE)
  const idTarea = document.createElement("span");
  idTarea.innerHTML = id;
  const detalleTarea = document.createElement("span");
  let input = document.querySelector("[data-form-input]");
  detalleTarea.innerHTML = input.value;
  input.value = " ";

  //BOTONES DE LA TAREA

  const btnEliminar = document.createElement("button");
  btnEliminar.innerHTML = "ELIMINAR";
  btnEliminar.classList.add("btn-eliminar");
  btnEliminar.addEventListener("click", eliminarTarea);

  //FECHA DE LA TAREA
  const campoFecha = document.querySelector("[data-form-date]").value;
  const fecha = moment(campoFecha).format("DD/MM/YYYY, h:mm:ss a");
  const detalleFecha = document.createElement("span");
  detalleFecha.innerHTML = fecha;

  //CONTENEDOR DIV DE LA TAREA
  const contenedorTarea = document.createElement("li");
  contenedorTarea.appendChild(idTarea);
  contenedorTarea.appendChild(detalleTarea);
  contenedorTarea.appendChild(detalleFecha);
  contenedorTarea.appendChild(btnEliminar);

  idTarea.style.display = "none"; //OCULTAR ELEMENTO ID SE USA PARA ELIMINAR LA TAREA

  //LISTA DE LA TAREA
  const listaTareas = document.querySelector("[data-list]");
  listaTareas.appendChild(contenedorTarea);

  const nuevaTarea = {
    id: id,
    descripcion: detalleTarea.innerHTML,
    fecha: fecha,
  };

  localStorage.setItem(nuevaTarea.id, JSON.stringify(nuevaTarea));
};

export default agregarTarea;
