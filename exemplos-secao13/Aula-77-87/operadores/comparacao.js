// ==

function igual(){
    var operando1 = 10;
    var operando2 = 3;
    var resultado = operando1 == operando2;
    console.log(resultado);
    var string = "3";
    console.log(operando2 == string);
    console.log(1 == true);
}

// ===

function igualTipo(){
    var operando1 = 10;
    var operando2 = 3;
    var resultado = operando1 === operando2;
    console.log(resultado);
    var string = "3";
    console.log(operando2 === string);
    console.log(1 === true);
}

// !=

function diferente(){
    var operando1 = 10;
    var operando2 = 3;
    var resultado = operando1 != operando2;
    console.log(resultado);
    var string = "3";
    console.log(operando2 != string);
    console.log(1 != true);
}

// !=

function diferenteTipo(){
    var operando1 = 10;
    var operando2 = 3;
    var resultado = operando1 !== operando2;
    console.log(resultado);
    var string = "3";
    console.log(operando2 !== string);
    console.log(1 !== true);
}

function maior(){
    var operando1 = 10;
    var operando2 = 3;
    var resultado = operando1 > operando2;
    console.log(resultado);
}

function menor(){
    var operando1 = 10;
    var operando2 = 3;
    var resultado = operando1 < operando2;
    console.log(resultado);
}

function maiorIgual(){
    var operando1 = 10;
    var operando2 = 10;
    var resultado = operando1 >= operando2;
    console.log(resultado);
}

function menorIgual(){
    var operando1 = 7;
    var operando2 = 10;
    var resultado = operando1 <= operando2;
    console.log(resultado);
}
