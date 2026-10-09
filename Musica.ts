import { Artista } from "./Artista.ts";

export class Musica {

    constructor(
        private _nome: string,
        private _genero: string,
        private _minutos: string,
        private _artista: Artista
    ) { }
}