import { Jogador } from "./Jogador.ts";
import { Status } from "./Status.ts";
import { Posicoes } from "./Posicoes.ts";

export class Jogador {

    constructor(
        private _nome: string,
        private _idade: number,
        private _Posicoes: Posicoes,
        private _Clube: string,
    ) { }

    set nome(clubeNome: string) {
        this._nome = novoNome;
    }
    set cidade(clubeCidade: string) {
        this._cidade = clubeCidade;
    }
    
}