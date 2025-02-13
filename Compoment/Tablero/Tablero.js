import { todaslasCartas } from "./data.js";

function item(contenido) {
    let div = document.createElement('div');
    div.className = "cada-carta";

    let adl = document.createElement('div');
    adl.className = "front";
    adl.textContent = ""; 

    let back = document.createElement('div');
    back.className = "back";
    back.textContent = contenido; 

    div.appendChild(adl);
    div.appendChild(back);

    div.addEventListener('click', () => {
        div.classList.toggle('flipped');
    });

    return div;
}

function cargarCartas() {
    let div = document.createElement('div');
    div.className = "cargar-tablero";

    todaslasCartas.forEach((cadaLetra) => {
        div.appendChild(item(cadaLetra));
    });

    return div;
}

export { cargarCartas };
