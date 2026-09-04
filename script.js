
const btnModo = document.getElementById('btnModo');

btnModo.addEventListener('click', function() {
  document.body.classList.toggle('modo-oscuro');

  if (document.body.classList.contains('modo-oscuro')) {
    btnModo.textContent = '☀️ Modo claro';
  } else {
    btnModo.textContent = '🌙 Modo oscuro';
  }
});


const formRegistro = document.getElementById('formRegistro');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputConfirmPassword = document.getElementById('confirmPassword');

const errorNombre = document.getElementById('errorNombre');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');
const errorConfirmPassword = document.getElementById('errorConfirmPassword');

const contadorPassword = document.getElementById('contadorPassword');
const mensajeFinal = document.getElementById('mensajeFinal');


inputPassword.addEventListener('input', function() {
  const longitudActual = inputPassword.value.length;
  contadorPassword.textContent = `${longitudActual} / 20 caracteres`;
});


function marcarError(inputElement, spanError, mensaje) {
  inputElement.classList.remove('exito');
  inputElement.classList.add('error');
  spanError.textContent = `⚠ ${mensaje}`;
}

function marcarExito(inputElement, spanError) {
  inputElement.classList.remove('error');
  inputElement.classList.add('exito');
  spanError.textContent = '';
}

formRegistro.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita recarga de página
  let esValido = true;

 
  const valNombre = inputNombre.value.trim();
  if (valNombre === '') {
    marcarError(inputNombre, errorNombre, 'El nombre es obligatorio');
    esValido = false;
  } else if (valNombre.length < 3) {
    marcarError(inputNombre, errorNombre, 'Debe tener al menos 3 caracteres');
    esValido = false;
  } else {
    marcarExito(inputNombre, errorNombre);
  }

  
  const valEmail = inputEmail.value.trim();
  if (valEmail === '') {
    marcarError(inputEmail, errorEmail, 'El email es obligatorio');
    esValido = false;
  } else if (!valEmail.includes('@')) {
    marcarError(inputEmail, errorEmail, 'El email no es válido (debe contener @)');
    esValido = false;
  } else {
    marcarExito(inputEmail, errorEmail);
  }


  const valPassword = inputPassword.value;
  if (valPassword === '') {
    marcarError(inputPassword, errorPassword, 'La contraseña es obligatoria');
    esValido = false;
  } else if (valPassword.length < 8) {
    marcarError(inputPassword, errorPassword, 'Debe tener al menos 8 caracteres');
    esValido = false;
  } else {
    marcarExito(inputPassword, errorPassword);
  }

 
  const valConfirm = inputConfirmPassword.value;
  if (valConfirm === '') {
    marcarError(inputConfirmPassword, errorConfirmPassword, 'Confirma tu contraseña');
    esValido = false;
  } else if (valConfirm !== valPassword) {
    marcarError(inputConfirmPassword, errorConfirmPassword, 'Las contraseñas no coinciden');
    esValido = false;
  } else {
    marcarExito(inputConfirmPassword, errorConfirmPassword);
  }


  if (esValido) {
    mensajeFinal.textContent = '✅ ¡Cuenta creada correctamente!';
    mensajeFinal.style.color = '#4CAF50';
  } else {
    mensajeFinal.textContent = '';
  }
});

