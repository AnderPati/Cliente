
let i = 0;
let salto = 0;
let suma = 0;

while (i < 100) {

    i++
    
    suma += i;
        
        if (salto == 10) {
            document.write("<br>");
            salto = 1;
        }else{
            salto++;
        }

        document.write(suma + ",");
}