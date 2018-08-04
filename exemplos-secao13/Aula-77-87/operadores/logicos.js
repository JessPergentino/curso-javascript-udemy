// &&

function and(){
    var resultado = (10 == 10) && (7==3);
    var resultado2 = (10 == 10) && (7==7);
    console.log(resultado);
    console.log(resultado2);

    console.log((true == true) && (true == "true"));
    console.log((true == true) && (true == "true1"));
    console.log((true == Boolean("Jessica") && (10 == 10)));
}

// ||

function or(){
    var resultado = (10 == 10) || (7==3);
    var resultado2 = (10 == 10) || (7==7);
    console.log(resultado);
    console.log(resultado2);
}

// !

function not(){
    var resultado = (10 == 10) || (7==3);
    console.log(resultado);
    console.log(!resultado);
    console.log(!!resultado);

    var string = "Jessica";
    console.log(!string);
    console.log(!!string);
}
