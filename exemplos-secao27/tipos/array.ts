//ES5
var array = [2,3,4,5,6,7];
var array4 = [true, 'acv',123];

console.log("ES5:",array,array4);

//Typescript
let array2: number[] = [8,9,10,11,12]; // Array somente de numeros
let array3: Array<string> = ['a','b','c','d']; // Array somente de strings;
let array5: any[] = ['asd',132,true];

console.log("Typescript:",array2,array3,array5);