
export class Artista {

    constructor(
        private _nome: string,
        private _genero: string,
        private _album: string
    ) { }


    // getters & setters

    set nome(novoNome: string) {
        this._nome = novoNome;
    }
    set genero(novoGenero: string) {
        if (novoGenero.length < 2) {
            throw new Error("Genero Invalido.");
        } else {
            this._genero = novoGenero;
        }
    }
    set album(novoAlbum: string) {
        this._album = novoAlbum;
    }
}

