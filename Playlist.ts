import { Artista } from "./Artista.ts";
import { Faixas } from "./Faixas.ts";
import { Minutos } from "./Minutos.ts";
import { Musica } from "./Musica.ts";

export class Playlist {

    constructor(
        private _musica: Musica,
        private _artista: Artista,
        private _minutos: Minutos,
        private _faixas: Faixas
    ) { }


    // getters & setters

    set musica(novaMusica: string) {
        this._musica = novaMusica;
    }
    set artista(novoArtista: Artista) {
        this._artista = novoArtista;
    }
    set minutos(totalMinutos: number) {
        this._minutos = totalMinutos;
    }
    set faixas(novaFaixa: number) {
        this._faixas = novaFaixa;
    }
}