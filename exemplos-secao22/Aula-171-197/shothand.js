//Shothand property - Abriviação de variável
let nome = "Jessica", idade=25, cidade="São Paulo";

//ES5
let objPessoaES5 = {nome:nome,idade:idade,cidade:cidade};
console.log("Objeto",objPessoaES5);

//ES6
let objPessoaES6 = {nome,idade,cidade};
console.log("Objeto",objPessoaES6);

//Shothand Method - Abriviação de metodo

//ES5
objCalcES5 = {
    msg: function msg(){
        console.log("Olá");
    },
    somar: function somar(a,b){
        return console.log(a + b);
    }
}

objCalcES5.msg();
objCalcES5.somar(10,25);

//ES6
objCalcES6 = {
    msg(){
        console.log("Olá");
    },
    somar(a,b){
        return console.log(a + b);
    },
    *funcaoGeradora(i){
        yield i + 1;
    }
}

objCalcES6.msg();
objCalcES6.somar(15,65);
console.log(objCalcES6.funcaoGeradora(1).next().value);