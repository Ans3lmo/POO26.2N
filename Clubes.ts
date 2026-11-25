import { Jogador } from "./Jogador.ts";

export class Clubes {
    private _nome: string;
    private _elenco: Jogador[] = [];

    constructor(nome: string) {
        this._nome = nome;
    }

     public get nome(): string {
    return this._nome;
    }


    public adicionarJogador(jogador: Jogador): void {
        if(this._elenco.length >= 5) {
        console.log("O elenco já está completo!");
        return;
     }
    this._elenco.push(jogador);
    }

    public validarElenco(): boolean {

    const goleiros = this._elenco.filter(jogador => jogador.posicao === "Goleiro").length;
    const fixos = this._elenco.filter(jogador => jogador.posicao === "Fixo").length;
    const alas = this._elenco.filter(jogador => jogador.posicao === "Ala").length;
    const pivos = this._elenco.filter(jogador => jogador.posicao === "Pivo").length;
    return goleiros === 1 && fixos === 1 && alas === 2 && pivos === 1;
    }

    public exibirElenco(): void {
    console.log(`Elenco do ${this._nome}:`);

    this._elenco.forEach(jogador => {
        console.log(`${jogador.nome} - ${jogador.posicao}`);
      }); 
    }

    public calcularForca(): number {
    if (!this.validarElenco()) {
        return 0;
    }

    const total = this._elenco.reduce((soma, jogador) => {
        return soma + jogador.calcularDesempenho();
    }, 0);

    return total / this._elenco.length;
    }
}