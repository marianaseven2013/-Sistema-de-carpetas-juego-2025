import { cargarCartas } from "./Compoment/Tablero/Tablero.js";

let DOM = document.querySelector("#root");

//DOM.innerHTML = "Hola mundo";
let contenedor = document.createElement('div');
contenedor.className = "connt"


let d1Header = document.createElement('div');
d1Header.className = "d1-header"
contenedor.appendChild(d1Header);


let d2Progreso = document.createElement('div');
d2Progreso.className = "d2-progreso"
contenedor.appendChild(d2Progreso);

let d3Tablero = document.createElement('div');
d3Tablero.className = "d3-tablero"
contenedor.appendChild(d3Tablero);
d3Tablero.appendChild(cargarCartas());

let d4Footer = document.createElement('div');
d4Footer.className = "d4-footeer"
contenedor.appendChild(d4Footer);
//Esto para crear un div




DOM.appendChild(contenedor);
 //Para que aparezca o se cree el div es decir en este caso este es el contenedor de todos los divs