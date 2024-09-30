//Pantalla
let altura = window.screen.availHeight;
let anchura = window.screen.availWidth;
document.getElementById("resolucion").innerHTML = `La resolución de la pantalla es ${anchura} x ${altura}`;

//Navegador
document.getElementById("navName").innerHTML = navigator.appName;
document.getElementById("so").innerHTML = navigator.platform;
document.getElementById("navVer").innerHTML = navigator.appVersion;

//Documento
document.getElementById("url").innerHTML = document.URL;

//Protocolo
document.getElementById("protocolo").innerHTML = window.location.protocol;