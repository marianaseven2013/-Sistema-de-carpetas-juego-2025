import { todaslasCartas } from "./data.js";

function item(contenido){
    let div = document.createElement('div');
    div.className = "cada-carta";
    div.textContent = contenido;

    return div;
}

function cargarCartas(){
    
    let div = document.createElement('div');
    div.className = "cargar-tablero";

    todaslasCartas.forEach((cadaLetra)=> {
        div.appendChild(item(cadaLetra));
    });

    return div;
}

export { cargarCartas }