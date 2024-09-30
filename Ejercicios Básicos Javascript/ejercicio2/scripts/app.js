
let salto = 0;

for (let i = 1; i <= 100; i++) {

    if (i%2 == 0) {
        
        if (salto == 5) {
            document.write("<br>");
            salto = 1;
        }else{
            salto++;
        }

        document.write(i + ",");
    }
    
}