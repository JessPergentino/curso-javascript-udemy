var nome = "Jessica";

switch (nome) {
    case "jessica":
        console.log("Caso 1");
        break;
    
    case "Jessica":
        console.log("Caso 2");
        break;

    case "jessicA":
        console.log("Caso 3");
        break;

    default:
        console.log("Valor não Encontrado");
        break;
}