import { Jogador } from "./Jogador.ts";
export class Clubes {

    constructor(
        private _nome: string,
        private _cidade: string,
        private _estado: string,
        private _estadio: string,
        private _jogador: Jogador,
    ) { }

    set nome(clubeNome: string) {
        this._nome = novoNome;
    }
    set cidade(clubeCidade: string) {
        this._cidade = clubeCidade;
    }
    
    set estado(clubeEstado: string) {
        this._estado = clubeEstadoEstado;
    }
    set estadio(clubeEstadio: string) {
        this._estadio = clubeEstadio;
    }
}

