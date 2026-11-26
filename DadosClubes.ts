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

    const unisenac = new Clubes ("Unisenac");
    const goleiroUnisenac = new Goleiro("Gladimir", "Unisenac");
    const fixoUnisenac = new Fixo("Edecio", "Unisenac");
    const alaDireitoUnisenac = new Alas("Bruna Ribeiro", "Unisenac");
    const alaEsquerdoUnisenac = new Alas("Bruna Gugliano", "Unisenac");
    const pivoUnisenac = new Pivo("Angelo", "Unisenac");

    unisenac.adicionarJogador(goleiroUnisenac);
    unisenac.adicionarJogador(fixoUnisenac);
    unisenac.adicionarJogador(alaDireitoUnisenac);
    unisenac.adicionarJogador(alaEsquerdoUnisenac);
    unisenac.adicionarJogador(pivoUnisenac);

    const brasil = new Clubes ("Brasil");
    const goleiroBrasil = new Goleiro("Eduardo Martini", "Brasil");
    const fixoBrasil = new Fixo("Cirilo", "Brasil");
    const alaDireitoBrasil = new Alas ("Diogo Oliveira", "Brasil");
    const alaEsquerdoBrasil = new Alas ("Rafael Forster", "Brasil");
    const pivoBrasil = new Pivo ("Nena", "Brasil");

    brasil.adicionarJogador(goleiroBrasil);
    brasil.adicionarJogador(fixoBrasil);
    brasil.adicionarJogador(alaDireitoBrasil);
    brasil.adicionarJogador(alaEsquerdoBrasil);
    brasil.adicionarJogador(pivoBrasil);


    const pelotas = new Clubes("Pelotas");
    const goleiroPelotas = new Goleiro("Rodrigo Mamá", "Pelotas");
    const fixoPelotas = new Fixo ("Yuri Bigode", "Pelotas");
    const alaDireitoPelotas = new Alas ("Sandro Sotilli", "Pelotas");
    const alaEsquerdoPelotas = new Alas ("Maicon Sapucaia", "Pelotas");
    const pivoPelotas = new Pivo ("Walter", "Pelotas");

    pelotas.adicionarJogador(goleiroPelotas);
    pelotas.adicionarJogador(fixoPelotas);
    pelotas.adicionarJogador(alaDireitoPelotas);
    pelotas.adicionarJogador(alaEsquerdoPelotas);
    pelotas.adicionarJogador(pivoPelotas);


    return [gremio, internacional, unisenac, brasil, pelotas]
    




}
