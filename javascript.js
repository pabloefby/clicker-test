
let contador = 0;


const boton = document.getElementById("clicker");
const contadorDisplay = document.getElementById("counter");

boton.addEventListener("click", ()=>{

    contador++;
    contadorDisplay.textContent = contador;


});
