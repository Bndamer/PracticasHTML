
        // Añadir los eventos al modal una vez cargado
        const abrirLoginBtn = document.getElementById('abrir-login');
        const cerrarModalBtn = document.getElementById('cerrar-modal');
        const modal = document.getElementById('login-modal');
  
        abrirLoginBtn.addEventListener('click', () => {
          modal.style.display = 'flex'; // Mostrar el modal
          modal.style.opacity = '1';
          modal.style.visibility = 'visible';
        });
  
        cerrarModalBtn.addEventListener('click', () => {
          modal.style.display = 'none'; // Ocultar el modal
          modal.style.opacity = '0';
          modal.style.visibility = 'hidden';
        });
  
        window.addEventListener('click', (event) => {
          if (event.target === modal) {
            modal.style.display = 'none';
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
          }
        });

        // Capturamos el formulario y sus campos
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Escuchamos el evento submit del formulario
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Limpiar mensajes de error previos
    clearErrors();

    // Array para almacenar los errores
    let errors = [];

    // Validación del correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        errors.push('Por favor, ingrese un correo electrónico válido.');
        showError(emailInput, 'Correo electrónico no válido.');
    }

    // Validación de la contraseña
    if (passwordInput.value.trim().length < 8) {
        errors.push('La contraseña debe tener al menos 8 caracteres.');
        showError(passwordInput, 'La contraseña debe tener al menos 8 caracteres.');
    }

    // Si hay errores, los muestra y no envia el formulario
    if (errors.length > 0) {
        return;
    }

    // Si no hay errores, mostrar un mensaje de éxito
    alert('Inicio de sesión exitoso');
    loginForm.reset(); // Limpiar el formulario
});

// Función para mostrar errores debajo del input
function showError(input, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerText = message;
    input.parentElement.appendChild(errorDiv);
}

// Función para limpiar errores previos
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((error) => error.remove());
}
  
  