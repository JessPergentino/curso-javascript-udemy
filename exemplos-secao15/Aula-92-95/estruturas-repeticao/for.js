// Funções
function zeroAdez() {
    for (var index = 0; index < 11; index++) {
        console.log(index);

    }
}

function imprimirArray() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (var index = 0; index < array.length; index++) {
        console.log(array[index]);

    }
}

function forSemContador() {
    var index = 0;
    for (; index < 10; index++) {
        console.log(index);
    }
}

function forSemIntervalo() {
    for (var index = 0; ;index++) {
        if (index == 3 || index == 5 || index == 7) {
            continue;
        }
        console.log(index);

        if (index == 10) {
            break;
        }
    }
}

//Execução
zeroAdez();
imprimirArray();
forSemContador();
forSemIntervalo();