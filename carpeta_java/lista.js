document.addEventListener("DOMContentLoaded", cargarTareas); 

        function agregarTarea() {
            let input = document.getElementById("nuevaTarea");
            let texto = input.value.trim();

            if (texto !== "") {
                let lista = document.getElementById("tareas");
                let tarea = document.createElement("li");
                tarea.innerHTML = `${texto} <button onclick="eliminarTarea(this)">Eliminar</button>`;
                lista.appendChild(tarea);
                guardarTareas();
                input.value = ""; // Limpiar campo después de agregar la tarea
                input.focus();
            }
        }

        function eliminarTarea(boton) {
            let tarea = boton.parentElement;
            tarea.remove();
            guardarTareas();
        }

        function guardarTareas() {
            let tareas = [];
            document.querySelectorAll("#tareas li").forEach(tarea => {
                tareas.push(tarea.firstChild.textContent.trim());
            });
            localStorage.setItem("tareas", JSON.stringify(tareas));
        }

        function cargarTareas() {
            let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
            let lista = document.getElementById("tareas");
            tareas.forEach(texto => {
                let tarea = document.createElement("li");
                tarea.innerHTML = `${texto} <button onclick="eliminarTarea(this)">Eliminar</button>`;
                lista.appendChild(tarea);
            });
        }