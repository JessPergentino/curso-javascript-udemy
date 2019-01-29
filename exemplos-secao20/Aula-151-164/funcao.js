//Declarando funções - forma literal
function mensagem() {
    console.log("Declarei uma função!!");
}
// Chamar função
mensagem();

//Função com parametros
function funcparam(valor) {
    console.log("Eu sou um: " + valor);
}
funcparam("Parametro");

//Função com retorno
function funcretorno(valor1, valor2) {
    return valor1 + valor2;
}
var result = funcretorno(4, 5);
console.log(result);

//Declarando função - forma expressão
var minhaFuncao = function (x, y) {
    return console.log(x - y);
}
minhaFuncao(10, 5);

//Metodos em objetos
var pessoa = {
    nome: "Jessica",
    saudacao: function () {
        return console.log("Oi, eu sou " + this.nome);
    }
}
pessoa.saudacao();

//Função com mais parametros que argumentos
function exibirNome(p1, p2, p3) {
    var p3 = p3 || "";
    return (console.log((p1 + " " + p2 + " " + p3).toUpperCase()));
}
exibirNome("Jessica", "Neves");

//Função com mais argumentos que parametros
function exibirNome(p1, p2, p3) {
    var result = "";
    if (arguments.length > 3) {
        for (item in arguments) {
            result += arguments[item] + " ";
        }
        return console.log(result.toUpperCase());
    } else {
        return console.log((p1 + " " + p2 + " " + p3).toUpperCase());
    }
}
exibirNome("Jessica", "Neves", "Pergentino", "Santos");
//Função como parametro
function divide(v1, v2) {
    return v1 / v2;
}

function multiplica(v1, v2) {
    return v1 * v2;
}

function calcular(fn, v1, v2) {
    return fn(v1, v2);
}
console.log(calcular(divide, 25, 5));
console.log(calcular(multiplica, 4, 5));

//Função como retorno
function calc(operacao) {
    if (operacao === "soma") {
        return function soma(v1, v2) {
            return v1 + v2;
        }
    } else {
        return function subtrair(v1, v2) {
            return v1 - v2;
        }
    }
}
var fun = calc("soma");
console.log(fun(2, 2));

//Função como elemento de um array
var array = [1, 2, function () {
    console.log("Sou uma função em um Array :)");
}]
array[2]();

//Hoisting - variavel
console.log("Variavel içada", nome);
var nome = "Não vou aparacer :(";

//Hoisting - Função
hoistingFuncao();

function hoistingFuncao() {
    console.log("Fui declarada dps, mas irei funcionar, pois sou içada assim como a variavel");
}

//Exemplo da calculadora com Historico

function somar(v1, v2) {
    return v1 + v2;
}

function subtrair(v1, v2) {
    return v1 - v2;
}

function dividir(v1, v2) {
    return v1 / v2;
}

function multiplicar(v1, v2) {
    return v1 * v2;
}

calculadora.operacoes = [];
calculadora.contador = 0;
calculadora.exibir = function () {
    console.log("---------------Operações feitas:", calculadora.contador + "---------------");
    for (const op of calculadora.operacoes) {
        switch (op.operacao) {
            case "somar":
                console.log("Operação:", op.operacao);
                console.log(op.v1 + " + " + op.v2 + " = " + op.resultado);
                break;
            case "subtrair":
                console.log("Operação:", op.operacao);
                console.log(op.v1 + " - " + op.v2 + " = " + op.resultado);
                break;
            case "dividir":
                console.log("Operação:", op.operacao);
                console.log(op.v1 + " / " + op.v2 + " = " + op.resultado);
                break;
            case "multiplicar":
                console.log("Operação:", op.operacao);
                console.log(op.v1 + " * " + op.v2 + " = " + op.resultado);
                break;
            default:
                console.log(op.resultado);
                break;
        }
    }
}

function calculadora(operacao, v1, v2) {
    var result = 0;
    switch (operacao) {
        case "somar":
            result = somar(v1, v2);
            break;
        case "subtrair":
            result = subtrair(v1, v2);
            break;
        case "dividir":
            result = dividir(v1, v2);
            break;
        case "multiplicar":
            result = multiplicar(v1, v2);
            break;
        default:
            result = "Operação invalida";
            break;
    }
    historicoOperacaoes(operacao, v1, v2, result);
    return result;
}

function historicoOperacaoes(operacao, v1, v2, resultado) {
    var obj = { operacao: operacao, v1: v1, v2: v2, resultado: resultado };
    calculadora.operacoes.push(obj);
    calculadora.contador++;
}

calculadora("somar", 45, 74)
calculadora("subtrair", 245, 100)
calculadora("multiplicar", 6, 23)
calculadora("dividir", 754, 24)

calculadora.exibir();

//Escopo Global e Local
var global = "Variável de Escopo Global";

function escopo() {
    var local = "Variável de Escopo Local";
    console.log(global);
    console.log(local);
}

escopo();
console.log(global);
// Da erro, pois é de escopo local console.log(local);

function escopo2() {
    var v = "Estou dentro da função";
    v2 = "Estou fora da função - Má Prática";
    console.log(v);
    console.log(v2);
}

// Da erro, pois é de escopo local console.log(v);
//console.log(v2);

var escopo1 = "Estou fora da função 1 ";
var escopo2 = "Estou fora da função 2 ";

function escopo3(parametro) {
    var escopo2 = "Estou dentro da função";
    console.log(parametro);
    console.log(escopo1);
    console.log(escopo2);
}
escopo3("Sou um parametro");
console.log(escopo1);
console.log(escopo2);

//Exemplo - Vendas

var produto = "PC";
function orcamento() {
    var formaPagamento = "Cartão de Credito";
    var qtd = "4";
    var preco = 1750.45;
    var subTotal = preco * qtd;

    pedido();
    function pedido() {
        var numPedido = "456";
        var entrega = false;
        var taxaEntrega = 20;
        var total = entrega == true ? (subTotal + taxaEntrega) : subTotal;

        notaFiscal();
        function notaFiscal() {
            var numNotaFiscal = "43785-ACF";

            console.log("Nº Nota Fiscal:", numNotaFiscal);
            console.log("Nº Pedido:", numPedido);
            console.log("Produto:", produto);
            console.log("Forma Pagamento:", formaPagamento);
            console.log("Quantidade:", qtd);
            console.log("Preço:", preco);
            console.log("Sub-Total: R$" + subTotal);
            entrega == true ? console.log("Taxa de Entrega: R$" + taxaEntrega) : "";
            console.log("Total: R$" + total);
        }
    }
}

orcamento();

var nome = "Jessica";

var iife = function () {
    var local = "Sou local";
    nome = "Outro nome kkkkkk";
    console.log(local);
    console.log(nome);
}();

console.log(nome);

//Só executa uma vez iife();

//Exemplo IIFE - Juros
var valor = 346.45;
var cobranca = (function () {
    var juros = 3.45;
    var total = ((juros / 100) * valor) + valor;

    return { juros: juros, total: total };
})();

console.log(cobranca.juros);
console.log(cobranca.total);

var contador = 0;
function incrementar() {
    var contadorLocal = 0;
    contador++;
    contadorLocal++;
    console.log(contadorLocal);

}
incrementar();
incrementar();
incrementar();
console.log(contador);

var conta;

function increm() {
    var cont = 0;
    function gravar() {
        cont++;
        console.log(cont);
    }

    conta = gravar;
}

increm();
conta();
conta();
conta();

var contar = (function () {
    var contador = 0
    function setarValor(valor) {
        contador += valor;
    }

    return {
        incrementar: function () {
            setarValor(1);
        },

        decrementar: function () {
            setarValor(-1);
        },

        getValor: function () {
            return contador;
        }
    }
})();

contar.incrementar();
contar.incrementar();
contar.incrementar();
contar.decrementar();
console.log(contar.getValor());

//Fuinção Anonima
var funcAnonima = function () {
    console.log("Sou uma função anonima");
}
funcAnonima();
/*
window.onload = function(){
    this.console.log("Exemplo de uso da função anonima");
}*/

var pessoa = {
    nome: "Nome",
    saudacao: function () {
        console.log("Meu nome é", this.nome);
    }
}
pessoa.saudacao();

function mostrarCliente(nome) {
    console.log("Cliente:", nome);
}

function realizarVenda(fn) {
    fn("José");
    console.log("Produto: A");
    console.log("Preço: 2,30");
    console.log("Produto: B");
    console.log("Preço: 4,50");
}
realizarVenda(mostrarCliente);

//Processo Sincrono, Assincrono e Função calback
function processoSincrono() {
    var num = 1000;
    for (let index = 0; index < num; index++) {
        console.log(index);
    }
}

function iniciar(fn){
    console.log("Inicio");
    fn();
    console.log("Fim");
}
iniciar(processoSincrono);

function propaganda(tempo){
    setTimeout(function(){
        console.log("----------Propaganda---------");
    }, tempo);
}

function processoAssincrono(fn){
    console.log("Inicio");
    fn(4000);
    console.log("Rodando o App.....");
}
processoAssincrono(propaganda);

//Prototipo
function Carro(){};

var obj1 = new Carro();
var obj2 = new Carro();

console.log(obj1===obj2);
console.log(typeof obj1);
console.log(obj1 instanceof Carro);
console.log(obj1.constructor);

function Pessoa(){
    this.nome,
    this.cpf,
    this.getNomeCpf = function(){
        console.log("Nome:", this.nome + " - " + "CPF:", this.cpf)
    }
}

var p1 = new Pessoa();
p1.nome = "Pessoa 1";
p1.cpf = "123.456.789-10";
p1.getNomeCpf();

function Casa(cor, quartos,banheiro,suite){
    this.cor = cor;
    this.quartos = quartos,
    this.banheiro = banheiro,
    this.suite = suite,
    this.getPropriedades = function(){
        console.log("Cor:",this.cor);
        console.log("Quartos:",this.quartos);
        console.log("Banheiro:",this.banheiro);
        console.log("Suite:",this.suite == true ? "Tem" : "Não Tem");
    }
}

var c1 = new Casa("Branca",4,2,false);
console.log(c1);
c1.getPropriedades();