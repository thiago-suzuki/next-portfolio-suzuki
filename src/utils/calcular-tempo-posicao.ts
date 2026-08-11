const meses: Record<string, number> = {
  // Janeiro
  Jan: 0,
  Ene: 0,

  // Fevereiro
  Fev: 1,
  Feb: 1,

  // Março
  Mar: 2,

  // Abril
  Abr: 3,
  Apr: 3,

  // Maio
  Mai: 4,
  May: 4,

  // Junho
  Jun: 5,

  // Julho
  Jul: 6,

  // Agosto
  Ago: 7,
  Aug: 7,

  // Setembro
  Set: 8,
  Sep: 8,

  // Outubro
  Out: 9,
  Oct: 9,

  // Novembro
  Nov: 10,

  // Dezembro
  Dez: 11,
  Dic: 11,
  Dec: 11,
};

export function calcularTempoPosicao(
  timeAtPosition: string,
  locale: string = "pt-br"
): string {
  if (!timeAtPosition) return "";

  const [inicioTexto, fimTexto] = timeAtPosition.split(" - ");

  if (!inicioTexto || !fimTexto) return "";

  const converterData = (valor: string): Date | null => {
    const texto = valor.trim();

    const atuais = [
      "O momento",
      "Presente",
      "Present",
    ];

    if (atuais.includes(texto)) {
      return new Date();
    }

    const [mesTexto, anoTexto] = texto.split(/\s+/);

    const numeroMes = meses[mesTexto];
    const ano = Number(anoTexto);

    if (
      numeroMes === undefined ||
      !anoTexto ||
      Number.isNaN(ano)
    ) {
      return null;
    }

    return new Date(ano, numeroMes, 1);
  };

  const inicio = converterData(inicioTexto);
  const fim = converterData(fimTexto);

  if (!inicio || !fim) return "";

  let totalMeses =
    (fim.getFullYear() - inicio.getFullYear()) * 12 +
    (fim.getMonth() - inicio.getMonth());

  // Inclui o mês inicial na contagem
  totalMeses += 1;

  if (totalMeses <= 0) return "";

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