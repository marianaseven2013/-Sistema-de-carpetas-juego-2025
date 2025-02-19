import { todaslasCartas } from "./data.js";
import { mesclarCartas } from "./funcionesCartas.js";
import { mostrarCartas } from "./funcionesCartas.js";
import { Cartita } from "./itemCarta.js";


function CargarTablero(){
    let d3Tablero = document.createElement('div');
    d3Tablero.className = "d3-tablero";
    let muestradeC = mostrarCartas(todaslasCartas);
    let mesclaAmacen = mesclarCartas(muestradeC);
    d3Tablero.appendChild(Cartita(mesclaAmacen,mesclaAmacen));
    
    return d3Tablero;
}

export {CargarTablero};




