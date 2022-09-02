import agregarTarea from "./components/AgregarTarea.js";
import mostrarTareas from "./components/MostrarListaTarea.js";



const btnAgregar = document.querySelector("[data-form-btn]");

btnAgregar.addEventListener("click", agregarTarea);
mostrarTareas();
