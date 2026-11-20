import prompt from "prompt-sync";
import { Posicoes } from "./Posicoes.ts";

export const goleiro = new Posicoes("Goleiro");
export const fixo = new Posicoes("Fixo");
export const alaD = new Posicoes("AlaD");
export const alaE = new Posicoes("AlaE");
export const pivo = new Posicoes("Pivo");


const teclado = prompt(); // para fazer um menu no terminal (substituindo o require)

console.log("beatsbyGRS.mp3!");    // para fazer um menu no terminal
teclado("pressione alguma tecla para continuar...") // para fazer um menu no terminal

while (true) {
    console.log("1- Times");
    console.log("2. Jogadores");
    console.log("3. Tabela");
    console.log("4. ");

    let escolha = +teclado("Escolha uma opção: ")

switch (escolha) {
        case 1:
            break;

        default:
            break;
    }
}

