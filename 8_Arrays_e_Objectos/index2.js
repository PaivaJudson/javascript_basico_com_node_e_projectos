
let pessoa = {
    nome: "Judson Paiva",
    profissao: "Programador",
    idade: 30
}

let cachorro = {
    nome: 'Shark',
    patas: 4,

    latir: function(){
        console.log("Au, Au, Au...");
    },
    detalhes: function(){
        console.log(this.nome);
        console.log(this.patas);    
    }
};

// console.log(cachorro.nome);
// console.log(cachorro.patas);

cachorro.latir();
cachorro.detalhes();
