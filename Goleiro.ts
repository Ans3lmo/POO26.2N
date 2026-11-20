<<<<<<< HEAD
export class Goleiro {


=======
import { Jogador } from "./Jogador.ts";
import { Posicoes } from "./Posicoes.ts";
import { Atributos } from "./Atributos.ts";
import { Status } from "./Status.ts";
import { Clube } from "./Clubes.ts";

export class Goleiro extends Jogador {

    constructor(
        nome: string,
        idade: number,
        posicao: Posicoes,
        atributos: Atributos,
        status: Status,
        clube: Clube,
    ) {
        super(nome, idade, posicao, atributos, status, clube);
    }

>>>>>>> 60a18014fd590ce640b798ec1301a955e5925247
}
