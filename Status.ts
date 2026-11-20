export class Status {

    constructor(
        private _peDominante: string,
        private _altura: number,
        private _overall: number,
    ) { }

    set peDominante(novoPe: string) {
        this._peDominante = novoPe;
    }

    set altura(novaAltura: number) {
        this._altura = novaAltura;
    }

    set overall(novoOverall: number) {
        this._overall = novoOverall;
    }

}