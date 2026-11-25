import { Atributos } from "./Atributos.ts";
import { Jogador } from "./Jogador.ts";

export class Goleiro extends Jogador {
    private _agilidade: number;
    private _reflexo: number;

    constructor(nome: string, clube: string) {
     super(nome, "Goleiro", clube)              // HERDANDO ATRIBUTOS DA SUPERCLASSE
     this._agilidade = Atributos.randomizar(50, 100);
     this._reflexo = Atributos.randomizar(60, 100);
     this._ataque = Atributos.randomizar(5, 30);
     this._defesa = Atributos.randomizar(60, 100);
    }

    get agilidade(): number { return this._agilidade; } //GETTERS PARA TER ACESSO FORA DA CLASSE MESMO PRIVADO
    get reflexo(): number { return this._reflexo; }

    public calcularDesempenho(): number {
    return (this._defesa + this._reflexo + this._agilidade) / 3;
}
}

