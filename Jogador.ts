import { Posicoes } from "./Posicoes.ts";
import { Atributos } from "./Atributos.ts";
import { Clube } from "./Clubes.ts";

export class Jogador {

    constructor(
        private _nome: string,
        private _idade: number,
        private _posicao: Posicoes,
        private _atributos: Atributos,
        private _clube: string,
    ) { }

}