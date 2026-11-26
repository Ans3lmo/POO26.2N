import { describe, test, expect } from "@jest/globals";

import { Clubes } from "./Clubes.ts";
import { Goleiro } from "./Goleiro.ts";
import { Fixo } from "./Fixo.ts";
import { Alas } from "./Alas.ts";
import { Pivo } from "./Pivo.ts";

test("Não deve validar um elenco incompleto", () => {
  const internacional = new Clubes("Internacional");

  internacional.adicionarJogador(new Goleiro("Jogador 1", "Internacional"));
  internacional.adicionarJogador(new Fixo("Jogador 2", "Internacional"));
  internacional.adicionarJogador(new Alas("Jogador 3", "Internacional"));

  expect(internacional.validarElenco()).toBe(false);
});

test("Não deve permitir adicionar mais de cinco jogadores", () => {
  const gremio = new Clubes("Grêmio");

  gremio.adicionarJogador(new Goleiro("Jogador 1", "Grêmio"));
  gremio.adicionarJogador(new Fixo("Jogador 2", "Grêmio"));
  gremio.adicionarJogador(new Alas("Jogador 3", "Grêmio"));
  gremio.adicionarJogador(new Alas("Jogador 4", "Grêmio"));
  gremio.adicionarJogador(new Pivo("Jogador 5", "Grêmio"));

  gremio.adicionarJogador(new Pivo("Jogador 6", "Grêmio"));

  expect(gremio.validarElenco()).toBe(true);
});
