let pantalla = document.getElementById("pantalla");

function agregarNum(numero){
    pantalla.value += numero;
}

function agregarOperador(operador){
    let str = pantalla.value;
    if ((str[str.length-1] === '0') || parseInt(str[str.length-1])){
        console.log("a");
        pantalla.value += operador;
    }else{
        console.log("b");
        //CAMBIAR LA ULTIMA OPERACION
        pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1);
        pantalla.value += operador;
    }

}

function limpiar(){
    pantalla.value = null;
}

function resultado(){
    pantalla.value = eval(pantalla.value);
}