diffFechas();
function diffFechas() {
    let anio = prompt("Introduce un año:");
    const ahora = new Date()
    
    if (parseInt(anio) <= ahora.getFullYear() ) {
    
        const inicio = new Date(anio, 0, 1);
    
        const mili = ahora - inicio; //milisegundos
        const tSegundos = Math.floor(mili / 1000); // Convertir a segundos
    
        const dias = Math.floor(tSegundos / 86400); // 86400 segundos en un día
    
        //86400 segundos es un dia, nos quitamos todos los dias enteros posibles y el resto lo dividimos por 3600 para obtener las horas restantes
        const horas = Math.floor((tSegundos % 86400) / 3600); 
    
        //3600 horas es un dia, nos quitamos todas las horas enteras posibles y el resto lo dividimos por 60 segundos para obtener los minutos restantes
        const minutos = Math.floor((tSegundos % 3600) / 60); // 60 segundos en un minuto
    
        //el resto en segndos de los minutos no completos
        const segundos = tSegundos % 60;
    
        alert(`Desde el 01/01/${anio} han transcurrido ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos.`);
    
    }else{
        alert("El año introducido es mayor que el actual.");
    }

    diffFechas();
}

