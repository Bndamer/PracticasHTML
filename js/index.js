// Importar la función desde contadorCarrito.js
import { actualizarContadorCarrito } from "./contador.js";

// Obtiene los botones "Agregar al Carrito"
const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
  
botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener('click', (event) => {
        // Obtener el ID del producto (usando el data-id del botón)
        // Obtener el contenedor del producto
  const productoCard = event.target.closest('.alfa-card');
  
  // Extraer información del producto
  const idProducto = event.target.getAttribute('data-id'); // Obtener ID
  const nombreProducto = productoCard.querySelector('.alfa-nombre').textContent; // Nombre
  const precioProducto = productoCard.querySelector('.alfa-precio').textContent; // Precio
  const imagenProducto = productoCard.querySelector('.alfa-img').src; // Imagen

        // Crear el objeto del producto
  const producto = {
      id: idProducto,
      nombre: nombreProducto,
      precio: precioProducto,
      imagen: imagenProducto // Ahora también incluye la imagen
  };

        // Obtener el carrito del localStorage (si existe)
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Verificar si el producto ya está en el carrito
        const productoExistente = carrito.find(item => item.id === idProducto);

        if (productoExistente) {
            // Si ya está, solo aumentamos la cantidad
            productoExistente.cantidad += 1;
        } else {
            // Si no está, agregamos el producto al carrito
            producto.cantidad = 1;
            carrito.push(producto);
        }

        // Guardamos el carrito actualizado en el localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        actualizarContadorCarrito();

        // Puedes mostrar un mensaje de confirmación si lo deseas
        alert('Producto agregado al carrito');
    });
});