import { Clubes } from "./Clubes.ts";
import { Goleiro } from "./Goleiro.ts";
import { Fixo } from "./Fixo.ts";
import { Alas } from "./Alas.ts";
import { Pivo } from "./Pivo.ts";

export function criarClubes(): Clubes[] {

    const gremio = new Clubes("Grêmio");
    const goleiroGremio = new Goleiro("Paulo vitor", "Grêmio");
    const fixoGremio = new Fixo("Paulo Miranda", "Grêmio");
    const alaDireitoGremio = new Alas("Rafael Galhardo", "Grêmio");
    const alaEsquerdoGremio = new Alas("Diogo Barbosa", "Grêmio");
    const pivoGremio = new Pivo("André Balada", "Grêmio");
    
    gremio.adicionarJogador(goleiroGremio);
    gremio.adicionarJogador(fixoGremio);
    gremio.adicionarJogador(alaDireitoGremio);
    gremio.adicionarJogador(alaEsquerdoGremio);
    gremio.adicionarJogador(pivoGremio);

    const internacional = new Clubes("Internacional");
    const goleiroInter = new Goleiro("Daniel", "Internacional");
    const fixoInter = new Fixo("Félix Torres", "Internacional");
    const alaDireitoInter = new Alas("Marcos Guilherme", "Internacional");
    const alaEsquerdoInter = new Alas("Geferson", "Internacional");
    const pivoInter = new Pivo("Trellez", "Internacional");

    internacional.adicionarJogador(goleiroInter);
    internacional.adicionarJogador(fixoInter);
    internacional.adicionarJogador(alaDireitoInter);
    internacional.adicionarJogador(alaEsquerdoInter);
    internacional.adicionarJogador(pivoInter);

    return [gremio, internacional]
    




}
