import { Atributos } from "./Atributos.ts";
import { Jogador } from "./Jogador.ts";

export class Pivo extends Jogador{
    private _frieza: number;
    private _finalizacao: number;

    constructor(nome: string, clube: string) {
     super(nome, "Pivo", clube);
     this._frieza = Atributos.randomizar(60, 100);
     this._finalizacao = Atributos.randomizar(65, 100);
     this._ataque = Atributos.randomizar(60, 100);
     this._defesa = Atributos.randomizar(5, 60);
    }

    get frieza(): number { return this._frieza; }
    get finalizacao(): number { return this._finalizacao; }

    public calcularDesempenho(): number {
    return (
        this._ataque +
        this._finalizacao +
        this._frieza
    ) / 3;
}
    
}