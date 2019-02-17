
//Classes - ES5 e ES6
//ES5 - Definição da classe
function PessoaES5(nome, cpf) {//construtor
    //propriedades
    this.nome = nome;
    this.cpf = cpf;
}

//Métodos - utilizar o prototype para que possa ser usado pelas instancias
PessoaES5.prototype.nomeUpper = function () {
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
class PessoaES6 {
    constructor(nome, cpf) { //Construtor
        //propriedades
        this.nome = nome;
        this.cpf = cpf;
    }
    nomeUpper() {
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
//ES5
function FuncionarioES5(nome, cpf, matricula) {
    PessoaES5.call(this, nome, cpf);
    this.matricula = matricula
}
FuncionarioES5.prototype = Object.create(PessoaES5.prototype);
FuncionarioES5.prototype.constructor = FuncionarioES5;
FuncionarioES5.prototype.matriculaNome = function(){
    return this.matricula + " - " + this.nomeUpper();
}

var obj1Funcionario = new FuncionarioES5("Demetrius", "12345678841","1235");
var obj2Funcionario = new FuncionarioES5("Jessica", "8841123151","9875");

console.log(obj1Funcionario.nome);
console.log(obj1Funcionario.cpf);
console.log(obj1Funcionario.matricula);
console.log(obj1Funcionario.nomeUpper());
console.log(obj1Funcionario.matriculaNome());

//ES6
class FuncionarioES6 extends PessoaES6{
    constructor(nome,cpf,matricula){
        super(nome,cpf);
        this.matricula = matricula;
    }

    matriculaNome(){
        return `${this.matricula} - ${this.nomeUpper()}`
    }
}

var obj1FuncionarioES6 = new FuncionarioES6("Demetrius", "12345678841","1235");

console.log(obj1FuncionarioES6.nome);
console.log(obj1FuncionarioES6.cpf);
console.log(obj1FuncionarioES6.matricula);
console.log(obj1FuncionarioES6.nomeUpper());
console.log(obj1FuncionarioES6.matriculaNome());