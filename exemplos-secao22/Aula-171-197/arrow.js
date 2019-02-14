//Arrow Function
//função tradicional
function somar(a, b) {
    return a + b;
}
console.log(somar(54, 21));

//Expressão
let somarEx = function (a, b) {
    return a + b;
}
console.log(somarEx);
console.log(somarEx(10, 20));

//Versionamento arrow function
const somarArrowV1 = (a, b) => {
    return a + b;
}
console.log(somarArrowV1(10, 20));

const somarArrowV2 = (a, b) => a + b;
console.log(somarArrowV2(10, 20));

const arrowCompact = nome3 => nome3.toUpperCase(); // Função só com um parametro
console.log(arrowCompact("Jessica"));

const arrow = () => "Olá"; // Função sem parametro
console.log(arrow());

//Arrow Function - this lexico callback - Executar direto no console do browser
function Livro() {
    this.paginaAtual = 0;

    setInterval(function passarPagina() {
        this.paginaAtual++;
        console.log("This:", this);
        console.log("Pagina Atual:", this.paginaAtual);
    }, 1000);
}
let livro1 = new Livro();

//That - self ESC5 - Executar direto no console do browser
function Livro2() {
    this.paginaAtual = 0;
    let that = this;

    setInterval(function passarPagina() {
        that.paginaAtual++;
        console.log("This:", that);
        console.log("Pagina Atual:", that.paginaAtual);
    }, 1000);
}
let livro2 = new Livro2();

//Arrow Function - Executar direto no console do browser
function Livro3() {
    this.paginaAtual = 0;

    setInterval(() => {
        this.paginaAtual++;
        console.log("This:", this);
        console.log("Pagina Atual:", this.paginaAtual);
    }, 1000);
}
let livro3 = new Livro2();

//Arrow function this lexico objeto

/* Sem arrow function - escopo botão
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){
    console.log("this", this);
}, false);
*/
//Escopo window
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
    console.log("this", this);
}.bind(this), false);

//Com arrow function - escopo window
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    console.log("this", this);
}, false);

function Pessoa() {
    this.nome;

    // Escopo do botão
    this.cadastrarEventoHtmlFn = function () {
        let btn3 = document.getElementById("btn3");
        btn3.addEventListener("click", function() {
            console.log("this", this);
        }, false);
    }

    // Escopo do objeto - Pessoa
    this.cadastrarEventoHtmlArrow = function () {
        let btn4 = document.getElementById("btn4");
        btn4.addEventListener("click", () => {
            console.log("this", this);
        }, false);
    }
}

let pessoa2 = new Pessoa();
pessoa2.cadastrarEventoHtmlFn();
pessoa2.cadastrarEventoHtmlArrow();
