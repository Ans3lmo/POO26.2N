import { Atributos } from "./Atributos.ts";
export abstract class Jogador {
  protected _nome: string;
  protected _posicao: string; // PROTECTED PARA MANTER PRIVADA E SER ACESSADA PELAS CLASSES FILHAS
  protected _clube: string; // SUPERCLASSE HERDANDO PARA TODAS AS POSICOES (ALAS, GOLEIRO, PIVO, FIXO)
  protected _idade: number;
  protected _ataque: number;
  protected _defesa: number;

  constructor(nome: string, posicao: string, clube: string) {
    this._nome = nome;
    this._posicao = posicao;
    this._clube = clube;
    this._idade = Atributos.randomizar(18, 45);
    this._ataque = Atributos.randomizar(30, 100);
    this._defesa = Atributos.randomizar(30, 100);
  }

  get nome(): string {
    return this._nome;
  }
  get posicao(): string {
    return this._posicao;
  }
  get clube(): string {
    return this._clube;
  }
  get idade(): number {
    return this._idade;
  }
  get ataque(): number {
    return this._ataque;
  }
  get defesa(): number {
    return this._defesa;
  }

  public abstract calcularDesempenho(): number;
}
