let altura = window.screen.availHeight;
let anchura = window.screen.availWidth;
let diagonal = parseInt(Math.sqrt(Math.pow(altura, 2) + Math.pow(anchura, 2)))

document.write(`La altura es: ${altura}`);
document.write(`<br>La anchura es: ${anchura}`);
document.write(`<br>La diagonal es: ${diagonal}`);