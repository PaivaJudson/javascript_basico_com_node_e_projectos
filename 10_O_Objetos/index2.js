
let Cachorro = {
    raca: "SRD",
    patas: 4,

    latir: function(){
        console.log("Au, Au, Au...");
    }
}

let pastorAlemao = Object.create(Cachorro);


console.log(Cachorro);
console.log(pastorAlemao);

pastorAlemao.raca = "Pastor Alemao";
console.log(pastorAlemao.raca);
pastorAlemao.latir();



function criarCachorro(raca, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.cor = cor;

    cachorro.latir = function(){
        console.log("Au, Au, Au...");
    }
    
    return cachorro;
}

let labrador = criarCachorro('Labrador', "preto");

console.log(labrador);