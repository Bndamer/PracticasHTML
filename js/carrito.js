// Selección de elementos
const carrito = document.querySelector("#lista-carrito");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");

// Array para almacenar productos del carrito
let productosCarrito = [];

// Cargar eventos
document.addEventListener("DOMContentLoaded", () => {
  // Cargar carrito desde el localStorage
  productosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
  mostrarCarrito();
});

vaciarCarritoBtn.addEventListener("click", () => {
  productosCarrito = []; // Vaciar el array
  sincronizarLocalStorage();
  mostrarCarrito();
});

// Función para agregar producto al carrito
function agregarProducto(producto) {
  productosCarrito.push(producto);
  sincronizarLocalStorage();
  mostrarCarrito();
}

// Mostrar los productos del carrito en el HTML
function mostrarCarrito() {
  carrito.innerHTML = ""; // Limpiar contenido previo

  productosCarrito.forEach((producto, index) => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - ${producto.precio}`;
    const img = document.createElement("img");
    img.src = producto.imagen; // Asignar URL de la imagen
    img.alt = producto.nombre; // Texto alternativo
    img.style.width = "60px"; // Ancho fijo
    img.style.height = "60px"; // Alto fijo,necesito establecerlo para que se aplique el objectFit
    img.style.objectFit = "cover"; // Asegura que la imagen se recorte y ajuste
    img.style.marginLeft = "10px";
    img.style.marginRight = "15px";

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = () => {
      eliminarProducto(index);
    };
    li.appendChild(img);
    li.appendChild(btnEliminar);
    carrito.appendChild(li);
  });
}

// Eliminar producto del carrito
function eliminarProducto(index) {
  productosCarrito.splice(index, 1);
  sincronizarLocalStorage();
  mostrarCarrito();
}

// Guardar carrito con localStorage
function sincronizarLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(productosCarrito));
}

function actualizarContadorCarrito() {
  // Actualiza el contador del carrito en el HEADER de mis paginas html
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let contador = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );
  document.getElementById("carrito-count").textContent = contador;
}

// Llama a esta función al cargar la página
window.onload = actualizarContadorCarrito;