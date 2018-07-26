//Declarando uma Função
function exibirMensagem(){
    console.log("Esta é uma função sem parâmetros ou retorno");
}

//Função com parâmetro
function exibirNome(nome){
    console.log("Seu nome é: " + nome);
}

//Função com Parâmetro e Retorno
function soma(a,b){
    return a + b;
}

//Chamando as Funções
exibirMensagem();
exibirNome("Jessica");
exibirNome("Demetrius");
console.log("O resultado da soma 47 + 58 é: " + soma(47,58));
console.log("43+34=" + soma(43,34));