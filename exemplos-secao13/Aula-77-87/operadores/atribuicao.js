// = 
function atribuicao(){
var numero = 45;
var string = "Jessica";
console.log(numero,string);
numero = 21;
console.log(numero);
}

// +=
function atribuicaoAdicao(){
    var soma  = 12;
    console.log(soma += 3);
    var string = "21";
    var string1 = "3";
    console.log(string += "4");
    console.log(string1 += true);
    console.log(soma += true);
}

// -=
function atribuicaoSubtracao(){
    var sub = 40;
    console.log(sub -= 10);
}

// *=
function atribuicaoMultiplicacao(){
    var multi = 7;
    console.log(multi *= 3);
}

// /=
function atribuicaoDivisao(){
    var div = 21;
    console.log(div /= 2);
}

// /=
function atribuicaoMod(){
    var mod = 45;
    console.log(mod %= 8);
}

// /=
function atribuicaoExpo(){
    var expo = 2;
    console.log(expo **= 8);
}

//Deslocamento de bits

function esquerda(){
    var numero = 27;
    console.log("Base 10: " + numero);
    console.log("Base 2: " + numero.toString(2));
    numero <<= 5;
    console.log("Base 10: " + numero);
    console.log("Base 2: " + numero.toString(2));
}

function direita(){
    var numero = 27;
    console.log("Base 10: " + numero);
    console.log("Base 2: " + numero.toString(2));
    numero >>= 5;
    console.log("Base 10: " + numero);
    console.log("Base 2: " + numero.toString(2));
}

function direitaSemSinal(){
    var numero = 27;
    console.log("Base 10: " + numero);
    console.log("Base 2: " + numero.toString(2));
    numero >>>= 5;
    console.log("Base 10: " + numero);
    console.log("Base 2: " + numero.toString(2));
}
