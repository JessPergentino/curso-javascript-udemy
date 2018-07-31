var inputNome = document.getElementById("nomeBoot");

function selecionandoInput(){
    console.log("Tipo: " + typeof inputNome);
    console.log("Tipo com Call: " + Object.prototype.toString.call(inputNome));
    console.log("Valor do elemento: " + inputNome.value);
    console.log("Dasabilitar o elemento: inputNome.disable = true");
    inputNome.disabled = false;
    console.log("Deixar somente como leitura:  inputNome.readOnly = true;");
    inputNome.readOnly = false;
    console.log("tagName: " + inputNome.tagName);
    console.log("tagName type: " + inputNome.type);
    inputNome.value = "Jessica";
    console.log("Alterando o valor do elemento: " + inputNome.value);

}

var selectEstadoBoot = document.getElementById("selectEstadoBoot");

function selecionandoSelect(){
    console.log("Tipo: " + typeof selectEstadoBoot);
    console.log("Tipo com Call: " + Object.prototype.toString.call(selectEstadoBoot));
    console.log("Valor do elemento: " + selectEstadoBoot.value);
    console.log("Index que está selecionado: " + selectEstadoBoot.selectedIndex);
    console.log("tagName: " + selectEstadoBoot.tagName);
    console.log("tagName type: " + selectEstadoBoot.type);
    console.log("Mostrar as opções: " + selectEstadoBoot.options);
    console.log("Mostrar uma das Opções - item: " + selectEstadoBoot.options.item(1));
    console.log("Mostrar uma das Opções - Array: " + selectEstadoBoot.options[1]);
}

var checkPromocao = document.querySelector("#emailPromocionalCheckBoot");

function selecionandoCheckbox(){
    console.log("Tipo: " + typeof checkPromocao);
    console.log("Tipo com Call: " + Object.prototype.toString.call(checkPromocao));
    console.log("Valor do elemento: " + checkPromocao.value);
    console.log("Está Checkado: " + checkPromocao.checked);
    checkPromocao.checked = true;
    console.log("Alterar o check: checkPromocao.checked = true;");
    
}

var radioContato = document.querySelector("[name = contatoBoot]");
var radio1 = document.querySelector("#contatoTelefoneBoot");
var radio2 = document.querySelector("#contatoEmailBoot");

function selecionandoRadio(){
    console.log("Tipo: " + typeof radioContato);
    console.log("Tipo com Call: " + Object.prototype.toString.call(radioContato));
    console.log("Valor do elemento: " + radioContato.value);
    console.log("Está Checkado: " + radioContato.checked);
    console.log("Está Checkado: " + radio1.checked);
    console.log("Está Checkado: " + radio2.checked);
    
}