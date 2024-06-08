document.addEventListener("DOMContentLoaded", function () {
    // Variables del cambio de formulario
    const movPag = document.querySelector('.movPag');
    const btnAdelante2 = document.querySelector('.sigPag');
    const btnAtras1 = document.querySelector(".vol-pag1");
    const btnAdelante3 = document.querySelector(".sigPag2");
    const btnAtras2 = document.querySelector(".vol-pag2");
    const btnFinal = document.querySelector(".Fin");

    // Variables de la barra de progreso
    const progressText = document.querySelectorAll(".paso p");
    const progressFas = document.querySelectorAll(".paso .fas");
    const num = document.querySelectorAll(".paso .num");

    let max = 3;
    let cont = 1;

    // Función para mostrar mensajes de alerta
    function showAlert(message) {
        alert(message);
    }

    // Validaciones comunes
    function verificar(texto) {
        const regNombre = /^[A-Za-zÑñÁÉÍÓÚáéíóú]+((?:[\s{1}][A-Za-zÑñÁÉÍÓÚáéíóú]+)+)?$/;
        return regNombre.test(texto);
    }

    function verificarCel(numero) {
        const regCelu = /^[0-9]+((?:[\s{1}][0-9]+)+)?$/;
        return regCelu.test(numero);
    }

    function verificarCorreo(correo) {
        const regCorreo = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
        return regCorreo.test(correo);
    }

    function verificarUsuarioContrasena(texto) {
        const regUsuario = /^[A-Za-z0-9]+((?:[\s{1}][A-Za-z0-9]+)+)?$/;
        return regUsuario.test(texto);
    }

    function verificarContrasena(contrasena) {
        const regContrasena = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/;
        return regContrasena.test(contrasena);
    }

    // Transición adelante
    btnAdelante2.addEventListener("click", function (e) {
        e.preventDefault();
        const nombre = document.getElementById('nombres').value;
        const apellido1 = document.getElementById('apellido1').value;
        const apellido2 = document.getElementById('apellido2').value;
        const sexo = document.getElementById('sexo').value;
        const fecha = document.getElementById('fechaNac').value;

        if (nombre === "" || apellido1 === "" || apellido2 === "" || sexo == 0 || fecha === "") {
            showAlert("Por favor llene todos los datos");
        } else if (nombre.length < 3 || apellido1.length < 3 || apellido2.length < 3 || !verificar(nombre) || !verificar(apellido1) || !verificar(apellido2)) {
            if (nombre === "" || nombre.length < 3 || !verificar(nombre)) {
                showAlert("El nombre no es válido");
            }
            if (apellido1 === "" || apellido1.length < 3 || !verificar(apellido1)) {
                showAlert("El apellido paterno no es válido");
            }
            if (apellido2 === "" || apellido2.length < 3 || !verificar(apellido2)) {
                showAlert("El apellido materno no es válido");
            }
            if (fecha === "") {
                showAlert("Seleccione una fecha");
            }
            if (sexo == 0) {
                showAlert("Seleccione su género");
            }
        } else {
            movPag.style.marginLeft = "-25%";
            num[cont - 1].classList.add("active");
            progressText[cont - 1].classList.add("active");
            progressFas[cont - 1].classList.add("active");
            cont++;
        }
    });

    btnAdelante3.addEventListener("click", function (e) {
        e.preventDefault();
        const celular = document.getElementById('numCel').value;
        const correo = document.getElementById('correo').value;
        const pais = document.getElementById('pais').value;
        const ciudad = document.getElementById('ciudad').value;
        const direccion = document.getElementById('direccion').value;

        if (celular === "" || correo === "" || pais == 0 || ciudad === "" || direccion === "") {
            showAlert("Por favor llene todos los datos");
        } else if (celular.length < 8 || correo.length < 12 || ciudad.length < 4 || direccion.length < 9 || !verificarCel(celular) || !verificarCorreo(correo) || !verificar(ciudad) || !verificar(direccion)) {
            if (celular === "" || celular.length < 8 || !verificarCel(celular)) {
                showAlert("El número de celular no es válido");
            }
            if (correo === "" || correo.length < 12 || !verificarCorreo(correo)) {
                showAlert("El correo electrónico no es válido");
            }
            if (pais == 0) {
                showAlert("Seleccione su país");
            }
            if (ciudad === "" || ciudad.length < 4 || !verificar(ciudad)) {
                showAlert("La ciudad no es válida");
            }
            if (direccion === "" || direccion.length < 9 || !verificar(direccion)) {
                showAlert("La dirección no es válida");
            }
        } else {
            movPag.style.marginLeft = "-50%";
            num[cont - 1].classList.add("active");
            progressText[cont - 1].classList.add("active");
            progressFas[cont - 1].classList.add("active");
            cont++;
        }
    });

    btnFinal.addEventListener("click", function (e) {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value;
        const contra1 = document.getElementById('contra1').value;
        const contra2 = document.getElementById('contra2').value;

        if (usuario === "" || contra1 === "" || contra2 === "") {
            showAlert("Por favor llene todos los datos");
        } else if (usuario.length < 4 || contra1.length < 8 || !verificarUsuarioContrasena(usuario) || !verificarContrasena(contra1)) {
            if (usuario === "" || usuario.length < 4 || !verificarUsuarioContrasena(usuario)) {
                showAlert("El usuario no es válido");
            }
            if (contra1 === "" || contra1.length < 8 || !verificarContrasena(contra1)) {
                showAlert("La contraseña no es válida");
            }
            if (contra2 === "") {
                showAlert("Confirmar contraseña no puede estar vacío");
            }
            if (contra2 !== contra1) {
                showAlert("Las contraseñas deben ser iguales");
            }
        } else {
            num[cont - 1].classList.add("active");
            progressText[cont - 1].classList.add("active");
            progressFas[cont - 1].classList.add("active");
            cont++;
            showAlert("Registrado con éxito");
        }
    });

    // Transición atrás
    btnAtras1.addEventListener("click", function (e) {
        e.preventDefault();
        movPag.style.marginLeft = "0%";
        num[cont - 2].classList.remove("active");
        progressText[cont - 2].classList.remove("active");
        progressFas[cont - 2].classList.remove("active");
        cont--;
    });

    btnAtras2.addEventListener("click", function (e) {
        e.preventDefault();
        movPag.style.marginLeft = "-25%";
        num[cont - 2].classList.remove("active");
        progressText[cont - 2].classList.remove("active");
        progressFas[cont - 2].classList.remove("active");
        cont--;
    });

    // Funciones para mostrar contraseña
    function togglePasswordVisibility(inputId, hideId, showId) {
        const input = document.getElementById(inputId);
        const hide = document.getElementById(hideId);
        const show = document.getElementById(showId);

        if (input.type === 'password') {
            input.type = "text";
            hide.style.display = "block";
            show.style.display = "none";
        } else {
            input.type = "password";
            hide.style.display = "none";
            show.style.display = "block";
        }
    }

    document.getElementById('mostrar1').addEventListener('click', () => togglePasswordVisibility('contra1', 'ocultar1', 'mostrar1'));
    document.getElementById('ocultar1').addEventListener('click', () => togglePasswordVisibility('contra1', 'ocultar1', 'mostrar1'));

    document.getElementById('mostrar2').addEventListener('click', () => togglePasswordVisibility('contra2', 'ocultar2', 'mostrar2'));
    document.getElementById('ocultar2').addEventListener('click', () => togglePasswordVisibility('contra2', 'ocultar2', 'mostrar2'));
});
