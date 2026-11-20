import { Clube } from "./Clubes.ts";

export class Liga {

    constructor(
        private _nome: string,
        private _clubes: Clube[],
    ) { }

}