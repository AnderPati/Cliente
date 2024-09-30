let cadena = "¡Hola!";

document.getElementById("desc").innerHTML = `
La variable 'cadena' contiene el siguiente texto: <b>${cadena}</b><br>
Su longitud es de ${cadena.length} caracteres distribuidos segun se indica en la siguiente tabla;`;

let contenido = "<td>Posición</td>";
for (let i = 0; i < cadena.length; i++) {
  contenido += `<td>${i}</td>`;
}
document.getElementById("fila1").innerHTML = contenido;

contenido = "<td>Contenido</td>";
for (let i = 0; i < cadena.length; i++) {
  contenido += `<td>${cadena[i]}</td>`;
}
document.getElementById("fila2").innerHTML = contenido;
