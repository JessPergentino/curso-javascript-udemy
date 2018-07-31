var selects = document.getElementsByTagName("select");

function select(){
    console.log(selects);
}

var radios = document.getElementsByName("contatoBoot");

function radio(){
    console.log(radios);
    console.log(radios[1].checked);
}

var checkes = document.getElementsByClassName("checkbox");

function checkbox(){
    console.log(checkes);
}