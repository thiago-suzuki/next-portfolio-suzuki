import { EnterprisesUser } from "@/types/user";

export function calcularTempoEmpresa(
  positions: EnterprisesUser["positions"],
  locale: string = "pt-br"
): string {
  if (!positions?.length) return "";

  const meses: Record<string, Record<string, number>> = {
    "pt-br": {
      Jan: 0,
      Fev: 1,
      Mar: 2,
      Abr: 3,
      Mai: 4,
      Jun: 5,
      Jul: 6,
      Ago: 7,
      Set: 8,
      Out: 9,
      Nov: 10,
      Dez: 11,
    },
    es: {
      Ene: 0,
      Feb: 1,
      Mar: 2,
      Abr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Ago: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dic: 11,
    },
    en: {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    },
  };

  const parseData = (valor: string): Date => {
    const [mes, ano] = valor.trim().split(" ");

    return new Date(
      Number(ano),
      meses[locale][mes],
      1
    );
  };

  // Posição mais antiga da empresa
  const ultimaPosicao = positions[positions.length - 1];

  const periodoMaisAntigo =
    ultimaPosicao.timeAtPosition[locale] ||
    ultimaPosicao.timeAtPosition["pt-br"];

  const [inicioMaisAntigo] = periodoMaisAntigo.split(" - ");

  const inicio = parseData(inicioMaisAntigo);

  // Verifica se ainda está trabalhando na empresa
  const possuiCargoAtual = positions.some(
    (position) => position.actualPosition
  );

  let fim: Date;

  if (possuiCargoAtual) {
    fim = new Date();
  } else {
    const primeiraPosicao = positions[0];

    const periodoMaisRecente =
      primeiraPosicao.timeAtPosition[locale] ||
      primeiraPosicao.timeAtPosition["pt-br"];

    const [, fimMaisRecente] = periodoMaisRecente.split(" - ");

    fim = parseData(fimMaisRecente);
  }

  // +1 para contar o mês inicial também
  const totalMeses =
    (fim.getFullYear() - inicio.getFullYear()) * 12 +
    (fim.getMonth() - inicio.getMonth()) +
    1;

  const anos = Math.floor(totalMeses / 12);
  const mesesRestantes = totalMeses % 12;

  const resultado: string[] = [];

  if (locale === "en") {
    if (anos > 0) {
      resultado.push(
        `${anos} ${anos === 1 ? "year" : "years"}`
      );
    }

    if (mesesRestantes > 0) {
      resultado.push(
        `${mesesRestantes} ${
          mesesRestantes === 1 ? "month" : "months"
        }`
      );
    }

    return resultado.join(" ");
  }

  if (locale === "es") {
    if (anos > 0) {
      resultado.push(
        `${anos} ${anos === 1 ? "año" : "años"}`
      );
    }

    if (mesesRestantes > 0) {
      resultado.push(
        `${mesesRestantes} ${
          mesesRestantes === 1 ? "mes" : "meses"
        }`
      );
    }

    return resultado.join(" ");
  }

  if (anos > 0) {
    resultado.push(
      `${anos} ${anos === 1 ? "ano" : "anos"}`
    );
  }

  if (mesesRestantes > 0) {
    resultado.push(
      `${mesesRestantes} ${
        mesesRestantes === 1 ? "mês" : "meses"
      }`
    );
  }

  return resultado.join(" ");
}