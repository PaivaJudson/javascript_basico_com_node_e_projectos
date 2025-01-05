
let lista = document.createElement('ul');

let item = document.createElement('li');

let texto = document.createTextNode('Texto da lista');

item.appendChild(texto);

for(i=0; i < 5; i++){
    
    let item = document.createElement('li');
    let texto = document.createTextNode('Texto da lista '+i);

    item.appendChild(texto);
    lista.appendChild(item);
}


let pai = document.querySelector('#container-principal');

pai.appendChild(lista);