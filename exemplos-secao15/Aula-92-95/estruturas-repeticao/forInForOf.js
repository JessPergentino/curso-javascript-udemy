//Function
function forIn(){
    var conta = {cliente: 'José Carlos', dataAbertura: new Date('2016/02'), saldo: 7500.48, credito: 10000};
    var array = ['Mamão', 'Melão', 'Manga', 'Melancia', 'Morango'];

    for (const key in conta) {
        console.log(conta[key]);
    }

    for (const key in array) {
        console.log(array[key]);
         
    }
}

function forOf(){
    var array = [1,2,3,4,5,6,7];

    for (var valor of array) {
        console.log(valor);
    }
}
//Execução
forIn();
forOf();