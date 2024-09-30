const inicio = Date.now();

let nombre = prompt("Escribe tu nombre: ");

const final = Date.now() - inicio;

document.write(`Han pasado ${Math.floor(final / 1000)} segundos.`);