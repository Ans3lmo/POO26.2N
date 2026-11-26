import { Clubes } from "./Clubes.ts";
import { Partida } from "./Partida.ts";

interface Estatisticas {
  pontos: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  golsPro: number;
  golsContra: number;
}

export class Liga {
  private _clubes: Clubes[];
  private _partidas: Partida[];

  constructor(clubes: Clubes[]) {
    this._clubes = clubes;
    this._partidas = [];
  }

  public gerarPartidas(): void {
    this._partidas = [];

    for (let i = 0; i < this._clubes.length; i++) {
      for (let j = i + 1; j < this._clubes.length; j++) {
        const clubeCasa = this._clubes[i];
        const clubeVisitante = this._clubes[j];

        if (clubeCasa && clubeVisitante) {
          const partida = new Partida(clubeCasa, clubeVisitante);
          this._partidas.push(partida);
        }
      }
    }
  }

  public iniciarLiga(): void {
    this.gerarPartidas();

    this._partidas.forEach((partida) => {
      partida.simularPartida();
      partida.exibirResultado();
    });
  }

  private atualizarEstatisticas(
    partida: Partida,
    tabela: Map<Clubes, Estatisticas>,
  ): void {
    const estatisticasCasa = tabela.get(partida.clubeCasa);
    const estatisticasVisitante = tabela.get(partida.clubeVisitante);

    if (!estatisticasCasa || !estatisticasVisitante) return;

    estatisticasCasa.golsPro += partida.golsCasa;
    estatisticasCasa.golsContra += partida.golsVisitante;

    estatisticasVisitante.golsPro += partida.golsVisitante;
    estatisticasVisitante.golsContra += partida.golsCasa;

    if (partida.golsCasa > partida.golsVisitante) {
      estatisticasCasa.pontos += 3;
      estatisticasCasa.vitorias++;
      estatisticasVisitante.derrotas++;
    } else if (partida.golsCasa < partida.golsVisitante) {
      estatisticasVisitante.pontos += 3;
      estatisticasVisitante.vitorias++;
      estatisticasCasa.derrotas++;
    } else {
      estatisticasCasa.pontos++;
      estatisticasVisitante.pontos++;
      estatisticasCasa.empates++;
      estatisticasVisitante.empates++;
    }
  }

  public exibirClassificacao(): void {
    const tabela = new Map<Clubes, Estatisticas>();

    this._clubes.forEach((clube) => {
      tabela.set(clube, {
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        golsPro: 0,
        golsContra: 0,
      });
    });

    this._partidas.forEach((partida) => {
      this.atualizarEstatisticas(partida, tabela);
    });

    const classificacao = Array.from(tabela.entries());

    classificacao.sort((a, b) => {
      const saldoA = a[1].golsPro - a[1].golsContra;
      const saldoB = b[1].golsPro - b[1].golsContra;

      return b[1].pontos - a[1].pontos || saldoB - saldoA;
    });

    console.log("\n========== CLASSIFICAÇÃO ==========");

    classificacao.forEach(([clube, estatisticas], indice) => {
      const saldo = estatisticas.golsPro - estatisticas.golsContra;

      console.log(
        `${indice + 1}º ${clube.nome} | ` +
          `PTS: ${estatisticas.pontos} | ` +
          `V: ${estatisticas.vitorias} | ` +
          `E: ${estatisticas.empates} | ` +
          `D: ${estatisticas.derrotas} | ` +
          `GP: ${estatisticas.golsPro} | ` +
          `GC: ${estatisticas.golsContra} | ` +
          `SG: ${saldo}`,
      );
    });

    console.log("====================================");
  }
}
