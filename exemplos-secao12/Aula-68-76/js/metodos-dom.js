function metodosDOM(){
    //Criar elemento
    var paragrafo = document.createElement("p");
    //Criar Texto para o elemento
    var texto = document.createTextNode("Curso JS!!");
    // Adicionar texto criado ao elemento
    paragrafo.appendChild(texto);
    //Adicionar ao body
    document.body.appendChild(paragrafo);
    
    //Recuperar Input
    var inputNomeFilho = document.getElementById("nomeBoot");
    //Recuperar pai do input
    var elementoPai = inputNomeFilho.parentNode;
    //Inserir o elemento antes do input do nome
    elementoPai.insertBefore(paragrafo,inputNomeFilho);

    //Remover Elemento
    elementoPai.removeChild(paragrafo);

    //Subistituir elemento - elemento que irá substituir, elemento que será substituido
    elementoPai.replaceChild(paragrafo,inputNomeFilho);

    //Outros Metodos
    console.log(elementoPai.firstElementChild);
    console.log(elementoPai.lastChild);
    console.log(elementoPai.lastElementChild);
}

function innerHTML(){
    var paragrafo = document.createElement("p");
    paragrafo.innerText = "Jessica Pergentino";
    document.body.appendChild(paragrafo);
}