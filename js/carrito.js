import { actualizarContadorCarrito } from "./contador.js";

document.addEventListener("DOMContentLoaded", () => {
  const carrito = document.querySelector("#lista-carrito");
  const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");

  // Array para almacenar productos del carrito
  let productosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Obtener los productos desde el archivo JSON y cargar eventos a los botones
  fetch("productos.json")
    .then((response) => response.json())
    .then((productos) => {
      cargarEventosAgregarCarrito(productos);
    })
    .catch((error) => {
      console.error("Error al cargar los productos:", error);
    });

  mostrarCarrito();
  actualizarContadorCarrito();

  // Vaciar carrito
  vaciarCarritoBtn.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que deseas vaciar el carrito?")) {
      productosCarrito = [];
      sincronizarLocalStorage();
      mostrarCarrito();
      calcularTotalCarrito();
    }
  });

  // ✅ Vincular los botones de agregar al carrito
  function cargarEventosAgregarCarrito(productos) {
    const botonesAgregar = document.querySelectorAll(".agregar-carrito");

    botonesAgregar.forEach((boton) => {
      boton.addEventListener("click", () => {
        const productoId = parseInt(boton.getAttribute("data-id"));
        const productoSeleccionado = productos.find(
          (producto) => producto.id === productoId
        );

        if (productoSeleccionado) {
          agregarProducto(productoSeleccionado);
        }
      });
    });
  }

  // ✅ Agregar producto al carrito
  function agregarProducto(producto) {
// Verificar si el producto ya está en el carrito
const existe = productosCarrito.find((item) => item.id === producto.id);

if (existe) {
  // Si ya existe, incrementa la cantidad
  existe.cantidad++;
} else {
  // Si no existe, agrega el producto con cantidad inicial 1
  producto.cantidad = 1;
  productosCarrito.push(producto);
}    sincronizarLocalStorage();
    mostrarCarrito();
    actualizarContadorCarrito();
    calcularTotalCarrito();
  }

  // ✅ Mostrar los productos del carrito en el HTML
  function mostrarCarrito() {
    carrito.innerHTML = "";

    productosCarrito.forEach((producto, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 60px; height: 60px; object-fit: cover; margin-left: 10px; margin-right: 15px;">
        <strong>${producto.nombre}</strong> - ${formatearPrecio(producto.precio)}
        <span>(Cantidad: ${producto.cantidad || 1})</span>
        <button class="btn-eliminar" data-index="${index}">Eliminar</button>
      `;
      carrito.appendChild(li);
    });

    // Agregar evento a cada botón de eliminar
    document.querySelectorAll(".btn-eliminar").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        eliminarProducto(e.target.dataset.index);
      });
    });
    calcularTotalCarrito();
  }

  // ✅ Eliminar producto del carrito
  function eliminarProducto(index) {
    productosCarrito.splice(index, 1);
    sincronizarLocalStorage();
    mostrarCarrito();
    actualizarContadorCarrito();
    calcularTotalCarrito();
  }

  // ✅ Guardar carrito en localStorage
  function sincronizarLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(productosCarrito));
  }

  // ✅ Formatear precios
  function formatearPrecio(precio) {
    return new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(precio);
  }
  function calcularTotalCarrito() {
    const total = productosCarrito.reduce(
      (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
      0
    );
    document.querySelector("#total-carrito").textContent = formatearPrecio(total);
  }
  
});
