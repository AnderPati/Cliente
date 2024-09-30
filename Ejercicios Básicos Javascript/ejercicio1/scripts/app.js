let nombre = prompt("Dame tu nombre");
let apellido1 = prompt("Tu primer apellido");
let apellido2 = prompt("Tu segundo apellido");

let mensaje = "<h1>¿Quién eres tú?</h1><br>Nombre: ";
mensaje += nombre + "<br><br>Primer apellido: ";
mensaje += apellido1 + "<br><br>Segundo apellido: ";
mensaje += apellido2 + "<br><br>";
mensaje += "<b>" + nombre + " " + apellido1 + " " + apellido2 + "</b>";

document.write(mensaje);