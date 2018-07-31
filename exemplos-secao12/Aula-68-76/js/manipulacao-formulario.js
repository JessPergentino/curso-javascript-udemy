var form = document.querySelector("#formBoot");

function manipularForm(){
    console.log("Tipo: " + typeof form);
    console.log("Tipo: " + Object.prototype.toString.call(form));
    console.log("Tamanho: " + form.length);
    console.log("Elemento: " + form[0]);
}

function exibirDados(elemento){
    console.log(elemento);
}