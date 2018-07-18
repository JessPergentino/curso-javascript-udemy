console.log("Inicio Programação Síncrona");

//Função timer - Programação Assíncrona
setTimeout(function(){
    console.log("Executando Programação Assíncrona - 1");
}, 6000);

setTimeout(function(){
    console.log("Executando Programação Assíncrona - 2");
}, 4000);

setTimeout(function(){
    console.log("Executando Programação Assíncrona - 3");
}, 2000);

setTimeout(function(){
    console.log("Executando Programação Assíncrona - 4");
}, 5000);

console.log("Fim Programação Síncrona");
