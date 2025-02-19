import {  CargarTablero } from "./Compoment/Tablero/Tablero.js";
import { cargarHeader } from "./Compoment/header/header.js";
import { cargarProgreso } from "./Compoment/progreso/progreso.js";
import { cargarFooter } from "./Compoment/footer/footer.js";


let DOM = document.querySelector("#root");

function cargarDOM(){

//DOM.innerHTML = "Hola mundo";
    let contenedor = document.createElement('div');
    contenedor.className = "connt"

    
    contenedor.appendChild(cargarHeader());
    
    contenedor.appendChild(cargarProgreso());
    contenedor.appendChild(CargarTablero());

   
    contenedor.appendChild(cargarFooter());

    return contenedor;

     //Para que aparezca o se cree el div es decir en este caso este es el contenedor de todos los divs
     //Evento para cada una de las cartas
    let todaslascartasdelDOM = document.querySelectorAll('.cada-carta');
    todaslascartasdelDOM.forEach(cargarCartas =>{
        cargarCartas.addEventListener("click",()=>{
            cargarCartas.classList.add("marcado");

        });
    });

}

DOM.appendChild(cargarDOM());