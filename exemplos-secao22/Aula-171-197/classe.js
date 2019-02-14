
//Classes - ES5 e ES6
//ES5 - Definição da classe
function PessoaES5(nome, cpf){//construtor
    //propriedades
    this.nome = nome;
    this.cpf = cpf;
}

//Métodos - utilizar o prototype para que possa ser usado pelas instancias
PessoaES5.prototype.nomeUpper = function(){
    return this.nome.toUpperCase();
}
//Instancia Objeto ES5
var objetoPessoaES51 = new PessoaES5("Jessica", "213564894561");
var objetoPessoaES52 = new PessoaES5("Demetrius", "213532164987");
console.log(objetoPessoaES51);
console.log(objetoPessoaES52);
console.log(objetoPessoaES51.nomeUpper());
console.log(objetoPessoaES52.nomeUpper());

//ES6 - Definição da Classe
class PessoaES6{
    constructor(nome,cpf){ //Construtor
        //propriedades
        this.nome = nome;
        this.cpf = cpf;
    }
    nomeUpper(){
        return this.nome.toUpperCase();
    }
}

var objetoPessoaES61 = new PessoaES6("Maria", "213564894561");
var objetoPessoaES62 = new PessoaES6("João", "213532164987");
console.log(objetoPessoaES61);
console.log(objetoPessoaES62);
console.log(objetoPessoaES61.nomeUpper());
console.log(objetoPessoaES62.nomeUpper());

//Herança