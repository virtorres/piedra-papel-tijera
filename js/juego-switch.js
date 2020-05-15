/* Piedra, papel, tijera
--------------------------------
Juego en Javascript
*/

// Elementos del Juego
var elements = ["piedra", "papel", "tijera"];

//Funciones del Juego con el condicional "switch"

function game(gamerA, gamerB){
    
    switch (game) {
        //Caso de empate
        case(gamerA == gamerB):
        console.log(`¡Vaya!, habéis empatado con ${elements[gamerA]}`);
        break;

        //Ganador jugador A
        case(gamerA == 0 && gamerB == 2):
        console.log(`¡Enhorabuena, jugador A, porque ${elements[gamerA]} puede sobre ${elements[gamerB]}`);
        break;

        case(gamerA == 1 && gamerB == 0):
        console.log(`¡Enhorabuena, jugador A, porque ${elements[gamerA]} puede sobre ${elements[gamerB]}`);
        break;

        case(gamerA == 2 && gamerB == 1):
        console.log(`¡Enhorabuena, jugador A, porque ${elements[gamerA]} puede sobre ${elements[gamerB]}`);
        break;

        //Ganador jugador B
        default:
        console.log(`¡Enhorabuena, jugador B, porque ${elements[gamerB]} puede sobre ${elements[gamerA]}`);
        break;
    }
}
