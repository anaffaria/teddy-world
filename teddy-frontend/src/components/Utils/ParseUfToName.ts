export function UfToName(val: string) {
  var data;

  switch (val.toUpperCase()) {
    /* UFs */
    case "AC":
      data = "Acre";
      break;
    case "AL":
      data = "Alagoas";
      break;
    case "AM":
      data = "Amazonas";
      break;
    case "AP":
      data = "Amapá";
      break;
    case "BA":
      data = "Bahia";
      break;
    case "CE":
      data = "Ceará";
      break;
    case "DF":
      data = "Distrito Federal";
      break;
    case "ES":
      data = "Espírito Santo";
      break;
    case "GO":
      data = "Goiás";
      break;
    case "MA":
      data = "Maranhão";
      break;
    case "MG":
      data = "Minas Gerais";
      break;
    case "MS":
      data = "Mato Grosso do Sul";
      break;
    case "MT":
      data = "Mato Grosso";
      break;
    case "PA":
      data = "Pará";
      break;
    case "PB":
      data = "Paraíba";
      break;
    case "PE":
      data = "Pernambuco";
      break;
    case "PI":
      data = "Piauí";
      break;
    case "PR":
      data = "Paraná";
      break;
    case "RJ":
      data = "Rio de Janeiro";
      break;
    case "RN":
      data = "Rio Grande do Norte";
      break;
    case "RO":
      data = "Rondônia";
      break;
    case "RR":
      data = "Roraima";
      break;
    case "RS":
      data = "Rio Grande do Sul";
      break;
    case "SC":
      data = "Santa Catarina";
      break;
    case "SE":
      data = "Sergipe";
      break;
    case "SP":
      data = "São Paulo";
      break;
    case "TO":
      data = "Tocantíns";
      break;

    /* Estados */
    case "ACRE":
      data = "AC";
      break;
    case "ALAGOAS":
      data = "AL";
      break;
    case "AMAZONAS":
      data = "AM";
      break;
    case "AMAPÁ":
      data = "AP";
      break;
    case "BAHIA":
      data = "BA";
      break;
    case "CEARÁ":
      data = "CE";
      break;
    case "DISTRITO FEDERAL":
      data = "DF";
      break;
    case "ESPÍRITO SANTO":
      data = "ES";
      break;
    case "GOIÁS":
      data = "GO";
      break;
    case "MARANHÃO":
      data = "MA";
      break;
    case "MINAS GERAIS":
      data = "MG";
      break;
    case "MATO GROSSO DO SUL":
      data = "MS";
      break;
    case "MATO GROSSO":
      data = "MT";
      break;
    case "PARÁ":
      data = "PA";
      break;
    case "PARAÍBA":
      data = "PB";
      break;
    case "PERNAMBUCO":
      data = "PE";
      break;
    case "PIAUÍ":
      data = "PI";
      break;
    case "PARANÁ":
      data = "PR";
      break;
    case "RIO DE JANEIRO":
      data = "RJ";
      break;
    case "RIO GRANDE DO NORTE":
      data = "RN";
      break;
    case "RONDÔNIA":
      data = "RO";
      break;
    case "RORAIMA":
      data = "RR";
      break;
    case "RIO GRANDE DO SUL":
      data = "RS";
      break;
    case "SANTA CATARINA":
      data = "SC";
      break;
    case "SERGIPE":
      data = "SE";
      break;
    case "SÃO PAULO":
      data = "SP";
      break;
    case "TOCANTÍNS":
      data = "TO";
      break;
  }

  return data;
}
