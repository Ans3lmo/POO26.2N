import prompt from "prompt-sync"

import { Clubes } from "./Clubes.ts";
import { Goleiro } from "./Goleiro.ts";
import { Fixo } from "./Fixo.ts";
import { Alas } from "./Alas.ts";
import { Pivo } from "./Pivo.ts";
import { criarClubes } from "./DadosClubes.ts";
import { Partida } from "./Partida.ts";
import { Liga } from "./Liga.ts";

const clubes = criarClubes(); 
if (clubes[0]) {
    clubes[0].exibirElenco();
    console.log(clubes[0].validarElenco());
    console.log(`Força do clube: ${clubes[0].calcularForca().toFixed(2)}`); // teste imprimir gremio

}

const liga = new Liga(clubes);

liga.iniciarLiga(); //simula jogos
liga.exibirClassificacao();    // teste classificao e stats >  node main.ts


const teclado = prompt();

console.log("++++++++++++++++++++++++++++++++++++++");
console.log("    / /      /  /      /  /    /  /   ");
console.log("   / /      /  /      /  /    /  /    ");
console.log("______________________________________");
console.log("________|BRASFUTSAL by GRS|___________");
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
    console.log("|0- Sair                       |"); // MENU QUE VAI EXECUTAR PROJETO

    let escolha = +teclado("Escolha uma opção: ")

switch (escolha) {
        case 1:
            break;

        default:
            break;
    }
}

