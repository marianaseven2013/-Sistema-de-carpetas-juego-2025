function cargarHeader(){
     let d1Header = document.createElement('div');
    d1Header.className = "d1-header"
    d1Header.appendChild(cuadroheader());

    return d1Header;
}

export {cargarHeader}

function cuadroheader (){
    let header = document.createElement('header');
    header.className = "nombrel"

    let divl = document.createElement('div');
    divl.className ="ilo";
    header.appendChild(divl)

    let img = document.createElement('img');
    img.src = "https://us.123rf.com/450wm/skullhy/skullhy1704/skullhy170400004/76178708-una-baraja-de-cartas-de-pl%C3%A1stico-en-blanco-con-el-s%C3%ADmbolo-del-signo-de-interrogaci%C3%B3n-eps-10.jpg";
    img.alt = "logo"
    divl.appendChild(img)

    //let lnl = document.createElement("h1");

    let ldi = document.createElement('div');
    ldi.className = "titu"
    header.appendChild(ldi)

    let lolo = document.createElement('h1');
    lolo.textContent = "▚ Memory ▞"
    ldi.appendChild(lolo);

    let botos = document.createElement('div');
    botos.className = "botones"
    header.appendChild(botos)

    let b1 = document.createElement('button');
    b1.className= "bo1"
    b1.textContent = "Level1"
    botos.appendChild(b1)

    let b2 = document.createElement('button');
    b2.className = "bo2"
    b2.textContent = "Level2"
    botos.appendChild(b2)

    let b3 = document.createElement('button');
    b3.className = "bo3"
    b3.textContent = "Level3"
    botos.appendChild(b3)

    let b4 = document.createElement('button');
    b4.className = "bo4"
    b4.textContent = "Level4"
    botos.appendChild(b4)

    return header;
}


export {cuadroheader}