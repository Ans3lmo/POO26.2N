export class Atributos {
  public static randomizar(inicio: number, fim: number): number {
    return Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
  }
}
