//Declaração de Variaveis
var nome = 'Jessica'
var sobreNome = 'Pergentino'

//Intrução solta
console.log('Essa é uma intrução solta no arquivo JS');

//Declaração de Função

function exibirNome(){
    console.log('Meu nome é: ' + nome);
}

function execucaoOnLoad(){
    $('#h3-onLoad').append('Essa é uma execução onLoad');
}

function execucaoOnClick(){
    $('#h2-onClick').append('O Meu Nome Completo é: ' + nome + ' ' + sobreNome + ' - Execução onClick');
}

//Chamar Função
exibirNome();