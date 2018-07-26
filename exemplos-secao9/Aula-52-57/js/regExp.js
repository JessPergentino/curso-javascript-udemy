//Declaração Literal
var padrao = /casa/;

//Declaração Construtor
var expressao = new RegExp(";");

//Texto
var texto = "A casa amarela é muito bela;"
console.log("O padrão está no Texto: " + padrao.test(texto));
console.log("Busca pela Expressão: ");
console.log(expressao.exec(texto));