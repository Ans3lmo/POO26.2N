import { Clubes } from "./Clubes.ts";

export class Partida {
  private _clubeCasa: Clubes;
  private _clubeVisitante: Clubes;
  private _golsCasa: number;
  private _golsVisitante: number;

  constructor(clubeCasa: Clubes, clubeVisitante: Clubes) {
    this._clubeCasa = clubeCasa;
    this._clubeVisitante = clubeVisitante;
    this._golsCasa = 0;
    this._golsVisitante = 0;
  }

  public get clubeCasa(): Clubes {
    return this._clubeCasa;
  }

  public get clubeVisitante(): Clubes {
    return this._clubeVisitante;
  }

  public get golsCasa(): number {
    return this._golsCasa;
  }

  public get golsVisitante(): number {
    return this._golsVisitante;
  }

  public simularPartida(): void {
    const forcaCasa = this._clubeCasa.calcularForca();
    const forcaVisitante = this._clubeVisitante.calcularForca();

    const desempenhoCasa = forcaCasa * (0.8 + Math.random() * 0.4);
    const desempenhoVisitante = forcaVisitante * (0.8 + Math.random() * 0.4);

    this._golsCasa = Math.floor(desempenhoCasa / 25);
    this._golsVisitante = Math.floor(desempenhoVisitante / 25);
  }

  public exibirResultado(): void {
    console.log("\n============ RESULTADO =============");
    console.log(
      `${this._clubeCasa.nome} ${this._golsCasa} x ${this._golsVisitante} ${this._clubeVisitante.nome}`,
    );
    console.log("====================================");
  }
}
