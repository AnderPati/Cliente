caracter();
function caracter() {
    let txt = prompt("Dime algo:");
    alert(`'${txt}' tiene ${txt.length} caracteres`);
    caracter();
}