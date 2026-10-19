
// Formulario de contacto

const formulario = document.getElementById("formContacto");

const mensajeFormulario = document.getElementById("mensajeFormulario");

// Comprobar los datos
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Activar validaciones de Bootstrap
    formulario.classList.add("was-validated");

    // Ocultar mensaje anterior
    mensajeFormulario.classList.add("d-none");

    // Revisar campos obligatorios
    if (!formulario.checkValidity()) {
        return;
    }

    // Mostrar confirmación de demostración
    mensajeFormulario.textContent =
        "¡Formulario completado correctamente! " +
        "Esta es una demostración y los datos no se envían.";

    mensajeFormulario.classList.remove("d-none");

});

// Limpiar formulario
formulario.addEventListener("reset", function() {

    formulario.classList.remove("was-validated");

    mensajeFormulario.classList.add("d-none");

});
