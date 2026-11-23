import prompt from "prompt-sync";

import { Goleiro } from "./Goleiro.ts";
import { Fixo } from "./Fixo.ts";
import { Alas } from "./Alas.ts";
import { Pivo } from "./Pivo.ts";

const teclado = prompt();

console.log("++++++++++++++++++++++++++++++++++++++");
console.log("    / /      /  /      /  /    /  /   ");
console.log("   / /      /  /      /  /    /  /    ");
console.log("______________________________________");
console.log("____________|BRASFUTSAL|______________");
console.log("                           ____       ");
console.log("     o__          o__     |    |XX    "); 
console.log("    /|           /||      |    |XXX   ");
console.log("    / > o        < /      |    |XXXX  ");
console.log("______________________________________"); // ILUSTRACAO PARA EXIBIR NO CONSOLE

teclado("Pressione alguma tecla para iniciar...")

while (true) {
    console.log("==========|BRASFUTSAL|==========");
    console.log("|1- Start                      |");
    console.log("|2- Clubes                     |");
    console.log("|3- Jogadores                  |");
    console.log("|4- Tabela                     |");
    console.log("|5- Contratações               |");
    console.log("|0- Sair                       |"); // MENU QUE VAI EXECUTAR PROJETO

    let escolha = +teclado("Escolha uma opção: ")

switch (escolha) {
        case 1:
            break;

        default:
            break;
    }
}

