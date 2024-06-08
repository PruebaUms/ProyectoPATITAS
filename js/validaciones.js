function validar(){
	//validacion celular
	var celular=document.getElementById('phone');
	var re2=/(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
	var OK = re2.exec(celular.value);
	if (!OK) {
	  alert (celular.value + ' ¡No es un número de teléfono con código de área!');
	  return false;
	}
  
	//validacion contraseñas
	var contra1=document.getElementById('contra1');
	var contra2=document.getElementById('contra2');
	if (contra1.value == "") {
	  alert("La contraseña no puede estar vacía");
	  return false;
	}
	if (contra2.value == "") {
	  alert("La confirmación de contraseña no puede estar vacía");
	  return false;
	}
	if (contra1.value != contra2.value) {
	  alert("Las contraseñas no coinciden");
	  return false;
	}
  
	alert ('Gracias, tu número de teléfono es ' + OK[0]);
	return true;
  }