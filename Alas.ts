import { Atributos } from "./Atributos.ts";
import { Jogador } from "./Jogador.ts";

export class Alas extends Jogador {
  private _organizacao: number;
  private _drible: number;
  private _visao: number;

  constructor(nome: string, clube: string) {
    super(nome, "Ala", clube);
    this._organizacao = Atributos.randomizar(60, 100);
    this._drible = Atributos.randomizar(65, 100);
    this._visao = Atributos.randomizar(65, 100);
    this._ataque = Atributos.randomizar(50, 90);
    this._defesa = Atributos.randomizar(30, 85);
  }

  get organizacao(): number {
    return this._organizacao;
  }
  get drible(): number {
    return this._drible;
  }
  get visao(): number {
    return this._visao;
  }

  public calcularDesempenho(): number {
    return (
      (this._ataque +
        this._defesa +
        this._drible +
        this._visao +
        this._organizacao) /
      5
    );
  }
}
