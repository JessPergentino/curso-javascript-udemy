//Spread
function somarNumeros(a, b, c, d) {
    console.log(a, b, c, d);
}

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

somarNumeros(arrayNumeros[0], arrayNumeros[1], arrayNumeros[2], arrayNumeros[3]);

somarNumeros.apply(null, arrayNumeros);

somarNumeros(...arrayNumeros);

let arrayLetras = ["a", "b", "c", "d"];
let arrayNumeros1 = [4, 5, 6, 7, 8];
let arrayNumeros2 = [13, 14, 15];

let retornoConcatenacao = arrayLetras.concat(arrayNumeros1, arrayNumeros2);
console.log(retornoConcatenacao);

let retornoConcatenacaoSpread = [...arrayLetras, ...arrayNumeros1, ...arrayNumeros2];
console.log(retornoConcatenacaoSpread);

let arrayTodosNumeros = [1, 2, 3, ...arrayNumeros1, 9, 10, 11, 12, ...arrayNumeros2, 16, 17, 18, 19, 20];
console.log(arrayTodosNumeros);

arrayTodosNumeros.push(...[21, 22, 23, 24]);

//Rest Parameter
mostrarNomeCompleto("Jessica", "das", "Neves", "Pergentino");
//Sem o rest parameter
function mostrarNomeCompleto() {
    console.log(arguments.length);
    let nomeCompleto = "";
    Array.prototype.forEach.call(arguments, function (valor) {
        nomeCompleto += " " + valor;
        console.log(nomeCompleto);
    });
}

//Sem o rest parameter
function mostrarNomeCompleto2(...nomes) {
    console.log(nomes.length);
    let nomeCompleto = "";
    nomes.forEach(function (valor) {
        nomeCompleto += " " + valor;
        console.log(nomeCompleto);
    });
}
mostrarNomeCompleto2("Jessica", "das", "Neves", "Pergentino");

//Rest Parameter com Spread
function somarNumeros(...operandos) {
    let retornoSoma = operandos.reduce(function (acumulado, valor, indice, array) {
        return acumulado = acumulado + valor;
    })
    console.log(retornoSoma);
}

let arraySoma = [2, 8, 4, 12];
somarNumeros(...arraySoma);

//Default Parameters
function exibirMsgSaudacao(nome) {
    let msg = "Seja bem vindo" + nome + "!";
    console.log(msg);
}
exibirMsgSaudacao("Jessica");
exibirMsgSaudacao();

function exibirMsgSaudacaoES5(nome) {
    let msg = "Seja bem vindo" + nome + "!";
    if (nome == undefined) {
        msg = "Seja bem vindo Cliente";
    }
    console.log(msg);
}

function exibirMsgSaudacaoES5OutraForma(nome) {
    nome = nome || "cliente";
    let msg = "Seja bem vindo" + nome + "!";
    console.log(msg);
}

function exibirMsgSaudacaoES6(nome = "Cliente") {
    let msg = "Seja bem vindo" + nome + "!";
    console.log(msg);
}

let padrao = "default"
function exibir(mensagem = padrao) {
    console.log(mensagem);
}

exibir("Sou uma mensagem com valor");
exibir();

function fn(nome = "cliente", sobrenome = nome) {
    console.log("Olá " + nome);
    console.log("Obrigado, " + sobrenome + "!.");
}
fn();
fn("Jessica");
fn("Jessica", "Pergentino");

function elevarNumero(valor = 0, base = function () { return 2 }) {
    console.log(Math.pow(valor, base));
}

elevarNumero(8, 2);
elevarNumero(5);
