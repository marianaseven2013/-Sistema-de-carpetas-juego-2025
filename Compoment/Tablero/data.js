
function mezclarCartas(){

    let cartaPar1 = ['🍊','🍋','🍐','🥝','🍏','🥥','🍋‍🟩','🫒'];
    let cartaPar2 = ['🍊','🍋','🍐','🥝','🍏','🥥','🍋‍🟩','🫒'];

    let cartas = cartaPar1.concat(cartaPar2);

    for (let indice = 0; indice < cartas.length; indice++) {
        let numAle = Math.floor(Math.random() * cartas.length); 
        [cartas[indice], cartas[numAle]] = [cartas[numAle], cartas[indice]];
    }
    return cartas;

}

let todaslasCartas = mezclarCartas();


export { todaslasCartas };