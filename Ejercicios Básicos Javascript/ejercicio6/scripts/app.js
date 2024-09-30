let salto = 0;
let i = 1

do {

    if (salto == 25) {
        document.write("<br>");
        salto = 1;

        if (!confirm("¿Desea continuar?")) {
            break;   
        }

    }else{
        salto++;
    }
    
    if (i%2 == 0) {
        
        document.write(i + ",");
    }
    i++
    
} while (i <= 99999999);