const form = document.querySelector('.form-contact form');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('correo');
const messageInput = document.getElementById('consulta');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe

    let errors = [];

    // Validación del nombre
    if (nameInput.value.trim().length < 4) {  //.trim elimina los espacios en blanco al inicio y al final del texto. Esto evita que alguien ponga solo espacios y pase la validación.//
        errors.push('El nombre completo debe tener al menos 4 caracteres.'); //se requiere un min de 4 caracteres para el nombre completo//
    }

    // Validación del correo
    const emailRegex = /^ [^\s@]+@[^\s@]+\.[^\s@]+ $/; //expresion regular para validar mail : nombre + dominio + extension.//
    //  /^	Comienzo de la cadena.
    //  [^\s@]+	Al menos un carácter que no sea espacio ni @.
    //  @	Literalmente el símbolo @.
    //  [^\s@]+	Otra vez, al menos un carácter que no sea espacio ni @.
    //  \.	Un punto literal (.)
    //  [^\s@]+	Al menos un carácter después del punto.
    //  $/	Fin de la cadena.
    if (!emailRegex.test(emailInput.value.trim())) {
        errors.push('El correo electrónico no es válido.');
    }

    // Validación de la consulta
    if (messageInput.value.trim().length < 10) {
        errors.push('La consulta debe tener al menos 10 caracteres.');
    }

    // Mostrar errores o enviar el formulario
    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        alert('Formulario enviado correctamente.');
        form.submit(); // Envía el formulario si no hay errores
    }
});