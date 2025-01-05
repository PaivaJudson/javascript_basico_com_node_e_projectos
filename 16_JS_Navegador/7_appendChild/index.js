
let novoElemento = document.createElement('p');
let texto = document.createTextNode('Novo texto criado');

novoElemento.appendChild(texto);

let p = document.querySelector("#paragrafo-principal");
let pai = p.parentNode;


pai.appendChild(novoElemento);



