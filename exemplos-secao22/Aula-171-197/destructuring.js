//Destructuring - Objeto
let objPessoa = {
    nome: "Jessica",
    idade: 23,
    email: "email@email.com",
    sexo: "F",
    telefone: "13246589",
    endereco: {rua: "Rua",numero:001,cidade:"Cidade",estado:"Estado"},
    site: undefined,
}

//ES5
var telefone = objPessoa.telefone;
var email = objPessoa.email;
console.log(email + " - " + telefone);

//ES6
let {nome, idade} = objPessoa; //nomes das propriedades que serão extraidas do objeto
console.log(`Nome: ${nome} - idade: ${idade}`);

let {salario} = objPessoa;
console.log(`Salario: ${salario}`);

//Rotulo - extrair propriedade com outro nome
let{nome:nomeComp, telefone:celular} = objPessoa;
console.log(`${nomeComp} - ${celular}`);

let {rua,numero,cidade,estado} = objPessoa.endereco;
console.log(rua,numero,cidade,estado);

let {endereco:{rua:r,numero:n,cidade:c,estado:e}} = objPessoa;
console.log(r,n,c,e);

//Valor Padrão
let {escola,pais,site} = objPessoa;
console.log(escola,pais="Brasil",site="site.com");

//Destructuring - Argumento
let objProd = {descricao: "Livro Js", preco: 89.56, pags:536};
let objCliente = {nome};

function venda({nome}, {descricao, preco,pags: paginas}, qtd = 1){
    console.log(`
        Cliente: ${nome}.
        Produto: ${descricao}. - Páginas: ${paginas}
        Quantidade: ${qtd}.
        Preço: ${preco}.
        Total: R$ ${qtd * preco}.
    `);
}
venda(objCliente, objProd);

//Destructuring - array
let array = [1,2,3,4,5,6,7,8,9,10,11];
let [um,dois,tres,,,,,,nove,dez] = array;
console.log(um,dois,tres,nove,dez);

let pessoas = [
    {nome1: "Maria1", telefone1: "465978132"},
    {nome2: "Maria2", telefone2: "465132123"},
    {nome3: "Maria3", telefone3: "465971324"},
    {nome4: "Maria4", telefone4: "987528132"},
];

let [,{nome2,telefone2}] = pessoas;
console.log(`Nome: ${nome2} - Telefone: ${telefone2}`);

//Inverter valores
let x = 25;
let y = 37;
console.log(x,y);
[x,y] = [y,x];
console.log(x,y);
