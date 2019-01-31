//This no contexto global
console.log(this === window)
console.log(this)

function fn() {
    console.log(this);
    console.log(this === window);
    function fnInterna() {
        console.log(this);
        console.log(this === window);
    }
    fnInterna();
}
fn();

var nome = "Jessica";

function fnNome() {
    let nome = "Paulo";
    console.log(this.nome);
    console.log(nome);
}
fnNome();

console.log("---------------------------------------");

//This no escopo de Objeto
let pessoaObjetoLiteral = {
    nome: "João",
    exibirThis: function () {
        console.log(this);
        console.log(this === window);
    }
}
pessoaObjetoLiteral.exibirThis();

function Pessoa(nome) {
    this.nomeInterno = nome;
    this.exibirThis = function () {
        console.log(this);
        console.log(this === window);
    }
}

var pessoa = new Pessoa("João");
pessoa.exibirThis();

let exibirthisPessoa = pessoa.exibirThis;
console.log(exibirthisPessoa);
exibirthisPessoa();
exibirthisPessoa.bind(pessoa);
exibirthisPessoa();

console.log("---------------------------------------");

//This no uso do callback e call
let objetoPessoa = {
    nome: "Pedro",
    andar: function(fn){
        console.log(this);
        console.log(this === window);
        fn();
        fn.call(this);
    }
}

function passos(){
    console.log(this);
    console.log(this === window);
    console.log(this.nome);
}

objetoPessoa.andar(passos);
objetoPessoa.andar(function(){
    console.log(this);
});

console.log("---------------------------------------");

//This com elementos do DOM
let button1 = document.getElementById("button1");
button1.addEventListener('click', function(){
    console.log(this);
}, false);

let button2 = document.getElementById("button2");
button2.addEventListener('click', function(){
    console.log("Meu this",this);
}.apply(this), false);

//Funções assíncronas e síncronas com o This
function Livro(){
    this.pagina = 1;
    setTimeout(function(){
        console.log(this);
        console.log(this.pagina)
    }.bind(this), 1000);
    setInterval(function(){
        this.pagina++;
        console.log(this);
        console.log(this.pagina);
    }.bind(this), 2000);
}

var l = new Livro();
