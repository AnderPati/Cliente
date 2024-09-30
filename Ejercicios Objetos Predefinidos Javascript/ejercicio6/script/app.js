calcularAnios();
function calcularAnios() {

    let fechaAux = prompt("Fecha de nacimiento:");
    let fecha = new Date(fechaAux);
    let hoy = new Date();
    
    if (compFecha(fecha) && fechaAux.length > 4 && fecha < hoy){
        var anios = new Date(new Date() - new Date(fecha)).getFullYear() - 1970;
        alert(
        `Has nacido el ${fecha.getFullYear()}/${fecha.getMonth()+1}/${fecha.getDate()}
        Tienes ${anios} años.`
        );
    }else{
        alert("Introduce una fecha valida.\nLa fecha no puede ser de hoy en adelante.")
    }
    calcularAnios();
}

function compFecha(fecha) {
    return !isNaN(new Date(fecha));
}