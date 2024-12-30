
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
  
  // // Llamar a la función para cargar el modal al cargar la página
  // window.onload = cargarModal;
  