document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
  
    // Mostrar el menú
    abrir.addEventListener('click', () => {
      nav.classList.add("visible");
    });
  
    // Cerrar el menú
    cerrar.addEventListener('click', () => {
      nav.classList.remove("visible");
    });
  });