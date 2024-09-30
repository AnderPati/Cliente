let salto = 0;
let suma = 0;

for (let i = 1; i <= 100; i++) {

    suma += i;
        
    if(suma >= 1000){
        break;
    }

    if (suma%2 != 0){

        if (salto == 4) {
                document.write("<br>");
                salto = 1;
        }else{
            salto++;
        }

        document.write(suma + ",");
    }
    
}