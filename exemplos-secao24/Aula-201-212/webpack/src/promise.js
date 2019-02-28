let p = new Promise(function(resolve,reject){

    let teste = true;

    if(teste){
        resolve("Tudo Ok");
    }else{
        reject("Deu erro");
    }

}); //Código assincrono

p.then(retorno => {
    console.log(retorno);
}).catch(retorno => {
    console.log(retorno);
});