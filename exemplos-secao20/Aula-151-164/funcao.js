//Declarando funções - forma literal
function mensagem(){
    console.log("Declarei uma função!!");
}
// Chamar função
mensagem();

//Função com parametros
function funcparam(valor){
    console.log("Eu sou um: " + valor);
}
funcparam("Parametro");

//Função com retorno
function funcretorno(valor1,valor2){
    return valor1 + valor2;
}
var result = funcretorno(4,5);
console.log(result);

//Declarando função - forma expressão
var minhaFuncao = function(x,y){
    return console.log(x - y);
}
minhaFuncao(10,5);

//Metodos em objetos
var pessoa = {
    nome: "Jessica",
    saudacao: function(){
        return console.log("Oi, eu sou " + this.nome);
    }
}
pessoa.saudacao();

//Função com mais parametros que argumentos
function exibirNome(p1,p2,p3){
    var p3 = p3 || "";
    return(console.log((p1 + " " + p2 + " " + p3).toUpperCase()));
}
exibirNome("Jessica", "Neves");

//Função com mais argumentos que parametros
function exibirNome(p1,p2,p3){
    var result = "";
    if(arguments.length > 3){
        for(item in arguments){
            result += arguments[item] + " ";
        }
        return console.log(result.toUpperCase());
    } else{
        return console.log((p1 + " " + p2 + " " + p3).toUpperCase());
    }   
}
exibirNome("Jessica", "Neves", "Pergentino", "Santos");
//Função como parametro
function divide(v1,v2){
    return v1/v2;
}

function multiplica(v1,v2){
    return v1*v2;
}

function calcular(fn, v1,v2){
    return fn(v1,v2);
}
console.log(calcular(divide,25,5));
console.log(calcular(multiplica,4,5));

//Função como retorno
function calc(operacao){
    if(operacao === "soma"){
        return function soma(v1,v2){
            return v1 +v2;
        }
    }else{
        return function subtrair(v1,v2){
            return v1-v2;
        }
    }
}
var fun = calc("soma");
console.log(fun(2,2));

//Função como elemento de um array
var array = [1,2,function(){
    console.log("Sou uma função em um Array :)");
}]
array[2]();

//Hoisting - variavel
console.log("Variavel içada", nome);
var nome = "Não vou aparacer :(";

//Hoisting - Função
hoistingFuncao();

function hoistingFuncao(){
    console.log("Fui declarada dps, mas irei funcionar, pois sou içada assim como a variavel");
}

//Exemplo da calculadora com Historico

function somar(v1,v2){
    return v1 + v2;
}

function subtrair(v1,v2){
    return v1 - v2;
}

function dividir(v1,v2){
    return v1 / v2;
}

function multiplicar(v1,v2){
    return v1 * v2;
}

calculadora.operacoes = [];
calculadora.contador = 0;
calculadora.exibir = function(){
    console.log("---------------Operações feitas:",calculadora.contador + "---------------");
    for (const op of calculadora.operacoes) {
        switch (op.operacao){
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

function calculadora(operacao, v1,v2){
    var result = 0;
    switch (operacao){
        case "somar":
            result = somar(v1,v2);
            break;
        case "subtrair":
            result = subtrair(v1,v2);
            break;
        case "dividir":
        result = dividir(v1,v2);
            break;
        case "multiplicar":
        result =  multiplicar(v1,v2);
            break;
        default:
        result = "Operação invalida";
            break;
    }
    historicoOperacaoes(operacao, v1,v2,result);
    return result;
}

function historicoOperacaoes(operacao, v1,v2,resultado){
    var obj = {operacao: operacao, v1:v1, v2:v2,resultado:resultado};
    calculadora.operacoes.push(obj);
    calculadora.contador++;
}

calculadora("somar", 45,74)
calculadora("subtrair", 245,100)
calculadora("multiplicar", 6,23)
calculadora("dividir", 754,24)

calculadora.exibir();
