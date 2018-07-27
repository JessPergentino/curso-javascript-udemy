//Wrapper
var valorString = "Minha Frase Legal!"
console.log(valorString.substr(12,8));

//Processo Wrapper
var valorStringTemp = new String(valorString);
var substr = valorStringTemp.substr(12,8);
valorStringTemp = null;
console.log(substr);
substr = null;