do {
    num = parseInt(prompt("Dame un numero"));
    if(isNaN(num)){
        alert("Porfavor introduce un numero");
    }
} while (isNaN(num));

let factorial = 1;

for (let i = 1; i <= num; i++) {
    
    factorial *= i;
    
}

alert("El factorial de " + num + " en: " + factorial);
