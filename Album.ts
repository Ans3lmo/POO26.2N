
export class Album {

    constructor(
        private _nome: string,
        private _genero: string,
        private _faixas: Number,
        private _minutos: Number,
        private _playlist: Number
    ) { }



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
    
}


