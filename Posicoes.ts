export class Posicoes {

constructor(
        private _peDominante: string,
        private _altura: number,
        private _overall: number,
    ) { }

    set nome(peDominante: string) {
        this._peDominante = peDominante;
    }
    set cidade(altura: number) {
        this._altura = altura;
    }
    set overall(overall: number) {
        this._overall = overall;
    }

}    