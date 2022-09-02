import eliminarTarea from "./EliminarTarea.js";

const mostrarTareas = () => {
  //const listaTareas = document.querySelector("[data-list]");
  alert("BIENVENIDO A TU AGENDA VIRTUAL,ESTAS SON TUS TAREAS");
  console.log(localStorage.length);

  //IBTENGO TODOS LAS CLAVES DE LOS ELEMENTOS DEL LOCALSTORAGE
  const keys = Object.keys(localStorage);
  //CREO UN ARREGLO NUEVO CADA VEZ QUE SE RECARGUE LA PAGINA
  var tasks = [];

//RECORRO EL ARREGLO DE LAS CLAVES Y AGREGO CADA ELEMENTO AL ARREGLO VACIO 
//BUSCANDO POR LA CLAVE PRINCIPAL DE CADA UNO
  keys.forEach((element) => {
    tasks.push(JSON.parse(localStorage.getItem(element)));
  });

  console.log(tasks);

  //RECCORRO EL AREGLO CON TODOS LOS ELEMENTOS Y POR CADA UNO CREO UN LI 
  //SIMILAR A COMO EN EL COMPONENTE DE AGREGARTAREA.JS
  tasks.forEach((elemento) => {
    const idTarea = document.createElement("span");
    idTarea.innerHTML = elemento.id;
    const detalleTarea = document.createElement("span");
    let input = document.querySelector("[data-form-input]");
    detalleTarea.innerHTML = elemento.descripcion;
    input.value = " ";

    const btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "ELIMINAR";
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.addEventListener("click", eliminarTarea);

    const detalleFecha = document.createElement("span");
    detalleFecha.innerHTML = elemento.fecha;

    const contenedorTarea = document.createElement("li");
    contenedorTarea.appendChild(idTarea);
    contenedorTarea.appendChild(detalleTarea);
    contenedorTarea.appendChild(detalleFecha);
    contenedorTarea.appendChild(btnEliminar);

    idTarea.style.display = "none";

    const listaTareas = document.querySelector("[data-list]");
    listaTareas.appendChild(contenedorTarea);
  });
};
export default mostrarTareas;
