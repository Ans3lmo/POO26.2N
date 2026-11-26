import prompt from "prompt-sync";

import { criarClubes } from "./DadosClubes.ts";
import { Liga } from "./Liga.ts";

const clubes = criarClubes();

const liga = new Liga(clubes);

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
console.log("______________________________________");

teclado("Pressione ENTER para iniciar...");

let sair = false;
let campeonatoIniciado = false;

while (!sair) {
  console.log("\n==========|BRASFUTSAL|==========");
  console.log("|1- Start                      |");
  console.log("|2- Clubes                     |");
  console.log("|3- Jogadores                  |");
  console.log("|4- Tabela                     |");
  console.log("|0- Sair                       |");
  console.log("================================");

  const escolha = Number(teclado("Escolha uma opção: "));

  switch (escolha) {
    case 1:
      console.log("\n============ BRASFUTSAL ============");
      console.log("Iniciando campeonato...");
      console.log("Formato: Todos contra todos");

      liga.iniciarLiga();

      campeonatoIniciado = true;

      console.log("\nCAMPEONATO ENCERRADO!");

      liga.exibirClassificacao();

      break;

    case 2:
      console.log("\n========== CLUBES CADASTRADOS ==========");

      clubes.forEach((clube, indice) => {
        console.log(`${indice + 1} - ${clube.nome}`);
      });

      console.log("========================================");

      break;

    case 3:
      console.log("\n========== JOGADORES CADASTRADOS ==========");

      clubes.forEach((clube) => {
        clube.exibirElenco();
        console.log("----------------------------------------");
      });

      break;

    case 4:
      if (campeonatoIniciado) {
        console.log("\n========== ÚLTIMA CLASSIFICAÇÃO ==========");
        liga.exibirClassificacao();
      } else {
        console.log("\nNenhum campeonato foi disputado ainda!");
      }

      break;

    case 0:
      console.log("\nEncerrando o BRASFUTSAL...");
      console.log("Obrigado por jogar!");
      sair = true;
      break;

    default:
      console.log("\nOpção inválida! Escolha novamente.");
      break;
  }
}

console.log("BRASFUTSAL encerrado.");
