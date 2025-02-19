function Cartita(/* contenido , */ listaCartas) {
    function iitemcarta(contenido){
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
   

/*     return div;
 */
    function cargarCartas(listaCartas) {
        let div = document.createElement('div');
        div.className = "cargar-tablero";
    
        listaCartas.forEach((cadaLetra) => {
            div.appendChild(iitemcarta(cadaLetra));
        });
    
        return div;
    }

    return cargarCartas(listaCartas);
    
}

export {Cartita}


