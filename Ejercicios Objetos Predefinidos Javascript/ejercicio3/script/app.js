let rojo = document.querySelector("#rojo");
let azul = document.querySelector("#azul");
let verde = document.querySelector("#verde");
let morado = document.querySelector("#morado");
let negro = document.querySelector("#negro");

rojo.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});

azul.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
});

verde.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
});

morado.addEventListener("click", () => {
    document.body.style.backgroundColor = "purple";
});

negro.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
});
