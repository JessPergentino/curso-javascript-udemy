//Set
const set = new Set();

set.add("Jessica");
set.add(123456);
set.add(true);
set.add([1, 2, 3, 4, 5]);
set.add({ teste: "teste1" });
set.add(new Map().set("chave", "valor"));
console.log(set.add(4));

console.log(set.size);

console.log(set.delete("Jessica"));
console.log(set.delete(200));
console.log(set.size);

console.log(set.has(true));
console.log(set.has("João"));

set.add("Jessica");
set.add(123456);
set.add(true);
console.log(set);

set.forEach(function (valor, chave, set) {
    console.log(chave, "-", valor);
});

for (let [chave, valor] of set.entries()) {
    console.log(chave, "-", valor);
}

console.log(set.values());
console.log(set.clear());
console.log(set.size);

//WeakSet
const weakSet = new WeakSet();

let obj1 = { teste: "teste1" };
let obj2 = { teste: "teste2" };
let obj3 = { teste: "teste3" };
let obj4 = { teste: "teste4" };

weakSet.add(obj1);
weakSet.add(obj2);
weakSet.add(obj3);

console.log(weakSet.has(obj1));
console.log(weakSet.has(obj2));
console.log(weakSet.has(obj3));
console.log(weakSet.has(obj4));

obj1 = null;

console.log(weakSet.has(obj1));
console.log(weakSet.has(obj2));
console.log(weakSet.has(obj3));
console.log(weakSet.has(obj4));

console.log(weakSet.delete(obj3));
console.log(weakSet.delete(obj4));

console.log(weakSet.has(obj1));
console.log(weakSet.has(obj2));
console.log(weakSet.has(obj3));
console.log(weakSet.has(obj4));
