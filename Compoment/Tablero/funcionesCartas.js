function mesclarCartas(todaslasCartas){
   
        for (let i = todaslasCartas.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [todaslasCartas[i], todaslasCartas[j]] = [todaslasCartas[j], todaslasCartas[i]]; 
        }
    

    return todaslasCartas;
}

function mostrarCartas(listCartas){
    let guadarCartas = localStorage.getItem("Cartas");

    if (guadarCartas){return JSON.parse(guadarCartas);}
    else{
        let revolver = mesclarCartas(listCartas);
        localStorage.setItem("Cartas",JSON.stringify(revolver));
        return revolver;
    }
}

export {mesclarCartas, mostrarCartas};


