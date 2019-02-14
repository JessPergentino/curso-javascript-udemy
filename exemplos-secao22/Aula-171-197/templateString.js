//Template String
let texto = "Está mensagem possui uma \n Quebra de linha";
console.log(texto);

let textoTemplate = `Está mensagem possui uma
Quebra de linha`;
console.log(textoTemplate);

let expressao = " 5 + 5 = " + (5 + 5) + "10 * 4 = " + (10 * 4) + ".";
console.log(expressao);

let expressaoTemplate = ` 5 + 5 = ${5 + 5} 10 * 4 = ${10 * 4}.`;
console.log(expressaoTemplate);

let pessoa1 = { nome: "João", idade: 46 };
let apresentacao = "Olá eu sou " + pessoa1.nome + " e tenho " + pessoa1.idade + " anos!.";
console.log(apresentacao);

let apresentacaoTemplate = `Olá eu sou ${pessoa1.nome} e eu tenho ${pessoa1.idade} anos!.`;
console.log(apresentacaoTemplate);

//Tagged Template String
let nome2 = "Demetrius";
let sobrenome = "Batista";
console.log(`Olá ${nome2} seu sobrenome é ${sobrenome}?`);

function caixaAlta(arrayTemplate, ...arrayValores) {
    console.log(arrayTemplate);
    console.log(arrayValores);
    let str = "";

    arrayTemplate.forEach(function (texto, indice, array) {
        str += `${texto} ${arrayValores[indice] != undefined ? arrayValores[indice].toUpperCase() : ""}`;
        return str;
    })

    console.log(caixaAlta`Olá ${nome2} seu sobrenome é ${sobrenome}?`);
}