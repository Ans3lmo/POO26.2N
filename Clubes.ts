import { Jogador } from "./Jogador.ts";

export class Clube {

    constructor(
        private _nome: string,
        private _cidade: string,
        private _jogadores: Jogador[],
    ) { }

}

