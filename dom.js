// -------------MANIPULACION DEL DOM-----------
// CONSEGUIR UN ELEMENTO POR ID 
const titulo = document.getElementById("listarpokemon");
// CREAR ELEMENTOS CON DOM
const nuevoBoton = document.createElement("button")
nuevoBoton.textContent= "Este es un nuevo Boton!"
// Agregar el nuevo boton al body
document.body.appendChild(nuevoBoton)
// ESTILOS
nuevoBoton.style.color = "green"
nuevoBoton.style.fontSize = "18px"
nuevoBoton.style.fontFamily ="sans-serif"
// MODIFICAR EL CONTENIDO 
const boton = document.getElementById("botonSeleccionar")
boton.textContent  = "MANIPULACION DEL DOM"
// EVENTOS
boton.addEventListener("click",() =>{
    alert("Evento alerta")
});

