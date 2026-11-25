import { Jogador } from "./Jogador.ts";
import { Atributos } from "./Atributos.ts";

export class Fixo extends Jogador {
    private _marcacao: number;
    private _cobertura: number;
    
        constructor(nome: string, clube: string) {
         super(nome, "Fixo", clube);
         this._marcacao = Atributos.randomizar(60, 100);
         this._cobertura = Atributos.randomizar(65, 100);
         this._ataque = Atributos.randomizar(10, 70);
         this._defesa = Atributos.randomizar(60, 100);
        }

    get marcacao(): number { return this._marcacao; }
    get cobertura(): number { return this._cobertura }

    public calcularDesempenho(): number {
    return (this._defesa + this._marcacao + this._cobertura) / 3;
}
}