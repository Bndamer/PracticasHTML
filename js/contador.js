export function actualizarContadorCarrito() {
    // Actualiza el contador del carrito en el HEADER de mis páginas HTML
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let contador = carrito.reduce(
      (total, producto) => total + producto.cantidad,
      0
    );
    document.getElementById("carrito-count").textContent = contador;
  }
  
  // Llama a esta función al cargar la página
  window.onload = actualizarContadorCarrito;
  