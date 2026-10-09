import prompt from "prompt-sync";
import { Artista } from "./Artista.ts";
import { Album } from "./Album.ts";
import { Genero } from "./Genero.ts";


const teclado = prompt(); // para fazer um menu no terminal (substituindo o require)

console.log("beatsbyGRS.mp3!");    // para fazer um menu no terminal
teclado("pressione alguma tecla para continuar...") // para fazer um menu no terminal


while (true) {
    console.log("1- Artistas");
    console.log("2. Generos");
    console.log("3. Albums");
    console.log("4. Alterar Biblioteca");

    let escolha = +teclado("Escolha uma opção: ")

switch (escolha) {
        case 1:
            break;

        default:
            break;
    }
}
