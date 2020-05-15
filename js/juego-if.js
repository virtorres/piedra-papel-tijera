/* Piedra, papel, tijera
--------------------------------
Juego en Javascript
*/

// Elementos del Juego
var elements = ["piedra", "papel", "tijera"];

//Funciones del Juego con el condicional "if"

function game(gamerA, gamerB){
    //Caso de empate
    if (gamerA == gamerB) {
        console.log(`¡Vaya!, habéis empatado con ${elements[gamerA]}`);
    }  
    //Gana el jugador A
    else if (gamerA == 0 && gamerB ==2){
        console.log(`¡Enhorabuena, jugador A, porque ${elements[gamerA]} puede sobre ${elements[gamerB]}`);
    }
    else if (gamerA == 1 && gamerB == 0){
        console.log(`¡Enhorabuena, jugador A, porque ${elements[gamerA]} puede sobre ${elements[gamerB]}`);
    }
    else if (gamerA == 2 && gamerB == 1){
        console.log(`¡Enhorabuena, jugador A, porque ${elements[gamerA]} puede sobre ${elements[gamerB]}`);
    }
    //Gana el jugador B
    else {
        console.log(`¡Enhorabuena, jugador B, porque ${elements[gamerB]} puede sobre ${elements[gamerA]}`);
    }
}  
